import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line
import HostingCloudLandingPage from "demos/HostingCloudLandingPage.js";

export default function App() {

  return (
    <>
      <GlobalStyles />
      <HostingCloudLandingPage/>
    </>
  );
}


