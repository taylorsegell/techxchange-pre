import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [

  {
    title: 'TechZone',
    href: 'https://techzone.ibm.com/',
  },
  {
    title: 'TechXchange',
    href: 'https://www.ibm.com/community/ibm-techxchange-conference/',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
