import Image from "next/image";
import styles from './venmo.module.css';

export default function Venmo() {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <a href="https://account.venmo.com/u/Rogers-Wildlife" target="_blank">
                    <Image
                        src={"/images/venmo.jpeg"}
                        alt="venmo image"
                        width={290}
                        height={1000}
                        className={styles.image}
                    />
                </a>
            </div>
        </div>
    );
}
