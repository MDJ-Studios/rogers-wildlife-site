import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/base/layout";
import Hero from "@/components/home/hero";
// import Map from "@/components/ui/map";
import styles from "@/styles/pages/contact-us.module.css";
import Map from "@/components/ui/map";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Contact Us | Rogers Wildlife Rehabilitation Center</title>
                <meta name="description" content="We are located at 1430 E. Cleveland Rd. Hutchins, TX 75141; for questions, you can call us at: (972) 225-4000" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
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
                                        <span className={styles.LineBreak}>Open every day, holiday hours may differ</span>
                                        <span className={styles.LineBreak}></span>
                                        <span className={styles.LineBreak}><strong>Fall Hours:</strong> (<i>starting Sept. 1 every day</i>) 9am - 4pm</span>
                                        <span className={styles.LineBreak}></span>
                                        <span className={styles.LineBreak}><strong>Summer Hours:</strong> 10am - 4pm</span>
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
                                        <u><a href="http://tpwd.texas.gov/huntwild/wild/rehab/list/" target="_blank">
                                            List of Texas Wildlife Rehabilitators by County
                                        </a></u>{" "}
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
