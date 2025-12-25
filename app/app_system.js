"use strict";

const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//landing
app.get("/", (req, res) => {
    res.render("landing", { message: "25G1034" });
});

//prefecture

//データ
let prefectures = [
    { id: 0, name: "都道府県" ,code: 0, area: 0, population: 0, capital: "", region: "" },
    { id: 1, name: "東京都" ,code: 13, area: 2199.94, population: 14273066, capital: "新宿区", region: "関東" },
    { id: 2, name: "大阪府" ,code: 27, area: 1905.25, population: 8777998, capital: "大阪市", region: "近畿" },
    { id: 3, name: "福岡県" ,code: 40, area: 4987.66, population: 5088841, capital: "福岡市", region: "九州" },
];

//一覧
app.get("/pref", (req, res) => {
    res.render('pref/pref', { data: prefectures });
});

//新規フォーム
app.get("/pref/create", (req, res) => {
    res.redirect('/public/pref_new.html');
});


//詳細
app.get("/pref/:id", (req, res) => {
    const number = req.params.id;
    const detail = prefectures[number];
    res.render('pref/pref_detail', {id: number, data: detail });
});

//編集フォーム
app.get("/pref/edit/:id", (req, res) => {
    const number = req.params.id;
    const detail = prefectures[number];
    res.render('pref/pref_edit', {id: number, data: detail });
});

//削除確認フォーム
app.get("/pref/check/:id", (req, res) => {
    const number = req.params.id;
    const detail = prefectures[number];
    res.render('pref/pref_check', {id: number, data: detail });
});

//作成処理
app.post("/pref", (req, res) => {
    const id = prefectures.length;
    const name = req.body.name;
    const code = req.body.code;
    const area = req.body.area;
    const population = req.body.population;
    const capital = req.body.capital;
    const region = req.body.region;
    prefectures.push({ id: id, name: name, code: code, area: area, population: population, capital: capital, region: region });
    console.log('新規追加後の都道府県：', req.body);

    if (req.body.page === '登録して新たに作成') {
        res.redirect('/pref/create');
    } else {
        res.render('pref/pref', { data: prefectures });
    }
});

//更新処理
app.post("/pref/update/:id", (req, res) => {
    prefectures[req.params.id].name = req.body.name;
    prefectures[req.params.id].code = req.body.code;
    prefectures[req.params.id].area = req.body.area;
    prefectures[req.params.id].population = req.body.population;
    prefectures[req.params.id].capital = req.body.capital;
    prefectures[req.params.id].region = req.body.region;
    console.log('更新後の都道府県：', prefectures[req.params.id]);
    res.render('pref/pref_detail', {id: req.params.id, data: prefectures[req.params.id]} );
});

//削除処理
app.get("/pref/delete/:id", (req, res) => {
    const name = prefectures[req.params.id].name;
    prefectures.splice(req.params.id, 1);
    console.log(name + 'を削除しました');
    res.redirect('/pref');
});







//constellation

//データ
let constellations = [
    { id: 0, name: "星座" , code: "", shape: "", height: "", star: "", season: "" },
    { id: 1, name: "オリオン座" , en: "Orion", shape: "男性", height: "57", star: "ベテルギウス", season: "冬" },
    { id: 2, name: "かに座" , en: "Cancer", shape: "動物", height: "74", star: "アクベンス", season: "春" },
    { id: 3, name: "カシオペヤ座" , en: "Cassiopeia", shape: "女性", height: "N66", star: "シェダル", season: "秋" },
    { id: 4, name: "はくちょう座" , en: "Cygnus", shape: "動物", height: "N83", star: "デネブ", season: "夏" },
    { id: 5, name: "さそり座" , en: "Scorpius", shape: "動物", height: "28", star: "アンタレス", season: "夏" },
    { id: 6, name: "こぐま座" , en: "Ursa minor", shape: "動物", height: "N48", star: "北極星", season: "春" },
    { id: 7, name: "ケンタウルス座" , en: "Centaurus", shape: "空想動物", height: "8", star: "リギル・ケンタウルス", season: "南天" },
    { id: 8, name: "こと座" , en: "Lyra", shape: "道具", height: "90", star: "ベガ", season: "夏"}
];

//一覧
app.get("/stella", (req, res) => {
    res.render('stella/stella', { data: constellations });
});

//新規フォーム
app.get("/stella/create", (req, res) => {
    res.redirect('/public/stella_new.html');
});


//詳細
app.get("/stella/:id", (req, res) => {
    const number = req.params.id;
    const detail = constellations[number];
    res.render('stella/stella_detail', {id: number, data: detail });
});

//編集フォーム
app.get("/stella/edit/:id", (req, res) => {
    const number = req.params.id;
    const detail = constellations[number];
    res.render('stella/stella_edit', {id: number, data: detail });
});

//削除確認フォーム
app.get("/stella/check/:id", (req, res) => {
    const number = req.params.id;
    const detail = constellations[number];
    res.render('stella/stella_check', {id: number, data: detail });
});

//作成処理
app.post("/stella", (req, res) => {
    const id = constellations.length;
    const name = req.body.name;
    const en = req.body.en;
    const shape = req.body.shape;
    const height = req.body.height;
    const star = req.body.star;
    const season = req.body.season;
    constellations.push({ id: id, name: name, en: en, shape: shape, height: height, star: star, season: season });
    console.log('新規追加後の星座：', req.body);

    if (req.body.page === '登録して新たに作成') {
        res.redirect('/stella/create');
    } else {
        res.render('stella/stella', { data: constellations });
    }
});

//更新処理
app.post("/stella/update/:id", (req, res) => {
    constellations[req.params.id].name = req.body.name;
    constellations[req.params.id].en = req.body.en;
    constellations[req.params.id].shape = req.body.shape;
    constellations[req.params.id].height = req.body.height;
    constellations[req.params.id].star = req.body.star;
    constellations[req.params.id].season = req.body.season;
    console.log('更新後の星座：', constellations[req.params.id]);
    res.render('stella/stella_detail', {id: req.params.id, data: constellations[req.params.id]} );
});

//削除処理
app.get("/stella/delete/:id", (req, res) => {
    const name = constellations[req.params.id].name;
    constellations.splice(req.params.id, 1);
    console.log(name + 'を削除しました');
    res.redirect('/stella');
});









//element






//app
app.listen(8080, () => console.log("Example app listening on port 8080!"));
