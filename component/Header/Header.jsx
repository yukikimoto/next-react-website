import Logo from "../Logo/Logo";
import Nav from "component/Nav/Nav";
import styles from 'component/Header/Header.module.css'
import Container from "component/Container/Container";

export default function Header() {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  );
}
