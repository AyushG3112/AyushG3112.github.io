import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Contact, Projects } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://ayushgupta.me/resume.pdf',
      permanent: true, // change to true for 301
    },
  };
}

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Jobs />
      {/* <Featured /> */}
      <Projects />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
