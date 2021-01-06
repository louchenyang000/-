import React, { Component } from "react";
import { HeaderWrap } from "./styleCategory.js";
import { withRouter } from "react-router-dom";
class Header extends Component {
  state = {
    dir: "category",
  };
  handlClick = (dir) => {
    return () => {
      console.log(dir);
      this.setState({
        dir,
      });
      this.props.history.push(`./${dir}`);
    };
  };
  render() {
    return (
      <HeaderWrap>
        <ul>
          <li
            onClick={this.handlClick("category")}
            className={this.state.dir === "category" ? "active" : ""}
          >
            分类
          </li>
          <li
            onClick={this.handlClick("material")}
            className={this.state.dir === "material" ? "active" : ""}
          >
            食材
          </li>
          <li
            className={`slider ${
              this.state.dir === "material" ? "right" : "left"
            }`}
          ></li>
        </ul>
      </HeaderWrap>
    );
  }
}

export default withRouter(Header);
