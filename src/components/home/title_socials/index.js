import styles from "@/components/home/title_socials/Title.module.css";
// import Image from "next/image";
import { SocialIcon } from "@/components/ui/social-icons";

export default function Title() {
    return (
        <div className={styles.parent_container}>
            <div className={styles.inner_container}>
                <div className={styles.socials_container}>
                    <SocialIcon type="fb" size="3x" />
                    <SocialIcon type="ig" size="3x" />
                    <SocialIcon type="pt" size="3x" />
                </div>
                <div className={styles.title_container}>
                    <h1>
                        Welcome to Rogers Wildlife <br /> Rehabilitation Center
                    </h1>
                </div>
            </div>
        </div>
    );
}
