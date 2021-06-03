import React from 'react';
import styled from "styled-components";
import MenuIcon from  '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    return (
        <div>
            <Container >
            <a>
              <img src = "/images/images/logo.svg" />
            </a>
            <Menu>
                <a href = "#" > Model S</a> 
                <a href = "#" > Model 3</a> 
                <a href = "#" > Model X</a> 
                <a href = "#" > Model y</a> 
            </Menu>
            <RightMenu >
              <a href = "#" >Shop</a>
              <a href = "#">Tesla Account</a>
              <CustomMenu>

              </CustomMenu>
            </RightMenu>

            <BurgerNav>
            <CustomClose />
              <li> <a href = "#"> existing inventory</a> </li>
              <li> <a href = "#"> used inventory</a> </li>
              <li> <a href = "#"> Trade-in</a> </li>
              <li> <a href = "#"> Cybertruck</a> </li>
              <li> <a href = "#"> Roadster</a> </li>
            </BurgerNav>

            </Container>
        </div>
    )
}

export default Header
const Container = styled.div`
  min-height: 60px;
  position :fixed;
  display : flex;
  align-items : center;
  justify-content:space-between;
  padding : 0 20px;
  top: 0;
  left:0;
  right:0;
  z-index:1;


`

const Menu = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  flex :1;
  a{
    font-weight : 600;
    text-decoration : uppercase;
    padding : 0 10px;
    flex-wrap:nowrap;
  }
  @media(max-width:768px) {
    display : None;
  }


`
const RightMenu = styled.div`
   display : flex;
   align-items:center;
  a{
    font-weight : 600;
    text-decoration : uppercase;
    padding : 0 10px;
    flex-wrap:nowrap;
  }
`

const CustomMenu = styled(MenuIcon)`
  cusror:pointer;
`

const BurgerNav = styled.div`
  position:fixed;
  top : 0;
  bottom : 0;
  right : 0;
  background:white;
  width : 300px;
  z-idnex:16;
  list-style:none;
  padding: 20px;
  display : flex;
  flex-direction : column;
  text-align : start;
  li{
    padding : 15px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
    a{
      font-weight: 600;

    }
  }
`
const CustomClose = styled(CloseIcon)``