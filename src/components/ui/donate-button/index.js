import styles from "./Donate-button.module.css"

export default function DonateButton({buttonText, onGallery}) {
    return (
        <button className={!onGallery ? styles.button : styles.gallery_donate_button} type="button" zeffy-form-link="https://www.zeffy.com/embed/donation-form/949079ad-523d-417a-a441-e947ee0271f9?modal=true">
            {buttonText}
        </button>
    )
}