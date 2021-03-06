import React, {useEffect} from "react";
import styled from "styled-components";
import {Colors, TrackingCategory} from "../utils/Constants";
import ReactGA from "react-ga";
import {ga} from "../utils/apiUtils";

export const HomePageError = () => {
  useEffect(() => {
    ReactGA.event(ga(TrackingCategory.HomePageError,
      'Error loading content in home page'));
  });
  return <Error>
    <ErrorTitle> Error loading content :'(
    </ErrorTitle>
    "And I knew exactly what to do. But in a much more real sense I had no idea what to do"
    <br/>
    <ErrorQuoteAuthor>- Michel Scott (The Office)</ErrorQuoteAuthor>
  </Error>
}

const ErrorQuoteAuthor = styled.div`
  text-align: right;
`;
const Error = styled.div`
  color: ${Colors.error};
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex:1;
`;

const ErrorTitle = styled.div`
  font-weight: 700;
  font-size: 2rem;
`;