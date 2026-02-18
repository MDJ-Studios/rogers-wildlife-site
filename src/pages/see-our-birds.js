import graphQLClient from "../lib/utils/graphql-client";
import { GET_IMAGES } from "../lib/utils/query";

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/base/layout";
import Hero from "@/components/home/hero";
import DonateButton from "@/components/ui/donate-button";
import SEO from "@/components/seo";
import { SITE_URL, generateBreadcrumbs } from "@/lib/seo-config";

import styles from "@/styles/pages/see-our-birds.module.css";

const inter = Inter({ subsets: ["latin"] });

const breadcrumbs = generateBreadcrumbs([
    { name: "Home", url: SITE_URL },
    { name: "See Our Birds", url: `${SITE_URL}/see-our-birds` },
]);

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
            <SEO
                title="Meet Our Rescued Birds | Rogers Wildlife Rehabilitation Center - Adopt & Donate"
                description="Meet the rescued birds living at Rogers Wildlife Rehabilitation Center. See hawks, owls, and more. Donate to support their ongoing care and rehabilitation."
                path="/see-our-birds"
            />
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
                />
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
                                            <DonateButton onGallery={true} buttonText={"Donate to Support " + gallery.imageGallery[0]?.name} />
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
