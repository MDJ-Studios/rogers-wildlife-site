import styles from "@/components/home/intro/Intro.module.css";
import Image from "next/image";
import DonateButton from "@/components/ui/donate-button";


// Main Intro Component
export default function Intro({ birds = [] }) {
    return (
        <div className={styles.parent_container}>
            <div className={styles.inner_container}>
                <p>
                    <span className={styles.container_title}><strong>Rogers Wildlife Rehabilitation Center</strong></span>
                    is a 501c3 nonprofit wildlife rescue organization in the Dallas/Fort-Worth metroplex specializing
                    in the rescue and rehabilitation of injured, sick, and orphaned Federally Protected migratory species.
                    Our goal is to restore the health and independence of these precious creatures so they can be released
                    back into their natural habitat. Rogers Wildlife also serves as a sanctuary for the birds deemed
                    non-releasable due to the extent of their injuries.
                    <br />
                    <br />
                    Over the last 25 years, RWRC has provided medical treatment and care for more than 120,000 birds.
                    Many of these birds arrive with life-threatening injuries caused by animal attacks, automobile strikes,
                    natural or man-made disasters, or abuse. RWRC is fully dependent on volunteers and private donations,
                    as it receives no government funding at any level for its conservation efforts.
                </p>

                {/* Bird Gallery Preview Section */}
                <h2 className={styles.gallery_title}><strong>Meet Some of Our Educational Birds</strong></h2>
                <div className={styles.gallery_preview}>
                    {birds.map((bird) => (
                        <div key={bird.name} className={styles.gallery_card_container}>
                            <div className={styles.gallery_image_container}>
                                <Image
                                    className={styles.gallery_image_styles}
                                    src={bird.url}
                                    fill={true}
                                    alt={bird.description || `${bird.name} photo`}
                                />
                            </div>
                            <h3><strong>{bird.name}</strong></h3>
                            <h5><strong>{bird.species}</strong></h5>
                            <p className={styles.gallery_bird_story}>{bird.story}</p>
                            <div className={styles.gallery_donate_button_container}>
                                <DonateButton
                                    onGallery={true}
                                    buttonText={`Donate to Support ${bird.name}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
