import {connect} from 'react-redux'
import {HomePage} from "../components/HomePage";
import {getPopularShows} from "./actionCreater";
import {getPopularShowsFromState, getRecentBookmarkedShows, getRecentlyVisitedShowsFromState} from "./selectors";


const mapStateToProps = (state, ownProps) => {
  return {
    popularShows: getPopularShowsFromState(state),
    recentlyVisitedShows: getRecentlyVisitedShowsFromState(state),
    bookmarkedShows: getRecentBookmarkedShows(state),
    showError: state.home.showError,
    showLoader: state.home.showLoader
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPopularShows: () => dispatch(getPopularShows())
  }
};

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomePageContainer