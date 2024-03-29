import Link from "next/link"
import styles from "component/Logo/Logo.module.css"

export default function Logo({ boxOn = false}) {
    return (
        <>
            <Link href="/"
            className={boxOn ? styles.box : styles.flexContainer}>
                CUBE
            </Link>
        </>
    );
}