import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faPinterestSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";

export function SocialIcon({ type, size }) {
    const types = {
        fb: {
            icon: faFacebookSquare,
            link: "https://www.facebook.com/rogerswildlife/"
        },
        pt: {
            icon: faPinterestSquare,
            link: "https://www.pinterest.com/rogerswildlife/" 
        },
        ig: {
            icon: faInstagram,
            link: "https://www.instagram.com/rogerswildlife/"
        }
    };

    const icon = types[type].icon;
    const link = types[type].link;

    return (
        <a href={link} target="_blank">
            <FontAwesomeIcon icon={icon} size={size} />
        </a>
    );
}
