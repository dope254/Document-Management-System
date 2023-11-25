import React, { Component } from "react";
import { Button, Icon, Input } from "react-materialize";
import Search from "./Search";
import { logout } from "../../actions/authActions";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    event.preventDefault();
    const query = event.target.value;
    if (query === "") {
      window.location = "/app/document";
    } else {
      this.props.searchDocuments(query);
    }
    this.setState({ query });
  }

  /**
   * renders the Nav component
   * @returns {void}
   * @memberOf Navbar
   */
  logout(event) {
    event.preventDefault();
    this.props.logout();
    this.context.router.history.push("/app/login");
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="searchbar">
        <div className="logo">
          <div className="logo--box">
            <img
              src="https://www.figma.com/file/sN75m4xqdCkASpqUj6As39/image/4e6db23ebd26df09e7f3925f0604beb9648d6c90"
              alt=""
              style={{
                width: "34px",
                height: "33px",
                flexShrink: 0,
                marginLeft: "14px",
                marginTop: "9px",
              }}
            />
          </div>
          <div className="logo--text">
            <h2>Nairobi City County</h2>
            <p>Let's make it work</p>
          </div>
        </div>
        <Search onChange={this.handleSearch} />{" "}
        {/* Implement the Search component */}
        <div className="searchbar--actions">
          <ul>
            <li id="profileNav" className={this.props.isLoginActive}>
              {isAuthenticated ? (
                <a href="/app/profile" className="profile">
                  Profile
                </a>
              ) : (
                <a href="/app/login" id="login">
                  Login
                </a>
              )}
            </li>
            <li id="logout" className={this.props.isSignupActive}>
              {isAuthenticated ? (
                <a
                  href="/app/logout"
                  onClick={this.logout.bind(this)}
                  className="log-out"
                >
                  Logout
                </a>
              ) : (
                <a href="/app/signup" id="signup">
                  Signup
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchBar;
