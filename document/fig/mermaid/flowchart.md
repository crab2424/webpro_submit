```mermaid
graph TD
    L(トップページ<br>GET/);
    L --> A(一覧ページ<br>GET /recourse) --> |名称からリンク|B(詳細ページ<br>GET /recourse/:id);
    A --> C(新規作成ページ<br>GET /recourse/create);

    C --> |追加ボタン|D[新規追加処理<br>POST /recourse];
    D --> A;
    D --> |新たに作成|C;

    B --> |変更ボタン|E(編集ページ<br>GET /recourse/edit/:id);
    B --> |削除ボタン|F(削除確認ページ<br>GET /recourse/check/:id);

    E --> |編集ボタン|G[変更処理<br>POST /recourse/update/:id];
    F --> H[削除処理<br>GET /recourse/delete/:id];

    G --> B;
    H --> A;


```
