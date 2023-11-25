import React, { Component } from "react";
import Navbar from "../navigation/Nav.component";
import FlashMessagesList from "../flash/FlashMessagesList";
import Body from "../body/BodyPage.component";
import SearchBar from "../common/Searchbar";

/**
 * @class Index
 * @extends {Component}
 */
class Index extends Component {
  /**
   * @returns {object} div
   * @memberof Index
   */
  render() {
    return (
      <div>
        {/* <SearchBar isHomeActive="" isLoginActive="" isSignupActive="" auth="" /> */}
        <Navbar isHomeActive="" isLoginActive="" isSignupActive="" auth="" />
        <FlashMessagesList />
        <Body />
      </div>
    );
  }
}

export default Index;
