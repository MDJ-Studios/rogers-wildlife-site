import styles from "@/components/ui/burger_button/Burger.module.css";

export default function Burger({ isNavOpen, setNavOpen }) {
    const handleClick = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <nav className={styles.mobile_nav}>
            <button
                className={`${styles.mobile_button} ${isNavOpen ? styles.clickedButton : styles.button}`}
                onClick={handleClick}
            >
                {isNavOpen ? <p className={`${styles.mobile_button} ${styles.close_button}`}>Close</p> : <p>Menu</p>}
            </button>
        </nav>
    );
}
