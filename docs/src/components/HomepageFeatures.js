import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Why',
    Svg: require('../../static/img/undraw_social_user.svg').default,
    description: (
      <>
        Disinformation is unfolding new dynamics and reach in the digital space. Especially on the major social platforms, recommendation algorithms and other design features seem to further amplify disinformation, hate, and incitement. 
      </>
    ),
  },
  {
    title: 'How',
    Svg: require('../../static/img/undraw_engineering_team.svg').default,
    description: (
      <>
        Against this background, it is important to attract more researchers, social scientists, and data scientists who are both technically capable of conducting social media monitoring and who can classify generated data in the political-social context and thus expand the state of research.
      </>
    ),
  },
  {
    title: 'What',
    Svg: require('../../static/img/undraw_sync_files.svg').default,
    description: (
      <>
        The project aims at reducing the hurdles for the use of social media monitoring by creating a central knowledge hub where we gather the most important information, the legal basis, the best tools and code samples via crowdsourcing. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
    <section className={styles.features}>
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
