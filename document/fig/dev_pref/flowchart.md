```mermaid
graph TD
    L(トップページ<br>GET/);
    L --> A(都道府県一覧ページ<br>GET /pref) --> |名称からリンク|B(詳細ページ<br>GET /pref/:id);
    A --> C(新規作成ページ<br>GET /pref/create);

    C --> |追加ボタン|D[新規追加処理<br>POST /pref];
    D --> A;
    D --> |新たに作成|C;

    B --> |変更ボタン|E(編集ページ<br>GET /pref/edit/:id);
    B --> |削除ボタン|F(削除確認ページ<br>GET /pref/check/:id);

    E --> |編集ボタン|G[変更処理<br>POST /pref/update/:id];
    F --> H[削除処理<br>GET /pref/delete/:id];

    G --> B;
    H --> A;


```
