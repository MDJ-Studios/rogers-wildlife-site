import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/base/layout";
import Hero from "@/components/home/hero";
import Title from "@/components/home/title_socials";
import Intro from "@/components/home/intro";
import Map from "@/components/home/map_actions";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
    return (
        <>
            <Head>
                <title>Home | Rogers Wildlife Rehabilitation Center</title>
                <meta
                    name="description"
                    content="Rogers Wildlife Rehabilitation Center is a 501c3 nonprofit wildlife rescue organization in the Dallas/Fort-Worth metroplex specializing in the rescue and rehabilitation of injured, sick and orphaned birds of all types."
                />
                <link rel="canonical" href="https://rogerswildlife.org" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Home | Rogers Wildlife Rehabilitation Center" />
                <meta
                    property="og:description"
                    content="Rogers Wildlife Rehabilitation Center is a 501c3 nonprofit wildlife rescue organization in the Dallas/Fort-Worth metroplex specializing in the rescue and rehabilitation of injured, sick and orphaned birds of all types."
                />
                <meta property="og:url" content="https://rogerswildlife.org" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/Mr-Chitters-on-log.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <main className={`${inter.className}`}>
                <Hero />
                <Layout>
                    <Title />
                    <Intro />
                    <Map />
                </Layout>
            </main>
        </>
    );
}
