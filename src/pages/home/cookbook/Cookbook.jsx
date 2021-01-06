import React, { Component } from "react";
import Header from "./Header";
import Swiper from "./Swiper";
import HotCate from "./HotCate";
import HotList from "./hotlist";
import Search from "@/search/Search.jsx";

export default class Cookbook extends Component {
  render() {
    return (
      <div>
        <Header />
        <Swiper />
        <Search />
        <HotCate />
        <HotList />
      </div>
    );
  }
}
