import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import Burger from "../../ui/burger_button";
import NavDrawer from "../navbar_drawer";
import styles from "./Navbar.module.css";

function NavLink({ linkText, path, isScrollLink }) {
    const router = useRouter();

    const isActive = (pathname) => (router ? router.pathname === pathname : false);

    const linkStyles = {
        borderBottom: isActive(path) ? "2px solid #fff" : "none",
        cursor: "pointer",
    };

    const handleNavigation = (e, destination) => {
        e.preventDefault();

        if (router.pathname === "/" && destination.startsWith("#")) {
            history.pushState(null, null, destination);

            const id = destination.substring(1);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            router.push("/").then(() => {
                window.location.hash = destination;
            });
        }
    };

    return isScrollLink ? (
        <li style={linkStyles} onClick={(e) => handleNavigation(e, path)}>
            {linkText}
        </li>
    ) : (
        <li style={linkStyles}>
            <Link href={path}>{linkText}</Link>
        </li>
    );
}

export default function Navbar({ setNavOpen, isNavOpen }) {
    return (
        <>
            <nav className={styles.navbar}>
                <Burger isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
                <ul className={styles.desktop_nav}>
                    <NavLink linkText="Home" path="/" isScrollLink={false} />
                    <NavLink linkText="About" path="/about" isScrollLink={false} />
                    <NavLink linkText="Found A Bird" path="/found-a-bird" isScrollLink={false} />
                    <NavLink linkText="How To Help" path="/how-to-help" isScrollLink={false} />
                    <NavLink linkText="See Our Birds" path="/see-our-birds" isScrollLink={false} />
                    <NavLink linkText="Contact Us" path="/contact-us" isScrollLink={false} />
                </ul>
                <NavDrawer setNavOpen={setNavOpen} isNavOpen={isNavOpen} />
            </nav>
        </>
    );
}
