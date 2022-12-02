import styles from 'component/Hero/Hero.module.css'
import Image from "next/image";

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div>
      <div calssName={styles.text}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      {imageOn && (
        <figure>
          [画像]
        </figure>
      )}
    </div>
  );
}
