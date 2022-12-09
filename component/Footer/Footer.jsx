import Logo from "Logo/Logo.jsx";
import styles from 'component/Footer/Footer.module.css'

export default function Footer(className={wrapper}) {
  return (
    <footer>
      <div className={styles.flexContainer}>
        <Logo />
      </div>
    </footer>
  );
}
