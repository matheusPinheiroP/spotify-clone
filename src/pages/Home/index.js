import React from "react";

import { Container, Content, CardImage, Direction } from "./styles";

import Keys from "../../assets/tbk.jpeg";
import Chico from "../../assets/cb.jpeg";
import Lj from "../../assets/lj.jpeg";

export default function Home() {
  return (
    <Container>
      <Content>
        <h1>Tocado recentemente</h1>
        <Direction>
          <CardImage>
            <img src={Keys} alt="capa" />
            <span>The Black Keys</span>
            <p>Go</p>
          </CardImage>
          <CardImage>
            <img src={Chico} alt="capa" />
            <span>Chico Buarque</span>
            <p>O que será? A flor da Pele</p>
          </CardImage>
          <CardImage>
            <img src={Lj} alt="capa" />
            <span>Litte joy</span>
            <p>Next time Around</p>
          </CardImage>
          <CardImage>
            <img src={Lj} alt="capa" />
            <span>Litte joy</span>
            <p>Next time Around</p>
          </CardImage>
          <CardImage>
            <img src={Lj} alt="capa" />
            <span>Litte joy</span>
            <p>Next time Around</p>
          </CardImage>
        </Direction>
        <h1>Não sai dos seus ouvidos</h1>
        <Direction>
          <CardImage>
            <img src={Keys} alt="capa" />
            <span>The Black Keys</span>
            <p>Go</p>
          </CardImage>
          <CardImage>
            <img src={Chico} alt="capa" />
            <span>Chico Buarque</span>
            <p>O que será? A flor da Pele</p>
          </CardImage>
          <CardImage>
            <img src={Lj} alt="capa" />
            <span>Litte joy</span>
            <p>Next time Around</p>
          </CardImage>
          <CardImage>
            <img src={Lj} alt="capa" />
            <span>Litte joy</span>
            <p>Next time Around</p>
          </CardImage>
          <CardImage>
            <img src={Lj} alt="capa" />
            <span>Litte joy</span>
            <p>Next time Around</p>
          </CardImage>
        </Direction>
      </Content>
    </Container>
  );
}
