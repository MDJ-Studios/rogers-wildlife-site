// import Image from "next/image";
import Link from "next/link";
import styles from "@/components/base/footer/Footer.module.css";
import { SocialIcon } from "@/components/ui/social-icons";

export default function Footer() {
    const linkObjs = [
        { name: "Home", path: "/" },
        { name: "Our Story", path: "/about" },
        // NOTE: Not sure if we need this right now
        // { name: "In the News", path: "/" },
        { name: "Found a Bird?", path: "/found-a-bird" },
        { name: "How to Help", path: "/how-to-help" },
        // { name: "Photo Gallery", path: "/see-our-birds" },
        // NOTE: Not sure if we need this right now
        // { name: "Educational Birds", path: "/" },
        { name: "Contact Us", path: "/contact-us" },
    ];

    const links = linkObjs.map((obj) => {
        return (
            <span key={obj.name}>
                <Link href={obj.path}>{obj.name}</Link>
                {obj.path != "/contact-us" ? " | " : null}
            </span>
        );
    });

    return (
        <div className={styles.parent_container}>
            <div className={styles.socials_container}>
                <SocialIcon type="fb" size="3x" />
                <SocialIcon type="ig" size="3x" />
                <SocialIcon type="pt" size="3x" />
            </div>
            <footer className={styles.footer}>
                <div className={styles.footer_links}>{links}</div>
                <br />
                <div>
                    <p>Rogers Wildlife Rehabilitation Center <br />1430 E Cleveland Rd<br />Hutchins, TX 75141</p>
                </div>
                <br />
                <div>
                    <p>
                        Copyright {new Date().getFullYear()} Rogers Wildlife Rehabilitation Center. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
