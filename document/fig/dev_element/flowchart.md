```mermaid
graph TD
    L(トップページ<br>GET/);
    L --> A(元素一覧ページ<br>GET /element) --> |名称からリンク|B(詳細ページ<br>GET /element/:id);
    A --> C(新規作成ページ<br>GET /element/create);

    C --> |追加ボタン|D[新規追加処理<br>POST /element];
    D --> A;
    D --> |新たに作成|C;

    B --> |変更ボタン|E(編集ページ<br>GET /element/edit/:id);
    B --> |削除ボタン|F(削除確認ページ<br>GET /element/check/:id);

    E --> |編集ボタン|G[変更処理<br>POST /element/update/:id];
    F --> H[削除処理<br>GET /element/delete/:id];

    G --> B;
    H --> A;


```
