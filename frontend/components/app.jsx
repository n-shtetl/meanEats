import React from "react";
import LoginFormContainer from './session_form/LoginFormContainer';
import SignupFormContainer from './session_form/SignupFormContainer';
import GreetingContainer from './greeting/GreetingContainer';
import PostIndexContainer from './posts/PostIndexContainer';
import PostShowContainer from './posts/PostShowContainer';
import TagIndexContainer from './tags/TagIndexContainer';
import SearchContainer from './search/SearchContainer';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';

const App = () => (
  <div id="app">
    <header id="header">
        {/* <img src="cooking_pot.png" height="100" width="100"/>
        <br/>
        <h2 id='title-text'>Mean Eats</h2> */}
        {/* <GreetingContainer/> */}
        <Route path="/" component={GreetingContainer}/>
    </header>
    <Modal />
    <div className="index-body">
    <Switch>
      <ProtectedRoute exact path="/" component={PostIndexContainer} />
      <ProtectedRoute exact path="/posts/:postId" component={PostShowContainer}/>
      <ProtectedRoute exact path="/tags/:tagId" component={TagIndexContainer}/>
      {/* <ProtectedRoute exact path="/tags/:tagName" component={TagIndexContainer}/> */}
      <ProtectedRoute exact path="/search/:searchTerm" component={SearchContainer}/>
    </Switch>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
  </div>
);

export default App;