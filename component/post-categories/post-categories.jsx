import styles from 'component/post-categories/post-categories.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'

export default function PostCategoris({ categoris }) {
    return (
        <div className={styles.flexContainer}>
            <h3 className={styles.heading}>
                <FontAwesomeIcon icons={faFolderOpen} />
                <span className="sr-only">Categories</span>
            </h3>
            <ul className={styles.list}>
                {categoris.map(({ name, slug }) => (
                <li key={slug}>
                    <Link href={`/blog/categories/${slug}`}>
                        <a>{name}</a>
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    )
}