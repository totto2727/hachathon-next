import styles from "../styles/LINE.module.css";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function TestPage() {
  return (
    <>
      <head>
        <title>LINE_QR</title>
      </head>
      <body>
        <header className={styles.header}>
          <Link href="/">
            <a>一覧</a>
          </Link>
          <h1 className={styles.title}>備蓄カンリくん</h1>
        </header>
        <div className={styles.qrcode}>
          <p class="qrmessage">
            <b>カンリくんのLINEQRコード</b>
          </p>
          <Image src="/LINE.png" alt="" title="LINE" width="500" height="500" />
        </div>
        <div className={styles.aaaa}></div>
      </body>
    </>
  );
}
