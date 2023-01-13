import styles from 'component/Post-body/Post-body.module.css'

export default function PostBody({ children }) {
    return (
        <div className={styles.stack}>
            {children}
        </div>
    )
}