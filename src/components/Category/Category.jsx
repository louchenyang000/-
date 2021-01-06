import React, { Component } from "react";
import { CateWrap } from "./styledgory";
import { get } from "../../utils/http";

export default class Category extends Component {
  state = {
    datasource: null,
    currentItem: "",
    defaultItem: "",
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.defaultItem !== prevState.defaultItem) {
      return {
        ...prevState,
        defaultItem: nextProps.defaultItem,
        currentItem: nextProps.defaultItem,
      };
    }
    return null;
  }
  async componentDidMount() {
    let result = await get({
      url: "/api/category",
    });
    this.setState({
      datasource: result.data,
      currentItem: "热门",
    });
  }
  handlItem = (item) => {
    return () => {
      this.setState({
        currentItem: item,
      });
    };
  };
  render() {
    let { type } = this.props;
    let data = this.state.datasource
      ? Object.keys(this.state.datasource[type])
      : [];
    let contents = this.state.datasource
      ? this.state.datasource[type][this.state.currentItem]
      : [];
    return (
      <CateWrap>
        <div>
          <ul>
            {/* <li className="active">
              <span>测试</span>
            </li> */}
            {data.map((value) => {
              return this.state.currentItem === value ? (
                <li key={value} className="active">
                  <span>{value}</span>
                </li>
              ) : (
                <li key={value} onClick={this.handlItem(value)}>
                  {value}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul>
            {contents.map((value) => {
              return <li key={value}>{value}</li>;
            })}
          </ul>
        </div>
      </CateWrap>
    );
  }
}
