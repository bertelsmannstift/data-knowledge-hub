import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useEffect } from 'react';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.heroWrapper}>
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"><img src="img/dkh_logo_text.svg" height="100px"></img></h1>
        <h3 className="hero__subtitle">for researching online discourse</h3>
      </div>
      
    </header>
    <div class="subheader">
      <p class="subheader-text">
        The Data Knowledge Hub is a central resource for researchers, social scientists, data scientists, journalists, and policymakers, supporting independent studies on social media and online discourse.
      </p>
      <div class="chevronContainer">
        <a href="#about" class="chevronLink" aria-label="Scroll to Features">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#000000"
            class="chevronIcon"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </div>
    </div>
  ); 
}

function Subheader() {
  return (
<div></div>
  ); 
}

function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container" id="about" >
        <h2 className={styles.aboutHeading}>About the Data Knowledge Hub</h2>
        <div className={styles.aboutContent}>
          <div className={styles.imageWrapper}>
            <img
              src="/img/about_image.png"
              alt="Abstract representation of data knowledge"
              className={styles.aboutImage}
            />
          </div>
          <div className={styles.textWrapper}>
            <p>
              The Data Knowledge Hub is a collaborative open-source project. We always welcome contributions from the researchers and analysts – either via GitHub or by contacting us directly. To make facilitating contributions from a variety of people easier and to create a welcoming, inclusive, and healthy experience for everyone, the Data Knowledge Hub is released with a Code of Conduct. By contributing to this project, you agree to abide by its terms.
            </p>
            <p>
              The world of social media and digital platforms is developing rapidly. Disinformation, hate speech, and manipulative content are increasingly shaping our information flow. Current research is often fragmented or anecdotal.
            </p>
            <p>
              The Data Knowledge Hub provides a central platform for independent, data-driven research to promote better understanding and trusted insights into online discourse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardsSection() {
  return (
    <section className={styles.cardsSection} id="hub">
      <div className="container">
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <img
                src="/img/hub_link_image.svg"
                alt="Abstract representation of the Hub"
                className={styles.cardImg}
              />
            </div>
            <h3 className={styles.cardTitle}>To the Hub</h3>
            <p className={styles.cardText}>
              The Data Knowledge Hub is a central resource for researchers, social scientists, journalists, and policymakers exploring social media and online discourse.
            </p>
            <a href="docs/background-rationale" className={styles.cardButton}>
              Getting started
            </a>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <img
                src="/img/community_link.svg"
                alt="Code representation"
                className={styles.cardImg}
              />
            </div>
            <h3 className={styles.cardTitle}>To the GitHub-Community</h3>
            <p className={styles.cardText}>
              The Data Knowledge Hub is a collaborative open-source project. We always welcome contributions from the community – either via GitHub or by contacting us directly.
            </p>
            <a href="docs/contribute/06_01_how-to-contribute" className={styles.cardButton}>
              Community and Support
            </a> 
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section id="contribute" className={styles.ctaSection}>
      <div className="container" >
        <h2 className={styles.aboutHeading}>Got ideas? Doing research yourself? Contribute!</h2>
        <div className={styles.aboutContent}>
          <div className={styles.textWrapper}>
            <p>
            Join the community and contribute to deciphering the dynamics of digital discourse and creating well-founded insights for a better information culture! We always welcome contributions from the community - either via <a href="https://github.com/bertelsmannstift/data-knowledge-hub" target="_blank" class="email-link">GitHub</a> or by <a href="mailto:upgrade.democracy@bertelsmann-stiftung.de" class="email-link">contacting us directly</a>. </p>
          </div>
        </div>
      </div>
    </section>
  );
}


