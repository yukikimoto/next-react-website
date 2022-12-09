import Logo from "../Logo/Logo";
import Nav from "component/Nav/Nav";
import styles from 'component/Header/Header.module.css'

export default function Header() {
  return (
    <header>
      <div className={styles.flexContainer}>
        <Logo boxOn />
        <Nav />
      </div>
    </header>
  );
}
