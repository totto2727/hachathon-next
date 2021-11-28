import styles from "../styles/index.module.css";
import Card from "../components/Card";
import requiredItems from "../data/requiredItems";
import stockpile from "../data/stockpile";

export default function IndexPage() {
  const cards = requiredItems.map((item) => {
    return <Card requiredItem={item} stockpile={stockpile} key={item.name} />;
  });
  let cardDecks = [];

  for (let i = 0; i < cards.length; i += 4) {
    cardDecks.push(
      <div className="card-deck  mt-5" key={i}>
        {cards.slice(i, i + 4)}
      </div>
    );
  }

  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
        ></script>
      </head>
      <body>
        <header className={styles.header}>
          <h1 className={styles.title}>備蓄カンリくん</h1>
          <nav className={styles.nav}>
            <ul class={styles["menu-group"]}>
              <li class={styles["menu-item"]}>
                <a href="/lineqr">LINE</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="container py-4" id="works">
          <h2>災害時に必要なものを持っていますか？</h2>
          <p>持っている災害グッズを登録してください</p>
          <div className="card-deck">{cardDecks}</div>
        </div>
      </body>
    </>
  );
}
