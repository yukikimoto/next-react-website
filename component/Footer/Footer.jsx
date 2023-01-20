import Container from "component/Container/Container";
import Logo from "component/Logo/Logo";
import Social from 'component/social/social';
import styles from "component/Footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  );
}
