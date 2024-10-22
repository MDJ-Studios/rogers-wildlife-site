import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/base/layout";
import Hero from "@/components/home/hero";

import styles from "@/styles/pages/about.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>About | Rogers Wildlife Rehabilitation Center</title>
                <meta
                    name="description"
                    content="Rogers Wildlife Rehabilitation Center (RWRC) is a 501c3 non-profit wildlife organization whose purpose is to provide care and rehabilitation to injured, sick and orphaned birds with the goal of returning them to their natural environment."
                />
                <link rel="canonical" href="https://rogerswildlife.org/about" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="About | Rogers Wildlife Rehabilitation Center" />
                <meta
                    property="og:description"
                    content="Rogers Wildlife Rehabilitation Center (RWRC) is a 501c3 non-profit wildlife organization whose purpose is to provide care and rehabilitation to injured, sick and orphaned birds with the goal of returning them to their natural environment."
                />
                <meta property="og:url" content="https://rogerswildlife.org/about" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/Mr-Chitters-on-log.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <main className={`${inter.className}`}>
                <Hero />
                <Layout>
                    <div className={`${styles.parent_container}`}>
                        <div className={`${styles.inner_container}`}>
                            <div>
                                <h1 className={`${styles.body_top_title}`}>Our Story</h1>
                                <p>
                                    Rogers Wildlife Rehabilitation Center (RWRC) is a 501c3 non-profit wildlife
                                    organization whose purpose is to provide care and rehabilitation to injured, sick
                                    and orphaned birds with the goal of returning them to their natural environment. The
                                    objective of RWRC&apos;s Outdoor Learning Center is to inspire all visitors to
                                    conserve and protect our native Texas wildlife.
                                </p>
                            </div>
                            {/* top paragraph with bird pic */}
                            <div className={`${styles.body_top_parent}`}>
                                {/* bird pic */}
                                <div className={`${styles.body_top_image}`}>
                                    <Image src={"/images/birb.jpg"} alt="bird image" width={700} height={700} />
                                </div>
                                {/* paragraph */}
                                <p className={`${styles.body_top_p}`}>
                                    Prior to obtaining 501(c)(3) status, Kathy Rogers spent eight years rehabilitating
                                    injured and orphaned birds out of her home. Once the non-profit status was granted,
                                    the Rogers Wildlife Rehabilitation Center moved its operation to Samuel Farm in
                                    1989. During the following ten years, Kathy Rogers and her team of volunteers
                                    provided medical treatment and care for more than twenty thousand birds.
                                    <br />
                                    <br />
                                    In 1999, Browning-Ferris Industries dedicated 20 acres of restored wetland habitat
                                    to serve as the permanent home of Rogers Wildlife Rehabilitation Center. Located in
                                    Hutchins, Texas, RWRC has grown to be the largest all-species avian rehabilitation
                                    and education center of its kind in North Texas. Rogers Wildlife holds Federal and
                                    State Rehabilitation and Educational Display permits.
                                    <br />
                                    <br />
                                    The Wildlife Center consists of a critical care clinic, The George and Fay Young
                                    Clinic Annex, and the Outdoor Learning Center. The Outdoor Learning Center
                                    facilities include native Texas avian exhibits and over twenty-five rehabilitation
                                    flight cages. At any given time you will find more than 1000 protected birds of
                                    various species residing at the Wildlife Center.
                                </p>
                            </div>
                            {/* bottom paragraph with quote */}
                            <div className={`${styles.body_bot_parent}`}>
                                {/* quote  */}
                                <div className={`${styles.body_bot_quote}`}>
                                    <p>
                                        Over the last 25 years, RWRC has provided medical treatment and care for more than
                                        120,000 birds.
                                    </p>
                                </div>
                                {/* paragraph */}
                                <div>
                                    <p className={`${styles.body_bot_p}`}>
                                        Over the last 25 years, RWRC has provided medical treatment and care for more than
                                        120,000 birds. The majority of birds that we receive come to us with
                                        life-threatening injuries as a result of animal attacks, nest displacement
                                        (orphaned), automobile strikes, natural/man-made disasters, or abuse. Our Center
                                        receives rescued birds from individuals, the SPCA, various city animal control
                                        departments, and Texas game wardens from the North Texas area. We provide all
                                        medical treatment at the Wildlife Center, with the exception of surgeries that
                                        require anesthesia. We routinely treat infections, wounds, broken legs, broken
                                        wings, head injuries, and back injuries. Recovery time, depending on the injury,
                                        ranges from three days to nine months.
                                        <br />
                                        <br />
                                        In 2015 alone, RWRC received 3,283 birds, of which 79% are protected by federal
                                        and state law. After months of medical treatment, care, and rehabilitation, we
                                        successfully returned 76% of the various hawks, owls, and other protected
                                        species back to their native habitat. Rogers Wildlife serves as a sanctuary for
                                        the remaining birds, as they are deemed non-releasable due to the extent of
                                        their injuries. All of our permanent residents live in habitat-specific settings
                                        and are cared for seven days a week, year-round, by our dedicated staff and
                                        volunteers.
                                        <br />
                                        <br />
                                        In addition to our wildlife rehabilitation efforts, RWRC also serves as an
                                        environmental educational facility. Each year, hundreds of students and their
                                        families visit our Outdoor Learning Center to observe Texas wildlife and learn
                                        about the importance of conservation and protection of our Texas environment.
                                        Rogers Wildlife offers a variety of educational opportunities from Pre-K through 12th
                                        grade. Our primary objective is to inspire everyone that visits the Outdoor
                                        Learning Center to be a champion of wildlife conservation in their own
                                        respective communities and schools.
                                        <br />
                                        <br />
                                        Various scouting organizations visit us throughout the year to fulfill badge and
                                        Eagle Scout requirements. Their most recent contributions include the
                                        construction of twelve large flight cages.
                                        <br />
                                        <br />
                                        In August 2006, Texas Parks and Wildlife added RWRC to its Prairies & Pineywoods
                                        Wildlife Trail. Located at the edge of the Trinity River, bordering the Great
                                        Trinity Forest, the Center provides wonderful opportunities for birders to view
                                        migratory birds throughout the year. RWRC is listed in the Texas Discovery Loop
                                        alongside such other Texas attractions as the Texas Discovery Gardens and the
                                        Leonhardt Lagoon at the Dallas Museum of Natural History.
                                        <br />
                                        <br />
                                        RWRC is entirely dependent on private donations, as it does not receive any
                                        federal, state, or local government funding for its rehabilitation and
                                        conservation efforts.
                                    </p>
                                </div>
                            </div>
                            {/* end bottom paragraph parent */}
                        </div>
                        {/* end inner container parent */}
                    </div>
                </Layout>
            </main>
        </>
    );
}
