import React from 'react';
import Layout from '../components/Layout';
import Main from '../components/Main';
import useMetadata from '../util/hooks/useMetadata';
import Utils from '../components/Utils';
import NextPrevious from '../components/NextPrevious';
import { HomepageCallout, ResourceCard } from 'gatsby-theme-carbon';
import { blue20, purple20, gray100 } from '@carbon/elements';
import ImageV11 from '../images/Carbon-AI-banner-image.jpg'; // Adjust the path as needed
import { calloutLink, callToAction } from './Homepage.module.scss';

// Custom components for the Banner and Callouts
const FirstLeftText = () => <h1>IBM Data and AI <strong>Skills Sandbox</strong></h1>;
const FirstRightText = () => (
  <p>
    Welcome to the IBM Data and AI Skills Sandbox. This site is designed to help
    you learn about and gain hands-on experience with{' '}
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
    how we can improve?
  </p>
);
const SecondRightText = () => (
  <p>
    We welcome all feedback or ideas to produce the best possible experience for our users. If you’re interested in contributing, check out our contributing guidelines to get started.
    <a className={calloutLink} href="/contributing/get-started/">
      Start contributing →
    </a>
  </p>
);

// Custom props for the Homepage
const customProps = {
  Banner: (
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

// Main Homepage component
const Homepage = ({
  children,
  location,
  pageContext,
}) => {
  const { frontmatter = {}, titleType } = pageContext;
  const { title, description, keywords } = frontmatter;
  const { homepageTheme } = useMetadata();

  return (
    <Layout
      pageTitle={title}
      pageDescription={description}
      pageKeywords={keywords}
      titleType={titleType}
      homepage
      theme={homepageTheme}>
      {customProps.Banner}
      {customProps.FirstCallout}
      <Main>{children}</Main>
      {customProps.SecondCallout}
      <NextPrevious isHomepage location={location} pageContext={pageContext} />
      <Utils />
    </Layout>
  );
};

export default Homepage;
