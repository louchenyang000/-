import styled from "styled-components";

export const CateWrap = styled.div`
  height: 100%;
  display: flex;
  > div:first-child {
    width: 0.9rem;

    > ul {
      height: 100%;
      overflow-y: scroll;
      li {
        height: 0.5rem;
        text-align: center;
        line-height: 0.5rem;
        background: #f3f3f3;
        &.active {
          background: #fff;
          span {
            display: inline-block;
            height: 100%;
            border-bottom: 1px solid #ee742f;
          }
        }
      }
    }
  }
  > div:last-child {
    flex: 1;
    background: #fff;
    padding: 0.2rem 0.1rem;
    > ul {
      display: flex;
      flex-wrap: wrap;
      overflow-y: scroll;
      height: 100%;
      align-content: flex-start;
      li {
        width: 33.3333%;
        text-align: center;
        height: 0.5rem;
        line-height: 0.5rem;
        color: #666;
      }
    }
  }
`;
