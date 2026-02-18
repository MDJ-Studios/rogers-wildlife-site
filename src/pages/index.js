import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/base/layout";
import Hero from "@/components/home/hero";
import Title from "@/components/home/title_socials";
import Intro from "@/components/home/intro";
import Map from "@/components/home/map_actions";
import graphQLClient from "@/lib/utils/graphql-client";
import { GET_IMAGES } from "@/lib/utils/query";
import SEO from "@/components/seo";
import { SITE_URL, generateBreadcrumbs } from "@/lib/seo-config";

const inter = Inter({ subsets: ["latin"] });

const breadcrumbs = generateBreadcrumbs([
    { name: "Home", url: SITE_URL },
]);

export default function Home({ birds = [] }) {
    return (
        <>
            <SEO
                title="Rogers Wildlife Rehabilitation Center | Bird Rescue & Sanctuary in Dallas-Fort Worth, TX"
                description="Rogers Wildlife Rehabilitation Center is a 501(c)(3) nonprofit bird rescue in Dallas-Fort Worth, TX. Donate to help us save injured, sick, and orphaned birds. Visit or volunteer today."
                path=""
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
                    <Title />
                    <Intro birds={birds} />
                    <Map />
                </Layout>
            </main>
        </>
    );
}

export async function getStaticProps() {
    try {
        const data = await graphQLClient.request(GET_IMAGES);
        const assets = data.assets || [];

        // Map and filter the assets to get featured birds
        const featuredBirds = assets
            .filter(asset =>
                asset.imageGallery?.[0] &&
                ["Prince", "Shiloh", "Chitters"].includes(asset.imageGallery[0].name)
            )
            .map(asset => ({
                url: asset.url, // Image URL from the asset object
                ...asset.imageGallery[0], // Spread the rest of the bird details
            }));

        return {
            props: {
                birds: featuredBirds,
            },
            revalidate: 60, // Revalidate every 60 seconds
        };
    } catch (error) {
        console.error("Error fetching bird data:", error);

        return {
            props: {
                birds: [],
            },
        };
    }
}

