import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './Home.scss';
import LandingText from '../../components/textComponents/landingText/LandingText';
import LandingButtons from '../../components/buttonComponents/landingButtons/LandingButtons';

class Home extends React.Component {
  render() {
    return (
      <div className={s.landing_content}>
        <LandingText />
        <LandingButtons />
      </div>
    );
  }
}

export default withStyles(s)(Home);

/**  ORIGINAL RSK Home Component -- Refer to code below for PropTypes functionality

 export default function Home({ news }) {
  withStyles(s);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>Hi Mollie!</h1>
        {news.map(item => (
          <article key={item.link} className={s.newsItem}>
            <h1 className={s.newsTitle}>
              <a href={item.link}>{item.title}</a>
            </h1>
            <div
              className={s.newsDesc}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </article>
        ))}
      </div>
    </div>
  );
}

 Home.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string,
    }),
  ).isRequired,
};

 */
