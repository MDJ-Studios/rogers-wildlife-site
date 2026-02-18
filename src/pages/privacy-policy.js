
import Head from "next/head";
import Layout from "@/components/base/layout";
import styles from "@/styles/pages/privacy-policy.module.css";

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Privacy Policy | Rogers Wildlife Rehabilitation Center</title>
                <meta name="description" content="Read our privacy policy to learn how Rogers Wildlife Rehabilitation Center collects, uses, and protects your information." />
                <link rel="canonical" href="https://rogerswildlife.org/privacy-policy" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Privacy Policy | Rogers Wildlife Rehabilitation Center" />
                <meta property="og:description" content="Read our privacy policy to learn how Rogers Wildlife Rehabilitation Center collects, uses, and protects your information." />
                <meta property="og:url" content="https://rogerswildlife.org/privacy-policy" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/Mr-Chitters-on-log.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Layout>
                <main className={styles.privacyContainer}>
                    <h1 className={styles.privacyTitle}>Privacy Policy</h1>
                    <div className={styles.privacyDate}>Effective as of 4 September 2025</div>
                    <section className={styles.privacySection}>
                        <p>Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website and other sites we own and operate.</p>
                        <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we&apos;re collecting it and how it will be used.</p>
                        <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we&apos;ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
                        <p>We don&apos;t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
                        <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
                        <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
                        <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
                    </section>
                </main>
            </Layout>
        </>
    );
}
