import styled from "styled-components"
import border from "../styled/border.js"

export const SearchWrap=border({
    Comp:styled.div`
        padding:.1rem .15rem;
            div{
                border:1px solid #ccc;
                display:flex;
                justify-content:center;
                align-items:center;
                height:.4rem;
                color:#666;
                background:#fff;
                img{
                    width:.3rem;
                    height:.3rem;
                    margin-right:0.05rem;
                }
            }
`
})

