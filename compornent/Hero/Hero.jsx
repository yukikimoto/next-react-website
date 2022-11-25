import styles from './Hero.module.styles'

export default function Hero(props) {
    const { title, subTitle, imageOn=false } = props;
    return (
        <>
            <div>
                <div className={styles.text}>
                    <h1 className={styles.title}>{ title }</h1>
                    <p className={styles.subTitle}>{subTitle}</p>
                </div>
                {imageOn &&
                    <figure>
                        [画像]
                    </figure>
                }
            </div>
        </>
    )
}