function BenefitsSection() {
  return(
    <section id="benefits" className={styles.benefitsSection}>
      <div className="container" id="about" >
        <h2 className={styles.aboutHeading}>Core benefits – Why participate?</h2>
        <div className={styles.aboutContent}>
          <div className={styles.benefitsDetailsWrapper}>
            <details>
              <summary>Access to resources</summary>

              Gain access to a comprehensive, centralized pool of data, tools and methods for researching online discourse and social media. Practical guidance for every stage of a research project: from data collection to analysis.
            </details>
            <details>
              <summary>Promotion of independent research</summary>

              The Data Knowledge Hub promotes independent research on social media and online discourse. We aim to reduce the hurdles for researchers and analysts by providing a central knowledge base.

            </details>
            <details>
              <summary>Community and collaboration</summary>

              Join a community of researchers, data scientists, journalists, and policymakers. Share your knowledge, learn from others, and collaborate on projects.            
            </details>
            <details>
              <summary>Practical tools and examples</summary>

              Find practical tools and code examples for collecting and analyzing data from social media platforms. Learn from the experience of others and contribute your own tools and code.
            </details>
            <details>
              <summary>Interdisciplinary approach</summary>

              The Data Knowledge Hub is a platform for interdisciplinary exchange. We welcome contributions from researchers, data scientists, journalists, and policymakers from a variety of backgrounds.
            </details>
            <details>
              <summary>Co-create and innovate</summary>

              The Data Knowledge Hub is a collaborative open-source project. We always welcome contributions from the community - either via GitHub or by contacting us directly.
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}

function CodeExamplesSection() {
  return (
    <section id="benefits" className={styles.examplesSection}>
      <div className="container" id="about" >
        <h2 className={styles.aboutHeading}>Code Examples</h2>
        <div className={styles.examplesContent}>
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Description</th>
                <th>Language</th>
                <th>Platform</th>
                <th>Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>tiktok-scraping</b></td>
                <td>Collect data on TikTok using puppeteer</td>
                <td>
                  JavaScript
                </td>
                <td>TikTok</td>
                <td>
                  <a
                    href="https://github.com/bertelsmannstift/data-knowledge-hub/tree/main/projects/tiktok-hashtags"
                    target="_blank"
                    >Code</a
                  >
                </td>
              </tr>
              <tr>
                <td><b>tiktok-hashtag-analysis</b></td>
                <td>Analyse TikTok hashtags</td>
                <td>
                  Python
                </td>
                <td>TikTok</td>
                <td>
                  <a
                    href="https://github.com/bertelsmannstift/data-knowledge-hub/tree/main/projects/tiktok-hashtags"
                    target="_blank"
                    >Code</a
                  >
                </td>
              </tr>
              <tr>
                <td><b>blog-webscraping</b></td>
                <td>Webscraping using rvest and selenium</td>
                <td>
                  R
                </td>
                <td>Blogs</td>
                <td>
                  <a
                    href="https://github.com/bertelsmannstift/data-knowledge-hub/tree/main/projects/website-scraping"
                    target="_blank"
                    >Code</a
                  >
                </td>
              </tr>
              <tr>
                <td><b>twitter-streaming</b></td>
                <td>Large-scale data collection on X (Twitter)</td>
                <td>
                  Python
                </td>
                <td>Twitter / X</td>
                <td>
                  <a
                    href="https://github.com/UnibwSparta/twitterapi"
                    target="_blank"
                    >Code</a
                  >
                </td>
              </tr>
              <tr>
                <td><b>twitter-social-network</b></td>
                <td>Social Network Analysis with R</td>
                <td>
                  R
                </td>
                <td>Twitter / X</td>
                <td>
                  <a
                    href="https://github.com/bertelsmannstift/data-knowledge-hub/tree/main/projects/social-network-analysis"
                    target="_blank"
                    >Code</a
                  >
                </td>
              </tr>
            </tbody>
          </table>

          </div>
        </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className={styles.teamSection} id="team">
      <div className="container"  >
        <h2 className={styles.aboutHeading}>Who is behind the Data Knowledge Hub?</h2>
        <div className={styles.aboutContent}>
          <div className={styles.textWrapper}>
            <p>
              The Data Knowledge Hub is a project of <a href="https://upgradedemocracy.de/en/" target="_blank" class="email-link">Upgrade Democracy</a>, an initiative of the <a href="https://www.bertelsmann-stiftung.de/de/startseite" target="_blank" class="email-link">Bertelsmann Stiftung</a>. The aim of the Hub is to provide researchers, data scientists, journalists and policy makers with centralised resources for independent research into social media and online discourse.
            </p>
            <p>
            Together with dozens of researchers and civil society organisations, we aim to promote research in the field of online discourse and thus contribute to strengthening democracy in digital spaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section class="say-hello-section">
      <div class="container">
        <h3 class="say-hello-title">Say hello!</h3>
        <hr class="say-hello-underline" />
        <p class="say-hello-text">
          Do you have any questions, suggestions, or ideas? We look forward to hearing from you! 
          Simply write an email to 
          <a 
            href="mailto:upgrade.democracy@bertelsmann-stiftung.de" 
            class="email-link"
            > upgrade.democracy@bertelsmann-stiftung.de</a
          >
        </p>
      </div>
    </section>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    const navbarItems = document.querySelectorAll('.navbar__items:not(.navbar__items--right) > .navbar__item');

    // Function to update visibility based on screen size
    const updateNavbarVisibility = () => {
      const isDesktop = window.innerWidth > 1024; // Adjust breakpoint if needed
      navbarItems.forEach(item => {
        item.style.display = isDesktop ? 'inline' : 'none';
      });
    };

    // Run on load
    updateNavbarVisibility();

    // Listen for window resize events
    window.addEventListener('resize', updateNavbarVisibility);

    // Cleanup function
    return () => {
      navbarItems.forEach(item => {
        item.style.display = 'none';
      });
      window.removeEventListener('resize', updateNavbarVisibility);
    };
  }, []);

  return (
    <Layout
      className="landing-page"
      title={`Welcome! ${siteConfig.title}`}
      description="The Data Knowledge Hub for Researching Online Discourse (Data Knowledge Hub) is an initiative that aims to provide a central resource for researchers, social scientists, data scientists, practitioners, and policymakers interested in independently researching disinformation on social media platforms.">
      <main>
        <HomepageHeader />
        <Subheader />
        <AboutSection />
        <HomepageFeatures />
        <CardsSection />
        <CallToAction />
        <BenefitsSection />
        <TeamSection />
        <ContactSection />
      </main>
    </Layout>
  );
}
