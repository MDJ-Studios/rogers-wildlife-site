
import { useEffect } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/base/layout";
import Hero from "@/components/home/hero";
import SEO from "@/components/seo";
import { SITE_URL, generateBreadcrumbs } from "@/lib/seo-config";
import styles from "@/styles/pages/contact-us.module.css";
import Map from "@/components/ui/map";

const inter = Inter({ subsets: ["latin"] });

const breadcrumbs = generateBreadcrumbs([
    { name: "Home", url: SITE_URL },
    { name: "Contact Us", url: `${SITE_URL}/contact-us` },
]);

const animalShelterSchema = {
    "@context": "https://schema.org",
    "@type": "AnimalShelter",
    name: "Rogers Wildlife Rehabilitation Center",
    address: {
        "@type": "PostalAddress",
        streetAddress: "1430 E Cleveland Rd",
        addressLocality: "Hutchins",
        addressRegion: "TX",
        postalCode: "75141",
        addressCountry: "US",
    },
    telephone: "(972) 225-4000",
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
            "Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday", "Sunday",
        ],
        opens: "09:00",
        closes: "16:00",
    },
    url: "https://rogerswildlife.org/contact-us",
    hasMap: "https://maps.google.com/?q=1430+E+Cleveland+Rd+Hutchins+TX+75141",
};

export default function ContactUs() {
    return (
        <>
            <SEO
                title="Contact & Visit Us | Rogers Wildlife Rehabilitation Center - Hutchins, TX"
                description="Visit Rogers Wildlife Rehabilitation Center at 1430 E Cleveland Rd, Hutchins, TX 75141. Open 7 days a week, 9AM-4PM. Call (972) 225-4000 for injured bird drop-offs."
                path="/contact-us"
            />
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(animalShelterSchema) }}
                />
            </Head>
            <main className={`${inter.className}`}>
                <Hero />
                <Layout>
                    <div className={styles.PageContainer}>
                        <div>
                            <h1>Contact Us</h1>
                            <section className={`${styles.PageSection} ${styles.map_section}`}>
                                <Map />
                                <div className={styles.location_info}>
                                    <h2>Location</h2>
                                    <address>
                                        <p>Rogers Wildlife Rehabilitation Center</p>
                                        <p>1430 E. Cleveland Rd.</p>
                                        <p>Hutchins, TX 75141</p>
                                        <a href="tel:1-972-225-4000">(972) 225-4000</a>
                                    </address>

                                    <h2>Hours</h2>
                                    <p>
                                        <span className={styles.LineBreak}>
                                            We are open seven days a week 9AM till 4PM.
                                        </span>
                                        <span className={styles.LineBreak}>
                                            Holiday hours may differ.
                                        </span>
                                    </p>
                                </div>
                            </section>
                            <section className={styles.PageSection}>
                                <h2>Additional Info</h2>
                                <p>
                                    <span className={styles.LineBreak}>
                                        We are open for bird drop offs during normal operating hours.
                                    </span>
                                    Please be patient, we are all volunteers and doing the best we can with the volume
                                    of birds coming in.
                                </p>
                            </section>
                            <section className={styles.PageSection}>
                                <h2>Directions</h2>
                                <ol>
                                    <li>Take I-45 South from Dallas.</li>
                                    <li>Take exit 274 at Dowdy Ferry Road/Hutchins just South of I-20.</li>
                                    <li>Go left under I-45 and left again on the North bound service road.</li>
                                    <li>Turn right onto E. Cleveland Road, go one mile and we will be on the left.</li>
                                    <li>
                                        Rogers Wildlife is located on the left side of Cleveland Road, just before you
                                        get to the Republic Services.
                                    </li>
                                </ol>
                            </section>
                            <section className={styles.PageSection}>
                                <h2>Far Away? Find Someone Closer</h2>
                                <ul>
                                    <li>
                                        <u>
                                            <a href="https://tpwd.texas.gov/huntwild/wild/rehab/list/" target="_blank" rel="noopener noreferrer">
                                                List of Texas Wildlife Rehabilitators by County
                                            </a>
                                        </u>{" "}
                                        (<i>make sure to check surrounding counties too!</i>)
                                    </li>
                                    <li>Call the DFW Wildlife Coalition at 972-234-9453</li>
                                    <li>
                                        Not in Texas? Contact your local animal control or parks and wildlife department
                                        for more information.
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <section className={styles.PageSection}>
                            {/* TODO: Having issues with the map not loading
                            Also need to look into errors in the console:
                            Something about the map API being included multiple times */}
                            {/* <Map /> */}
                        </section>
                    </div>
                </Layout>
            </main>
        </>
    );
}
