import React from "react";
import {ShowList} from "./ShowList.jsx";
import styled from "styled-components";
import {Colors, cssForPhoneAndTablet, Referrer} from "../utils/Constants";
import {useHistory, withRouter} from "react-router-dom";
import {AppHeader} from "./AppHeader";
import {BookmarkPlaceholderPageWithRouter} from "./BookmarkPlaceholderPage";
import MetaTags from 'react-meta-tags';

const BookmarkedShowPage = ({bookmarkedShows, popularShows}) => {

  const history = useHistory();

  return <Container>
    <MetaTags>
      <title>"Bookmarks | Plan my binge | Find how long does it take to watch any TV show"</title>
    </MetaTags>


    <AppHeader history={history} title={"Bookmarked Shows"}/>
    {bookmarkedShows.length !== 0 ? <>
      <Header> Bookmarked Shows</Header>
      <ShowListStyled>
        <ShowList shows={bookmarkedShows} referrer={Referrer.BookmarkPage}/>
      </ShowListStyled>
    </> : <BookmarkPlaceholderPageWithRouter popularShows={popularShows}/>}

  </Container>
};

export const BookmarkedShowsPageWithRouter = withRouter(BookmarkedShowPage)

const Container = styled.div`
  clear: both;
  width: 100%;
  margin-bottom: 50px;
`;

const Header = styled.h4`
  padding: 20px;
  margin: 0;
  ${cssForPhoneAndTablet} {
    text-align: center;
  }
`;

const BackLink = styled.a`
  color: ${Colors.black};
  font-size: 1.5rem;
  &:hover {
    color: ${Colors.darkGray};
    text-decoration: none;
    border-radius: 10px;
  }
`;

const ShowListStyled = styled.div`
  margin: 20px;
`;