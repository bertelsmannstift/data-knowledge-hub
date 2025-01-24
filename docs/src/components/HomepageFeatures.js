import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Why',
    icon: '/img/icons/icon_why.png',
    description: (
      <>
        Disinformation is unfolding new dynamics and reach in the digital space. Especially on the major social platforms, recommendation algorithms and other design features seem to further amplify disinformation, hate, and incitement.
      </>
    ),
  },
  {
    title: 'How',
    icon: '/img/icons/icon_how.png',
    description: (
      <>
        Against this background, it is important to attract more researchers, social scientists, and data scientists who are both technically capable of conducting social media monitoring and who can classify generated data in the political-social context and thus expand the state of research.
      </>
    ),
  },
  {
    title: 'What',
    icon: '/img/icons/icon_what.png',
    description: (
      <>
        The Hub aims at reducing the hurdles for independent research on social platfroms and online discourse by creating a central knowledge base where we gather the most important information, the legal basis, the best tools and code samples via crowdsourcing. 
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={icon}></img>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
