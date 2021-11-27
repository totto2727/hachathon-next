import styles from "../styles/detail.module.css"
import { useEffect } from "react"

export default function Detail() {
    useEffect(() => {
        const nameValue = document.getElementsByClassName("name")[0];
        const amountValue = document.getElementsByClassName("amount")[0];
        const deadlineValue = document.getElementsByClassName("deadline")[0];
        const submitBtn = document.getElementsByClassName("submit_btn")[0];

        const addTasks = (name, amount, deadline) => {
            const table = document.getElementById("foodTable");
            const arr = [name, amount + "食分", deadline];

            var tr = document.createElement("tr");
            for (var i = 0; i < 3; i++) {
                var td = document.createElement("td");
                td.innerHTML = arr[i];
                tr.appendChild(td);
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
            const name = nameValue.value;
            const amount = amountValue.value;
            const deadline = deadlineValue.value;
            addTasks(name, amount, deadline);
            nameValue.value = "";
            amountValue.value = "";
            deadlineValue.value = "2021-11-28";
        });
    }, []);

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
                <div class="container">
                    <h2 className={styles["item-label"]}>
                        <span>食べ物</span>
                    </h2>

                    <form>
                        <table class="table">
                            <thead class="table-default">
                                <tr>
                                    <th>名前</th>
                                    <th>個数・容量</th>
                                    <th>賞味期限</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody id="foodTable">
                                <tr>
                                    <td>
                                        <input class="name" type="text" />
                                    </td>
                                    <td>
                                        <input class="amount" type="number" min="0" />
                                        食分
                                    </td>
                                    <td>
                                        <input class="deadline" type="date" defaultValue="2021-11-28" />
                                    </td>
                                    <td>
                                        <input
                                            class="submit_btn btn btn-primary"
                                            type="submit"
                                            defaultValue="登録"
                                        />
                                    </td>
                                </tr>
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
