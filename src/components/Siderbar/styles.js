import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SideBar = styled.div`
  width: 220px;
  height: auto;
  background: #000;
`;

export const ImageLogo = styled.img`
  width: 131px;
  height: 40px;
  margin-top: 15px;
  margin-left: 15px;
`;

export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const Title = styled.h1`
  color: #b3b3b3;
  font-family: sans-serif;
  font-size: 14px;
  margin-bottom: 25px;
  margin-left: 16px;

  svg {
    margin-right: 10px;
  }
`;

export const NavLinkContent = styled(NavLink)`
  text-decoration: none;
`;

export const PlayListTitle = styled.h1`
  font-size: 11px;
  line-height: 16px;
  font-family: sans-serif;
  text-transform: uppercase;
  color: #b3b3b3;
  letter-spacing: 0.16em;
  margin-left: 20px;
  margin-top: 10px;
`;

export const ListTitle = styled.h1`
  color: #b3b3b3;
  font-family: sans-serif;
  font-size: 14px;
  margin-bottom: 10px;
  margin-left: 16px;
  margin-top: 15px;

  svg {
    margin-right: 10px;
  }
`;
