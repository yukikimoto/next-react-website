import Logo from "component/Logo/Logo.jsx";
import styles from 'component/Footer/Footer.module.css'
import Container from "component/Container/Container";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          [ソーシャル]
        </div>
      </Container>
    </footer>
  );
}
