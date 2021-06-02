import React from 'react'
import styled from 'styled-components';
import Cars from '../data';

Cars.map(item => (console.log(item)))

function Section({title , descryption , backgroundImg,leftBtnText,rightBtnText}) {
    return (
            <Wrap backgroundImg = {backgroundImg}>
            <ItemText>
                <h2>{title}</h2>
                <p> {descryption}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    <RightButton>
                        {rightBtnText}
                    </RightButton>
                </ButtonGroup>
                <DownArrow src = "/images/images/down-arrow.svg" />
            </Buttons>
            
        
            </Wrap>
        
    )
}

export default Section
 
const Wrap = styled.div`
       display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : center; 
    width : 100vw;
    height : 100vh;
    background-size : cover;
    background-position : center;
    background-repeat : no-repeat;
    background-image : ${props => `url("/images/images/${props.backgroundImg}")` }
    
 
`
const ItemText = styled.div`
    padding-top : 15vh;
    text-align : center;
`
const ButtonGroup = styled.div`
    display : flex;
    margin-bottom : 30px;
    @media (max-width : 768px){
        flex-direction:column;
    }
`
const LeftButton = styled.div`
    background-color : rgba(23,36,32,0.8);
    height : 40px;
    width : 256px;
    color : white;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius : 100px;
    opacity : 0.85;
    text-transform : uppercase;
    font-size : 12px;
    cursor : pointer;
    margin : 8px;
`

const RightButton = styled(LeftButton)`

`

const DownArrow = styled.img`
    margin-top : 20px;
    height : 40px;
    animation : animateDown infinite 1.5s;
`
const Buttons = styled.div`

`