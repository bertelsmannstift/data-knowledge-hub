import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Why',
    icon: '/img/icons/icon_why.png',
    to: 'docs/',
    description: (
      <>
        Disinformation is unfolding new dynamics and reach in the digital space. Especially on the major social platforms, recommendation algorithms and other design features seem to further amplify disinformation, hate, and incitement.
      </>
    ),
  },
  {
    title: 'How',
    icon: '/img/icons/icon_how.png',
    to: 'docs/data_collection',
    description: (
      <>
        Against this background, it is important to attract more researchers, social scientists, and data scientists who are both technically capable of conducting social media monitoring and who can classify generated data in the political-social context and thus expand the state of research.
      </>
    ),
  },
  {
    title: 'What',
    icon: '/img/icons/icon_what.png',
    to: 'docs/data_collection',
    description: (
      <>
        The Hub aims at reducing the hurdles for independent research on social platforms and online discourse by creating a central knowledge base where we gather the most important information, the legal basis, the best tools and code samples via crowdsourcing. 
      </>
    ),
  },
];

function Feature({ icon, title, description, to }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <img src={icon} className={styles.featureSvg} alt={`${title} icon`} />
        </div>
        <div className={styles.featureContent}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className={styles.learnMoreContainer}>
          <Link to={to} className={styles.learnMoreLink}>
            Learn more             <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={styles.chevronIcon}
            >
              <path
                fillRule="evenodd"
                d="M9.293 16.293a1 1 0 0 1 1.414 0L15 12l-4.293-4.293a1 1 0 1 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features} id="features">
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
