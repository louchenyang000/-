import React, { Component } from "react";
import Header from "./Header.jsx";
import Classify from "../../../components/Category/Category.jsx";
import Material from "../../../components/Category/Category.jsx";
import Search from "../../../components/search/Search";
import { CateWrap } from "./styleCategory";
import { Route, Switch, Redirect } from "react-router-dom";

export default class Category extends Component {
  render() {
    return (
      <CateWrap>
        <Header />
        <Search />
        {/* <Classfly CurrentItem="热门" type="category" />
        <Material CurrentItem="肉类" type="material" /> */}
        <Switch>
          <Route
            path="/category"
            render={() => <Classify defaultItem="热门" type="category" />}
          />
          <Route
            path="/material"
            render={() => <Material defaultItem="肉类" type="material" />}
          />
          <Redirect from="/" to="/category" />
        </Switch>
      </CateWrap>
    );
  }
}
