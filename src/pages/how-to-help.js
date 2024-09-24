import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/base/layout";
import Hero from "@/components/home/hero";

import Image from "next/image";

import styles from "@/styles/pages/how-to-help.module.css";
import Link from "next/link";
import PayPal from "@/components/ui/paypal";
import Venmo from "@/components/ui/venmo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>How to Help | Rogers Wildlife Rehabilitation Center</title>
                <meta
                    name="description"
                    content="With your help, we can provide food, medical care and safe housing to the thousands of sick, injured and orphaned birds we take in yearly. On average, the costs to run RWRC $740 per day, that's just over $22,000 a month! Your donations are hugely appreciated as we rely entirely on private donations as we receive no federal, state or local government funding."
                />
                <link rel="canonical" href="https://rogerswildlife.org/how-to-help" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="How to Help | Rogers Wildlife Rehabilitation Center" />
                <meta
                    property="og:description"
                    content="With your help, we can provide food, medical care and safe housing to the thousands of sick, injured and orphaned birds we take in yearly. On average, the costs to run RWRC $740 per day, that's just over $22,000 a month! Your donations are hugely appreciated as we rely entirely on private donations as we receive no federal, state or local government funding."
                />
                <meta property="og:url" content="https://rogerswildlife.org/how-to-help" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/Mr-Chitters-on-log.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <main className={`${inter.className}`}>
                <Hero />
                <Layout>
                    <div className={`${styles.flex_center} ${styles.parent_container}`}>
                        <div className={styles.inner_container}>
                            <div className={styles.section_container}>
                                <h3>Monetary Donations</h3>
                                <p>
                                    With your help, we can provide food, medical care and safe housing to the thousands
                                    of sick, injured and orphaned birds we take in yearly. On average, the costs to run
                                    RWRC $740 per day, that&apos;s just over $22,000 a month! Your donations are hugely
                                    appreciated as we rely entirely on private donations as we receive no federal, state
                                    or local government funding.
                                </p>

                                <div className="donation_form_parent">
                                    <iframe
                                        title="Donation form powered by Zeffy"
                                        style={{
                                            position: "relative",
                                            border: 0,
                                            width: "100%",
                                            height: "83rem",
                                            padding: 0,
                                        }}
                                        src="https://www.zeffy.com/embed/donation-form/949079ad-523d-417a-a441-e947ee0271f9"
                                        allowpaymentrequest="true"
                                        allowtransparency="true"
                                    ></iframe>
                                </div>
                            </div>
                            <div className={styles.section_container}>
                                <h3 id="volunteering">Volunteering</h3>
                                <p className={styles.small_bottom_margin}>
                                    We always need volunteers and can fully train you to provide care for the birds on
                                    site. No prior experience is needed. Just print out the volunteer application and
                                    bring it with you when you would like to volunteer!
                                </p>

                                <div className={`${styles.flex_center} ${styles.volunteer_btn_container}`}>
                                    <Link
                                        href="/pdfs/rwrc-volunteer-app.pdf"
                                        target="blank"
                                        className={`${styles.small_right_margin} ${styles.no_margin} ${styles.volunteer_btn}`}
                                    >
                                        <button className={styles.section_one_button}>Volunteer Application</button>
                                    </Link>

                                    <a href="/pdfs/rwrc-csr-volunteer-app.pdf" target="blank">
                                        <button className={styles.section_one_button}>
                                            Community Service Application
                                        </button>
                                    </a>
                                </div>

                                <p>What positions do we need help with?</p>
                                <ul className={styles.list}>
                                    <li>
                                        Wild bird clinic staff - caring for injured birds, feeding baby birds, cleaning
                                        cages.
                                    </li>
                                    <li>Administrative support - answering phones, helping with bookkeeping, etc.</li>
                                    <li>
                                        Construction help - We are building all the time; construction help is always
                                        appreciated!
                                    </li>
                                    <li>Facility maintenance - repairs, cleaning, etc.</li>
                                    <li>Outreach program development - public relations, speaking at schools, etc.</li>
                                </ul>
                                <p className={styles.small_bottom_margin}>
                                    Group and individual volunteers are necessary to keep RWRC going. If you feel as
                                    though you could give a few hours out of a day, week, or month to lend a helping
                                    hand with a project, PLEASE give us a call!
                                </p>
                                <p>We accept community service volunteers as well.</p>
                            </div>
                            {/* Section 2 */}
                            <div className={styles.section_container}>
                                <h3>Item Donations</h3>
                                <a
                                    href="https://www.amazon.com/registry/wishlist/2G7903YCKJDNU/ref=cm_sw_r_cp_an_wl_o_XrfAxbBQ4G2D3"
                                    target="_blank"
                                >
                                    <Image
                                        src={"/images/amazon-wishlist.jpg"}
                                        width={270}
                                        height={100}
                                        alt="amazon wishlist image"
                                        className={styles.small_bottom_margin}
                                    />
                                </a>
                                <p>
                                    Our Amazon Wishlist is updated more regularly then the following list, but these are
                                    items we almost always need. All donations are 501c3 deductible!
                                </p>
                                <div className={`${styles.flex} ${styles.flex_column}`}>
                                    <ul className={`${styles.list} ${styles.small_right_margin} ${styles.no_margin}`}>
                                        <li>Paper Towels</li>
                                        <li>Facial tissue (Kleenex)</li>
                                        <li>Bleach</li>
                                        <li>Puppy pads</li>
                                        <li>High-efficiency laundry detergent</li>
                                        <li>Box Fans</li>
                                        <li>Asthma type nebulizer</li>
                                        <li>Heating pads without auto-shutoff</li>
                                        <li>Heat lamps and bulbs</li>
                                    </ul>
                                    <ul className={`${styles.list} ${styles.no_margin}`}>
                                        <li>Dawn soap</li>
                                        <li>Broom & mop</li>
                                        <li>Shovels, rakes, hoes</li>
                                        <li>Pine shavings</li>
                                        <li>Trailer of any kind or condition</li>
                                        <li>Refrigerator</li>
                                        <li>Extension cords/repair ends</li>
                                        <li>Electrical supplies</li>
                                        <li>AA, AAA, D Cell batteries</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.section_container}>
                                <h3>Donate With PayPal</h3>
                                <PayPal />
                            </div>
                            <div className={styles.section_container}>
                                <h3>Donate With Venmo</h3>
                                <Venmo />
                            </div>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
}
