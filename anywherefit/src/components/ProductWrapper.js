import React from 'react'
import styled from 'styled-components'

const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
}
.card-footer{
    background:transparent:
    border-top:transparent;
    transition: all 1s linear;
}
&:hover{
    .card{
        border:0.1rem solid rgba(0,0,0,0.2);
        background-color:#E4576E;
        color:#1e222e;
        box-shadow:2px 2px 5px 0px;
    }
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition: all 1s linear;
}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}

.cart-btn {
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background:var(--lightBlue);
    border:none;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform:translate(100%,100%);
}

.img-container:hover .cart-btn{
    transform:translate(0,0);
    transition: all 1s linear;
}

.cart-btn:hover{
    color:var(--mainBlue);
    cursor:pointer;
}
`;


export default ProductWrapper
