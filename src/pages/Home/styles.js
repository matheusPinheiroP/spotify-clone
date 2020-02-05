import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 40px;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  position: relative;

  h1 {
    font-size: 28px;
    line-height: 1.6;
    font-weight: 600;
    letter-spacing: -0.36px;
    color: #fff;
    font-family: sans-serif;
    margin-left: 20px;
  }
`;

export const Direction = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ;
`;

export const CardImage = styled.div`
  max-width: 200px;
  min-height: 189px;
  border-radius: 4px;
  padding: 48px 24px;
  background: rgb(40, 40, 40);
  margin-left: 25px;
  margin-top: 20px;

  img {
    width: 150px;
  }

  span {
    font-size: 13px;
    text-align: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    font-family: sans-serif;
  }

  p {
    font-size: 12px;
    color: #b3b3b3;
    margin-top: 8px;
    font-family: sans-serif;
  }
`;
