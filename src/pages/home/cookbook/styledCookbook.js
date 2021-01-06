import styled from "styled-components";

export const HeaderWrap = styled.div`
  height: 0.44rem;
  background: #ee742f;
  font-size: 0.18rem;
  color: #fff;
  text-align: center;
  line-height: 0.44rem;
`;
export const SwiperWrap = styled.div`
  height: 0;
  font-size: 0;
  padding-bottom: 66.66667%;
  img {
    width: 100%;
  }
`;
export const HotCateWrap = styled.div`
  header {
    line-height: 0.5rem;
    background: #fff;
    padding-left: 0.2rem;
    border-bottom: 1px solid gray;
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 70%;
    }
    span {
      margin-top: 0.05px;
    }
  }
`;

export const HotListWrap = styled.div`
  padding: 0 0.2rem 0.2rem 0.2rem header {
    color: #666;
    padding-bottom: 0.1rem;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    figure {
      width: 40%;
      margin: 1em 18px;
      img {
        width: 100%;
      }
      // 给奇数行偶数行设置
      &:nth-child(odd) {
        padding-right: 0.05rem;
      }

      &:nth-child(even) {
        padding-left: 0.05rem;
      }
      figcaption {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 0.6rem;
      }
      h3 {
        font-size: 0.12rem;
      }
      h5 {
        font-size: 0.12rem;
        font-weight: narmal;
      }
    }
  }
`;
export const CateWrap = styled.div`
  height: 100%;
  overflow: hidden;
`;
