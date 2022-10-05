import React from "react";
import styled, {css} from "styled-components";
import tw from "twin.macro";
import {stack as Menu} from "react-burger-menu";
// import { useMediaQuery } from "react-responsive";
// import { SCREENS } from "../data.js";

const ListContainer = styled.ul`
  ${tw`
flex
list-none`};
`;

const NavItem = styled.li`
  ${tw`
text-sm
md:text-base
text-black
font-medium
mr-1
md:mr-5
cursor-pointer
transition
duration-300
ease-in-out
hover:text-gray-700
`};

  ${({menu}) => menu && css`
    ${tw`
text-white
text-xl
mb-3
focus: text-white
font-medium
  `};
  `};
`;

export function NavItems() {
    // const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

    // if (isMobile)
    return (<Menu right>
            <NavItem menu>
                <a href="#home">Home</a>
            </NavItem>
            <NavItem menu>
                <a href="#projects">Projects</a>
            </NavItem>
            <NavItem menu>
                <a href="#skills">Skills</a>
            </NavItem>
            <NavItem menu>
                <a href="#contact">Contact</a>
            </NavItem>
        </Menu>);

    return (<ListContainer>
            <NavItem>
                <a href="#home">Home</a>
            </NavItem>
            <NavItem>
                <a href="#projects">Projects</a>
            </NavItem>
            <NavItem>
                <a href="#skills">Skills</a>
            </NavItem>
            <NavItem>
                <a href="#contact">Contact</a>
            </NavItem>
        </ListContainer>);
}


