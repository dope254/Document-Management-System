import { browserHistory } from "react-router";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Index from "../homepage/index.component";
import LoginPage from "../login/LoginPage.component";
import SignupPage from "../signup/SignupPage.component";
import Document from "../documents/DocumentPage.component";
import CreateDocumentPage from "../documents/DocumentCreatePage.component";
import ProfilePage from "../ProfilePage/ProfilePage.component";
import UsersPage from "../users/UsersPage.component";
import AllDocumentsPage from "../documents/AllDocumentsPage.component";
import AllEventsPage from "../events/AllEventsPage.component";
// import AllNewsPage from "../news/AllNewsPage.component";
// import Body from "../body/BodyPage.component";
import Tech from "../sectors/IT/It";

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * renders the app component
   * @returns {void}
   * @memberOf App
   */
  render() {
    return (
      <BrowserRouter history={browserHistory}>
        <div>
          <Route path="/app/" component={Index} />
          <Route path="/app/login" component={LoginPage} />
          <Route path="/app/signup" component={SignupPage} />
          <Route path="/app/document" component={Document} />
          <Route path="/app/create" component={CreateDocumentPage} />
          <Route path="/app/profile" component={ProfilePage} />
          <Route path="/app/users" component={UsersPage} />
          <Route path="/app/all/document" component={AllDocumentsPage} />
          <Route path="/app/all/events" component={AllEventsPage} />
          {/* <Route path="/app/all/news" component={AllNewsPage} /> */}
          <Route path="/app/tech" component={Tech} />
          {/* <Route path="/app/body" component={Body} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
