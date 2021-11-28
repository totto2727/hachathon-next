import styles from "../styles/detail.module.css";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import stockpile from "../data/stockpile";

export default function Detail() {
  const router = useRouter();
  // {
  //   name: "水",
  //   amountRequired: 9,
  //   unit: "L",
  //   imageURL: "/water.png"
  // }
  const { name, unit } = router.query;

  useEffect(() => {
    const nameValue = document.getElementsByClassName("name")[0];
    const amountValue = document.getElementsByClassName("amount")[0];
    const deadlineValue = document.getElementsByClassName("deadline")[0];
    const submitBtn = document.getElementsByClassName("submit_btn")[0];

    const addTasks = (name, amount, deadline) => {
      const table = document.getElementById("foodTable");
      const arr = [name, amount + unit, deadline];

      var tr = document.createElement("tr");
      for (let i = 0; i < 3; i++) {
        if (arr[i]) {
          const td = document.createElement("td");
          td.innerHTML = arr[i];
          tr.appendChild(td);
        }
      }

      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Delete";
      deleteButton.classList.add("btn-danger");
      deleteButton.classList.add("btn");
      var btnTd = document.createElement("td");
      btnTd.appendChild(deleteButton);
      tr.append(btnTd);

      table.appendChild(tr);

      deleteButton.addEventListener("click", (evt) => {
        evt.preventDefault();
        deleteTasks(deleteButton);
      });
    };

    const deleteTasks = (deleteButton) => {
      const table = document.getElementById("foodTable");
      const chosenTask = deleteButton.closest("tr");
      table.removeChild(chosenTask);
    };

    submitBtn.addEventListener("click", (evt) => {
      evt.preventDefault();
      const name = nameValue?.value;
      const amount = amountValue.value;
      const deadline = deadlineValue.value;
      addTasks(name, amount, deadline);
      if (name) nameValue.value = "";
      amountValue.value = "";
      deadlineValue.value = "2021-11-28";
    });
  }, []);

  const items = stockpile[name];

  const rows = items.map((item, i) => (
    <tr key={i}>
      {name === "食べ物" ? <td>item.name</td> : undefined}
      <td>
        {item.amount}
        {unit}
      </td>
      <td>{item.term}</td>
    </tr>
  ));

  return (
    <>
      <head>
        {/* <!-- Bootstrap CSS --> */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        />
        <title>詳細ページ</title>
      </head>
      <body>
        <header className={styles.header}>
          <Link href="/">
            <a>一覧</a>
          </Link>
          <h1 className={styles.title}>備蓄</h1>
          <nav className={styles.nav}>
            <ul className={styles["menu-group"]}></ul>
          </nav>
        </header>
        <div class="container">
          <h2 className={styles["item-label"]}>
            <span>{name}</span>
          </h2>

          <form>
            <table class="table">
              <thead class="table-default">
                <tr>
                  {name === "食べ物" ? <td>名前</td> : undefined}
                  <th>個数・容量</th>
                  <th>賞味期限</th>
                  <th></th>
                </tr>
              </thead>

              <tbody id="foodTable">
                <tr>
                  {name === "食べ物" ? (
                    <td>
                      <input class="name" type="text" />
                    </td>
                  ) : undefined}
                  <td>
                    <input class="amount" type="number" min="0" />
                    {unit}
                  </td>
                  <td>
                    <input
                      class="deadline"
                      type="date"
                      defaultValue="2021-11-28"
                    />
                  </td>
                  <td>
                    <input
                      class="submit_btn btn btn-primary"
                      type="submit"
                      defaultValue="登録"
                    />
                  </td>
                </tr>
                {rows}
              </tbody>
            </table>
          </form>
        </div>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossorigin="anonymous"
        ></script>
      </body>
    </>
  );
}
