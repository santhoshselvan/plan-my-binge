import React, {Component} from "react";
import {NavigationMenus} from "./NavigationMenus.jsx";
import styled from 'styled-components';
import {MainContent} from "./MainContent.jsx";
import {NavOptions} from "../utils/Constants";
import {connect} from "react-redux";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuSelection: NavOptions[0]
    }
  }

  render() {
    return <StyledContainer>
      {this.props.ready &&
      <>
        <NavigationMenus onNavChange={(menuSelection) => this.setState({menuSelection})}
                         selection={this.state.menuSelection}/>
        <MainContent/>
      </>}
    </StyledContainer>;
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    ready: state.app.ready
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({});
export const AppContainer = connect(mapStateToProps,
  mapDispatchToProps
)(App);

const StyledContainer = styled.div`
  font-family: "Open Sans", "Helvetica Neue", Arial, sans-serif;
  line-height: 1.6;
  font-size: 18px;
  
  margin-top: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;