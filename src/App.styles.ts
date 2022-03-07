import styled, { createGlobalStyle } from 'styled-components';
//@ts-ignore
// const bgimage = 'https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  * {
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff,
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    backgroun-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    filter: drop-shadow(2px 2px #0085a3);
    text-align: center;
    margin: 20px;
  }
`;