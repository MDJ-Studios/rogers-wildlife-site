import styles from "@/components/home/title_socials/Title.module.css";
// import Image from "next/image";
import { SocialIcon } from "@/components/ui/social-icons";

export default function Title() {
    return (
        <div className={styles.parent_container}>
            <div className={styles.inner_container}>
                <div className={styles.socials_container}>
                    <a
                        className={`${styles.margin_right}`}
                        href="https://www.facebook.com/rogerswildlife/"
                        target="_blank"
                    >
                        <Image src="/facebookVector.svg" height={44} width={44} alt="facebook social media link" />
                    </a>
                    <a
                        className={`${styles.margin_right}`}
                        href="https://www.instagram.com/rogerswildlife/"
                        target="_blank"
                    >
                        <Image src="/instagramVector.svg" height={44} width={44} alt="instagram social media link" />
                    </a>
                    <a href="https://www.pinterest.com/rogerswildlife/" target="_blank">
                        <Image src="/pinterestVector.svg" height={44} width={44} alt="pinterest social media link" />
                    </a>
                </div>
                <div className={styles.title_container}>
                    <h2>
                        Welcome to Rogers Wildlife <br /> Rehabilitation Center
                    </h2>
                </div>
            </div>
        </div>
    );
}
