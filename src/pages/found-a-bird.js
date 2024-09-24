import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/base/layout";
import Hero from "@/components/home/hero";

import Image from "next/image";

import styles from "@/styles/pages/found-a-bird.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Found a Bird | Rogers Wildlife Rehabilitation Center</title>
                <meta name="description" content="How to Know If a Bird Needs Help" />
                <link rel="canonical" href="https://rogerswildlife.org/found-a-bird" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Found a Bird | Rogers Wildlife Rehabilitation Center" />
                <meta property="og:description" content="If you have been caring for a wild bird, you should bring it to an avian wildlife rehabilitor as soon as possible. We understand your good intentions but the average american home is not the place for a wild bird. The sooner the bird can be given a proper diet and medical care, the better its chances." />
                <meta property="og:url" content="https://rogerswildlife.org/found-a-bird" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/Mr-Chitters-on-log.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <main className={`${inter.className}`}>
                <Hero />
                <Layout>
                    <div className={styles.parent_container}>
                        <div className={styles.inner_container}>
                            {/* Section 1 */}
                            <div className={styles.section_parent_container}>
                                <h1 className={styles.section_one_title}>Found a Bird?</h1>
                                <div className={styles.section_one_content_container}>
                                    <div className={`${styles.section_one_image}`}>
                                        <Image
                                            src={"/images/Mr-Chitters-on-log.jpg"}
                                            width={400}
                                            height={100}
                                            alt="An owl named Mr Chitters sitting on a log"
                                        />
                                    </div>
                                    <div className={styles.section_one_content}>
                                        <h2>How to Know If a Bird Needs Help</h2>
                                        <p>A bird needs immediate medical attention if it:</p>
                                        <ul className={styles.section_one_List}>
                                            <li>has ingested lawn chemicals, fertilizers or other toxic substances</li>
                                            <li>has hit a window or building</li>
                                            <li>has been hit by a car</li>
                                            <li>has been attacked by a wild or domestic animal</li>
                                            <li>is having difficulty breathing</li>
                                            <li>
                                                is showing neurological symptoms (including eyes ticking to the side
                                                repeatedly, severe head tilting, tremors, convulsions and paralysis)
                                            </li>
                                            <li>is having difficulty flying or walking</li>
                                            <li>is unable to get away from you</li>
                                            <li>is having any issues with vision or inability to open eyes</li>
                                            <li>
                                                is covered in oil, sticky substances or is stuck to a glue trap, fly
                                                tape or other sticky trap
                                            </li>
                                            <li>
                                                is comfortable with humans (it may be a pet or may be otherwise unable
                                                to survive on its own)
                                            </li>
                                        </ul>
                                        <h2>Overnight Care</h2>
                                        <p>
                                            If you are unable to transport the bird to us before we close for the day
                                            and are unable to reach us, please follow these guidelines. These are
                                            general guidelines, meant for short term, emergency care. Please call us
                                            ASAP for more species and injury specific care instructions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Section 2 */}
                            <div className={styles.section_parent_container}>
                                <h3>Baby Birds</h3>
                                <ul>
                                    <li>
                                        Always exercise caution when rescuing wild birds. The easiest way to grab a bird
                                        on the ground is to throw a towel or cloth over it and gently pick it up.
                                    </li>
                                    <li>
                                        Place the bird in a securely lidded box on a t-shirt or a towel and allow for
                                        air.
                                    </li>
                                    <li>
                                        Place the box on a heating pad set on the lowest setting. Baby birds MUST be
                                        kept warm or their chances of survival drop severely.
                                    </li>
                                    <li>
                                        Keep the box inside the house in a quiet, dark area away from children and pets.
                                    </li>
                                    <li>
                                        If the bird opens its mouth and begs, you can feed it dry cat or dog food
                                        that&apos;s been soaked in water until it&apos;s spongy every time it begs. Wet
                                        cat or dog food can also be given, but dry food is preferred. Stop feeding it
                                        when it stops begging or when you can see the food in the back of its throat.
                                        They only need to be fed during daylight hours.
                                    </li>
                                    <li>
                                        <strong>DO NOT GIVE THE BIRD WATER</strong> with an eye dropper, as it can very
                                        easily aspirate the fluids into its lungs, which can later develop into
                                        life-threatening pneumonias.
                                    </li>
                                    <li>
                                        <strong>DO NOT FORCE FEED THE BIRD</strong>. You may injure the bird doing this
                                        improperly.
                                    </li>
                                    <li>
                                        <strong>PLEASE bring the bird to us ASAP</strong>, as it will need a properly
                                        balanced diet to prevent metabolic deficiencies and may need life-saving medical
                                        care.
                                    </li>
                                </ul>
                                <h3>Adult Birds</h3>
                                <ul>
                                    <li>
                                        Always exercise caution when rescuing wild birds. The easiest way to grab a bird
                                        on the ground is to throw a towel or cloth over it and gently pick it up.
                                    </li>
                                    <li>
                                        Place the bird in a securely lidded box on a t-shirt or a towel and allow for
                                        air.
                                    </li>
                                    <li>
                                        Place the box on a heating pad set on the lowest setting. Diseases and illnesses
                                        will often lower a bird&apos;s body temperature, worsening its condition.
                                    </li>
                                    <li>
                                        Keep the box inside the house in a quiet, dark area away from children and pets.
                                    </li>
                                    <li>If the bird can stand on its own, you can offer it a bowl of water.</li>
                                    <li>
                                        <strong>DO NOT GIVE THE BIRD WATER</strong> with an eye dropper, as it can very
                                        easily aspirate the fluids into its lungs, which can later develop into
                                        life-threatening pneumonias.
                                    </li>
                                    <li>
                                        <strong>DO NOT FORCE FEED THE BIRD</strong>. You may injure the bird doing this
                                        improperly.
                                    </li>
                                    <li>
                                        <strong>PLEASE bring the bird to us ASAP</strong>, as it will need a properly
                                        balanced diet to prevent metabolic deficiencies and may need life-saving medical
                                        care.
                                    </li>
                                </ul>
                            </div>
                            {/* Section 3 */}
                            <div className={styles.section_parent_container}>
                                <h2>Why Can&apos;t I Keep It?</h2>
                                <p>
                                    As much as you and your children may want to keep the bird and as much fun as it may
                                    seem, there are many reasons why we discourage them being kept as pets.
                                </p>
                                <h3 className={styles.section_three_subtitle}>It&apos;s bad for the animals</h3>

                                <ul className={styles.section_three_list}>
                                    <li>
                                        Wild birds need very specifically formulated diets and can develop crippling
                                        nutritional diseases without it.
                                    </li>
                                    <li>
                                        The bird may have an injury or illness that may not be noticed by someone
                                        without avian veterinary expertise and may lead to death without proper medical
                                        treatment.
                                    </li>
                                    <li>
                                        If not rehabilitated properly, the bird may become extremely comfortable with
                                        humans, domestic pets, and other situations. These animals may pose a nuisance
                                        or hazard to humans which can, in turn, easily become a risk to the
                                        animals&apos; safety as well. They may even become unable to survive on their
                                        own if they become too reliant on human contact for feeding, shelter, and
                                        protection.
                                    </li>
                                </ul>

                                <h3 className={styles.section_three_subtitle}>It&apos;s against the law</h3>

                                <ul className={styles.section_three_list}>
                                    <li>
                                        Almost all wild birds are protected by The Migratory Bird Treaty Act, a federal
                                        law, as well as state and local laws. These laws protect wild birds, their nests
                                        and eggs from killing and/or unlicensed possession.
                                    </li>
                                    <li>
                                        According to federal law, wild birds can only be kept for up to 48 hours by
                                        unlicensed persons with intent to relocate to a licensed wildlife rehabilitator.
                                    </li>
                                </ul>

                                <h3 className={styles.section_three_subtitle}>
                                    What if I have already been caring for a wild bird?
                                </h3>
                                <p>
                                    If you have been caring for a wild bird, you should bring it to an avian wildlife
                                    rehabilitor as soon as possible. We understand your good intentions but the average
                                    american home is not the place for a wild bird. The sooner the bird can be given a
                                    proper diet and medical care, the better its chances.
                                </p>
                            </div>
                            {/* Section 4 */}
                            <div className={styles.section_parent_container}>
                                <h2>Found a Mammal or Reptile?</h2>
                                <p>
                                    As we are a wild bird-only rehab center, we do not accept other kinds of animals.
                                    Check out the resources below to find a licensed rehabilitator for the species.
                                </p>
                                <ul>
                                    <li>
                                        <a
                                            className={styles.link}
                                            href="http://tpwd.texas.gov/huntwild/wild/rehab/list/"
                                        >
                                            List of Texas Wildlife Rehabilitators by County
                                        </a>{" "}
                                        (Make sure to check surrounding counties too!)
                                    </li>
                                    <li>Call the DFW Wildlife Coalition at (972) 234-9453</li>
                                </ul>
                                <h2>Far away? Find Someone Closer</h2>
                                <ul>
                                    <li>
                                        <a
                                            className={styles.link}
                                            href="http://tpwd.texas.gov/huntwild/wild/rehab/list/"
                                        >
                                            List of Texas Wildlife Rehabilitators by County
                                        </a>{" "}
                                        (Make sure to check surrounding counties too!)
                                    </li>
                                    <li>Call the DFW Wildlife Coalition at (972) 234-9453</li>
                                    <li>
                                        Not in Texas? Contact your local animal control or parks and wildlife department
                                        for more information.
                                    </li>
                                </ul>
                            </div>
                            {/* Section 5 */}
                            <div className={styles.section_parent_container}>
                                <h2>More Information</h2>
                                <div className={`${styles.section_five_content}`}>
                                    <div className={`${styles.section_five_image}`}>
                                        <Image
                                            src={"/images/tex.jpg"}
                                            width={354}
                                            height={100}
                                            alt="A logo for texas parks and wildlife"
                                        />
                                    </div>
                                    <div>
                                        <div>
                                            <p>Texas Parks & Wildlife</p>
                                            <p>972-226-9966</p>
                                            <a className={styles.link} href="http://www.tpwd.state.tx.us/">
                                                www.tpwd.state.tx.us
                                            </a>
                                        </div>
                                        <div className={`${styles.section_five_text}`}>
                                            <p>Texas Parks & Wildlife / Law Enforcement</p>
                                            <p>800-792-4263</p>
                                        </div>
                                        <div>
                                            <a
                                                className={styles.link}
                                                href="http://tpwd.texas.gov/huntwild/wild/rehab/list/"
                                            >
                                                Wildlife Rehabilitators by County
                                            </a>
                                            <a
                                                className={styles.link}
                                                href="http://tpwd.texas.gov/huntwild/wild/rehab/protected/"
                                            >
                                                Legal Information
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.section_five_content}`}>
                                    <div className={`${styles.section_five_image}`}>
                                        <Image
                                            src={"/images/usfish.jpg"}
                                            width={354}
                                            height={100}
                                            alt="A logo for U.S. fish and wildlife service"
                                        />
                                    </div>
                                    <div>
                                        <p>US Fish & Wildlife Service</p>
                                        <p>505-248-7889</p>
                                        <a className={styles.link} href="http://www.fws.gov/">
                                            www.fws.gov
                                        </a>
                                    </div>
                                </div>
                                <div className={`${styles.section_five_content}`}>
                                    <div className={`${styles.section_five_image}`}>
                                        <Image
                                            src={"/images/Raptro.jpg"}
                                            width={354}
                                            height={100}
                                            alt="A logo for blackland prairie raptor center"
                                        />
                                    </div>
                                    <div>
                                        <p>Blackland Prairie Raptor Center</p>
                                        <p>469-964-9696</p>
                                        <a className={styles.link} href="http://www.bpraptorcenter.org/">
                                            http://www.bpraptorcenter.org/
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
}
