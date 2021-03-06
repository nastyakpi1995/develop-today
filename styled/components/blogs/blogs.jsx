import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1040px;
  color: white;
  margin: 20px auto;
  width: 95%;
  
  button {
    font-family: Georgia,serif;
    margin: 10px auto;
    display: flex;
    height: 30px;
    color: #935252;
    align-items: center;
    border: none;
    font-size: x-large;
    cursor: pointer;
  }
`;

export const BoxLoad = styled.div`
  height: 100vh;
  justify-content: center;
  display: flex;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  
  button {
    &:hover {
      background: black;
      color: white;
    }
  }
  
  a {
    text-decoration: none;
    border: 1px solid;
    padding: 10px;
    cursor: pointer;
    &:hover {
      background: black;
      color: white
    }
   }
`;
