import styles from "../styles/index.module.css";

export default function IndexPage() {
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
        <div className="container py-4" id="works">
          <h2>災害時に必要なものを持っていますか？</h2>
          <p>持っている災害グッズを登録してください</p>
          <div className="card-deck">
            <div className="card">
              <img src="img/sample4.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">水</h5>
                <p className="card-text">
                  これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
                </p>
                <p className="card-text">
                  <small className="text-muted">これはさんぷる</small>
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="card">
              <img src="img/sample4.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">食料</h5>
                <p className="card-text">
                  これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
                </p>
                <p className="card-text">
                  <small className="text-muted">これはさんぷる</small>
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="card">
              <img src="img/sample4.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">衣類・下着</h5>
                <p className="card-text">
                  これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
                </p>
                <p className="card-text">
                  <small className="text-muted">これはさんぷる</small>
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="card">
              <img src="img/sample4.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">タオル</h5>
                <p className="card-text">
                  これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
                </p>
                <p className="card-text">
                  <small className="text-muted">これはさんぷる</small>
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
          </div>
          <div className="card-deck mt-5">
            <div className="card">
              <img src="img/sample4.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">マスク</h5>
                <p className="card-text">
                  これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
                </p>
                <p className="card-text">
                  <small className="text-muted">これはさんぷる</small>
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="card">
              <img src="img/sample4.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">予備電池</h5>
                <p className="card-text">
                  これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
                </p>
                <p className="card-text">
                  <small className="text-muted">これはさんぷる</small>
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="card">
              <img src="img/sample4.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">懐中電灯</h5>
                <p className="card-text">
                  これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
                </p>
                <p className="card-text">
                  <small className="text-muted">これはさんぷる</small>
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="card">
              <img src="img/sample4.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">マッチ</h5>
                <p className="card-text">
                  これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
                </p>
                <p className="card-text">
                  <small className="text-muted">これはさんぷる</small>
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
          </div>
          <div className="card-deck mt-5">
            <div className="card">
              <img src="img/sample4.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">救急用品</h5>
                <p className="card-text">
                  これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
                </p>
                <p className="card-text">
                  <small className="text-muted">これはさんぷる</small>
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="card">
              <img src="img/sample4.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">使い捨てカイロ</h5>
                <p className="card-text">
                  これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
                </p>
                <p className="card-text">
                  <small className="text-muted">これはさんぷる</small>
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="card">
              <img src="img/sample4.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">ブランケット</h5>
                <p className="card-text">
                  これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
                </p>
                <p className="card-text">
                  <small className="text-muted">これはさんぷる</small>
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="card">
              <img src="img/sample4.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">レインウェア</h5>
                <p className="card-text">
                  これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
                </p>
                <p className="card-text">
                  <small className="text-muted">これはさんぷる</small>
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
          </div>
          <div className="card-deck mt-5">
            <div className="card">
              <img src="img/sample4.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">ズック靴</h5>
                <p className="card-text">
                  これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
                </p>
                <p className="card-text">
                  <small className="text-muted">これはさんぷる</small>
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="card">
              <img src="img/sample4.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">防災用ヘルメット</h5>
                <p className="card-text">
                  これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
                </p>
                <p className="card-text">
                  <small className="text-muted">これはさんぷる</small>
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="card">
              <img src="img/sample4.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">軍手</h5>
                <p className="card-text">
                  これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
                </p>
                <p className="card-text">
                  <small className="text-muted">これはさんぷる</small>
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="card">
              <img src="img/sample4.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">洗面用具</h5>
                <p className="card-text">
                  これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
                </p>
                <p className="card-text">
                  <small className="text-muted">これはさんぷる</small>
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
          </div>
        </div>
        <div className="card-deck mt-5">
          <div className="card">
            <img src="img/sample4.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">歯ブラシ</h5>
              <p className="card-text">
                これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
              </p>
              <p className="card-text">
                <small className="text-muted">これはさんぷる</small>
              </p>
            </div>
          </div>
          {/* <!-- card --> */}
          <div className="card">
            <img src="img/sample4.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">ウェットティッシュ</h5>
              <p className="card-text">
                これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
              </p>
              <p className="card-text">
                <small className="text-muted">これはさんぷる</small>
              </p>
            </div>
          </div>

          {/* <!-- card deck --> */}
        </div>
        {/* <!-- container --> */}
        <label className="open" for="pop-up">
          ポップアップを表示する
        </label>
        <input type="checkbox" id="pop-up" />
        <div className="overlay">
          <div className="window">
            <label className="close" for="pop-up">
              ×
            </label>
            <p className="text">ポップアップの中身が入ります</p>
          </div>
        </div>
      </body>
    </>
  );
}
