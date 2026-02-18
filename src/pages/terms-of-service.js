import Head from "next/head";
import Layout from "@/components/base/layout";
import styles from "@/styles/pages/privacy-policy.module.css";

export default function TermsOfService() {
    return (
        <>
            <Head>
                <title>Terms of Service | Rogers Wildlife Rehabilitation Center</title>
                <meta name="description" content="Read our terms of service to understand the rules and conditions for using Rogers Wildlife Rehabilitation Center's website." />
                <link rel="canonical" href="https://rogerswildlife.org/terms-of-service" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Terms of Service | Rogers Wildlife Rehabilitation Center" />
                <meta property="og:description" content="Read our terms of service to understand the rules and conditions for using Rogers Wildlife Rehabilitation Center's website." />
                <meta property="og:url" content="https://rogerswildlife.org/terms-of-service" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/Mr-Chitters-on-log.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Layout>
                <main className={styles.privacyContainer}>
                    <h1 className={styles.privacyTitle}>Terms of Service</h1>
                    <div className={styles.privacyDate}>Effective as of 10 September 2025</div>
                    <section className={styles.privacySection}>
                        <ol style={{ paddingLeft: '1.4em', marginTop: '1.2em', marginBottom: '1.2em' }}>
                            <li style={{marginBottom: '1em'}}><strong>Acceptance of Terms</strong><br />By visiting our website, you agree to follow these terms and any local laws. If you disagree, please do not use the site. Our content is protected by copyright law.</li>
                            <li style={{marginBottom: '1em'}}><strong>Use of Content</strong><br />You may view and download content (e.g., articles, guides) for personal, non-commercial use only.<br />Do not modify, copy, or share content without permission.<br />Remove downloaded content if you stop using the site or if we ask.</li>
                            <li style={{marginBottom: '1em'}}><strong>Content Accuracy</strong><br />Information is provided “as is” with no guarantees of accuracy or completeness.<br />We may update content anytime without notice and are not obligated to keep it current.</li>
                            <li style={{marginBottom: '1em'}}><strong>Linked Sites</strong><br />We link to other sites but don’t control or endorse them.<br />Use linked sites at your own risk.</li>
                            <li style={{marginBottom: '1em'}}><strong>Changes to Terms</strong><br />We may update these terms without notice. Continued use means you accept changes.</li>
                            <li><strong>Governing Law</strong><br />These terms are governed by Texas law, with disputes handled in Texas courts.</li>
                        </ol>
                    </section>
                </main>
            </Layout>
        </>
    );
}
