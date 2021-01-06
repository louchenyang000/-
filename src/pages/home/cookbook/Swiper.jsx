import React, { Component } from "react";
import { Carousel } from "antd-mobile";
// import swiper from "assets/swiper-1.png";
import { SwiperWrap } from "./styledCookbook";
import { connect } from "react-redux";
import { GETLIST } from "../action-types";
// import mocklist from "../../../mock/cookbook-list.json";
import axios from "axios";
// console.log(333333333, mocklist);
const mapState = (state) => ({
  list: state.home.list,
});

const maoDispatch = (dispatch) => ({
  loadData() {
    // 获取数据
    dispatch({
      type: GETLIST,
      url: "/api/list",
      // data: mocklist,
    });
  },
});
@connect(mapState, maoDispatch)
class Swiper extends Component {
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    return (
      <SwiperWrap>
        {this.props.list.length && (
          <Carousel
            autoplay={true}
            infinite
            // beforeChange={(from, to) =>
            //   console.log(`slide from ${from} to ${to}`)
            // }
            // afterChange={(index) => console.log("slide to", index)}
          >
            {this.props.list.slice(0, 5).map((value) => (
              <img key={value.id} src={value.img} alt="" />
            ))}
          </Carousel>
        )}
      </SwiperWrap>
    );
  }
}
export default Swiper;
