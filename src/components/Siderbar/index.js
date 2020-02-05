import React from "react";
import { FaHome, FaSearch, FaBook, FaPlus, FaHeart } from "react-icons/fa";

import {
  SideBar,
  ImageLogo,
  ImageContent,
  List,
  Title,
  NavLinkContent,
  PlayListTitle,
  ListTitle
} from "./styles";
import SpotifyLogo from "../../assets/spotify-logo.png";

export default function Home() {
  return (
    <SideBar>
      <ImageLogo src={SpotifyLogo} alt="Logo" />
      <ImageContent>
        <List>
          <NavLinkContent to="/">
            <Title>
              <FaHome size={24} />
              Inicio
            </Title>
          </NavLinkContent>
          <NavLinkContent to="/">
            <Title>
              <FaSearch size={24} />
              Buscar
            </Title>
          </NavLinkContent>
          <NavLinkContent to="/">
            <Title>
              <FaBook size={24} />
              Biblioteca
            </Title>
          </NavLinkContent>

          <PlayListTitle>PLAYLISTS</PlayListTitle>
          <ListTitle>
            <FaPlus size={24} />
            Criar playlist
          </ListTitle>
          <ListTitle>
            <FaHeart size={24} />
            Músicas curtidas
          </ListTitle>
        </List>
      </ImageContent>
    </SideBar>
  );
}
