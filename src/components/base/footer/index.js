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
                <a href="https://www.facebook.com/rogerswildlife/" target="_blank">
                    <Image src="/facebookVector.svg" height={33} width={33} alt="social media image" />
                </a>
                <a href="https://www.instagram.com/rogerswildlife/" target="_blank">
                    <Image src="/instagramVector.svg" height={33} width={33} alt="social media image" />
                </a>
                <a href="https://www.pinterest.com/rogerswildlife/" target="_blank">
                    <Image src="/pinterestVector.svg" height={33} width={33} alt="social media image" />
                </a>
            </div>
            <footer className={styles.footer}>
                <div className={styles.footer_links}>{links}</div>
                <div>
                    <p>Rogers Wildlife Rehabilitation Center - 1430 E Cleveland Rd, Hutchins, TX 75141</p>
                </div>
                <div className={styles.footer_contact}>
                    <p>
                        Phone: <a href="tel:1-972-225-4000">972-225-4000</a>
                    </p>
                    <p>
                        Email: <a href="rogerswildlife@yahoo.com">rogerswildlife@yahoo.com</a>
                    </p>
                </div>
                <div>
                    <p>
                        Copyright {new Date().getFullYear()} Rogers WIldlife Rehabilitation Center. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
