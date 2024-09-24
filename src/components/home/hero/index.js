import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/components/home/hero/Hero.module.css";
import DonateButton from "@/components/ui/donate-button";

export default function Hero() {
    const router = useRouter();
    const [isOnExcludedPage, setIsOnExcludedPage] = useState(false);
    
    useEffect(() => {
        const excludedPaths = ["/how-to-help", "/see-our-birds"];
        if (excludedPaths.includes(router.pathname)) {
            setIsOnExcludedPage(true);
        }
    }   , [router.pathname]);

    return (
        <div className={styles.container_parent}>
            <div className={styles.container_inner_parent}>
                <div className={styles.text_container}>
                    <div className={styles.text_inner_container}>
                        <p className={`${styles.text_header} ${styles.text_head_left}`}>Rogers</p>
                        <p className={`${styles.text_header} ${styles.text_head_right}`}>Wildlife</p>
                        <p className={styles.text_inc}>Rehabilitation Center</p>
                    </div>
                </div>
                <div className={styles.sub_header_container}>
                    {!isOnExcludedPage && (
                        <DonateButton onGallery={false} buttonText={"Make a Donation"} />
                    )}
                    <p>Found an orphaned or injured bird?</p>
                    <p>Please contact us at</p>
                    <a href="tel:1-972-225-4000">(972) 225-4000</a>
                </div>
            </div>
        </div>
    );
}
