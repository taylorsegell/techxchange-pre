import React from 'react';
import { HomepageCallout, ResourceCard } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { blue20, purple20, gray100 } from '@carbon/elements';
import { calloutLink, callToAction } from './Homepage.module.scss';
// import HomepageVideo from '../../components/HomepageVideo/HomepageVideo';
import ImageV11 from 'gatsby-theme-carbon/src/images/Carbon-AI-banner-image.jpg';


const FirstLeftText = () => <h1>IBM Data and AI <strong>Skills Sandbox</strong></h1>;

const FirstRightText = () => (
  <p>
    Welcome to the IBM Data and AI Skills Sandbox. This site is designed to help
    you learn about and gain hands on experience with{' '}
    <strong>
      watson<span style={{ color: '#0f62fe' }}>x</span>
    </strong>{' '}
    and the <strong>Cloud Pak for Data</strong> solution capabilities.
    <br />
    <br />
    To get started, select a use case from the navigation on the left.
  </p>
);
const SecondLeftText = () => (
  <p>
    Have ideas on
    <br />
    we can improve?
  </p>
);

const SecondRightText = () => (
  <p>
    We welcome all feedback, or ideas in order to produce the best
    possible experience for our users. If you’re interested in contributing,
    check out our contributing guidelines to get started.
    <a className={calloutLink} href="/contributing/get-started/">
      Start contributing →
    </a>
  </p>
);

const customProps = {
  Banner: (
    <>
      {/* Remove the dots for now since we're using a static image for v11 */}
      {/* <span className="homepage--dots" /> */}
      <section className="homepage--header">
        <div
          className="cds--grid"
          style={{
            maxWidth: '100%',
            overflow: 'hidden',
            backgroundImage: `url(${ImageV11})`,
          }}>
          </div>
      </section>
    </>
  ),
  FirstCallout: (
    <HomepageCallout
      backgroundColor={blue20}
      color={gray100}
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color={gray100}
      backgroundColor={purple20}
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
