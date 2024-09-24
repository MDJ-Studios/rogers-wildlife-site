import graphQLClient from "../lib/utils/graphql-client";
import { GET_IMAGES } from "../lib/utils/query";

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/base/layout";
import Hero from "@/components/home/hero";
import DonateButton from "@/components/ui/donate-button";

import styles from "@/styles/pages/see-our-birds.module.css";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
    try {
        let data = await graphQLClient.request(GET_IMAGES);

        const assets = data.assets;

        return {
            props: {
                assets,
            },
            revalidate: 60,
        };
    } catch (error) {
        console.error(error);

        const assets = null;

        return {
            props: {
                assets,
            },
        };
    }
}

export default function SeeOurBirds({ assets }) {
    return (
        <>
            <Head>
                <title>See Our Birds | Rogers Wildlife Rehabilitation Center</title>
                <meta
                    name="description"
                    content="Explore the beautiful birds at Rogers Wildlife Rehabilitation Center. Our gallery showcases a variety of bird species we have helped rehabilitate."
                />
                <link rel="canonical" href="https://rogerswildlife.org/see-our-birds" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="See Our Birds | Rogers Wildlife Rehabilitation Center" />
                <meta
                    property="og:description"
                    content="Explore the beautiful birds at Rogers Wildlife Rehabilitation Center. Our gallery showcases a variety of bird species we have helped rehabilitate."
                />
                <meta property="og:url" content="https://rogerswildlife.org/see-our-birds" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/Mr-Chitters-on-log.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <main className={`${inter.className}`}>
                <Hero />
                <Layout>
                    <section className={styles.flex_center}>
                        <div className={styles.gallery_parent}>
                            {assets && assets.length > 0 || assets === null ? (
                                assets.map((gallery, index) => (
                                    <div key={index} className={styles.card_container}>
                                        <div className={styles.image_container}>
                                            <Image
                                                className={styles.image_styles}
                                                src={gallery.url}
                                                fill={true}
                                                alt={gallery.imageGallery[0]?.description}
                                            />
                                        </div>
                                        <h3><strong>{gallery.imageGallery[0]?.name}</strong></h3>
                                        <h5><strong>{gallery.imageGallery[0]?.species}</strong></h5>
                                        <p className={styles.bird_story}>{gallery.imageGallery[0]?.story}</p>
                                        <div className={styles.donate_button_container}>
                                            <DonateButton onGallery={true} buttonText={"Click to Support " + gallery.imageGallery[0]?.name} />
                                        </div>
                                    </div>
                                )
                            )
                            ) : (
                                <div className={styles.error_message}>
                                    <h3>Something went wrong. Please come back to this page another time.</h3>
                                </div>
                            )}
                        </div>
                    </section>
                </Layout>
            </main>
        </>
    );
}
