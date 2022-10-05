import React, {useState} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {NavItems} from "./NavItems";

const NavBarContainer = styled.div`
  min-height: 68px;
  ${tw`
w-full
justify-between
fixed
z-10
`}
`;

const LogoContainer = styled.div`
  ${tw`
  pt-1
 `}
`;

export default function Navbar() {

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    return (
        <NavBarContainer className={color ? 'header header-bg' : 'header'}>
            <LogoContainer>
                <div>
                <a href="#home" ><span
                className="text-white text-4xl pl-4 block" style={{"font-family": "'Alumni Sans Pinstripe', sans-serif"}}>Saul<br/>Rowntree</span></a>
                </div>
            </LogoContainer>
            <NavItems/>
        </NavBarContainer>
    );
}
