import Link from "next/link";
import styles from "./header.module.scss";

export default function Header(props) {
  const local = props.padding;
  return(
    <div className={styles.headerContainer} style={{padding: local}}>
      <Link  href="/">
        <img src="/logo.svg" alt="logo" />
      </Link>
    </div>
  )
}
