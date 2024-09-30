import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg margin--md text-white"
            to="/docs/background-rationale">
            Explore
          </Link>
          <Link
            className="button button--secondary button--lg background-transparent"
            to="/docs/contribute/06_01_how-to-contribute">
            Contribute
          </Link>
        </div>
      </div>
    </header>
  ); 
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome! ${siteConfig.title}`}
      description="The Data Knowledge Hub for Researching Online Discourse (Data Knowledge Hub) is an initiative that aims to provide a central resource for researchers, social scientists, data scientists, practitioners, and policymakers interested in independently researching disinformation on social media platforms.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
