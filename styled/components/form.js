import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background: black;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  
  form {
    width: 300px;  
  }
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ContainerForm = styled.div`
    background: #473e3e;
 left: 0;
  top: 0;
  position: fixed;
  z-index: 500;
  width: 564px;
  height: 616px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-sizing: border-box;
  transition: all 0.3s ease-out;

  @media (min-width: 600px) {
    .Modal {
      width: 500px;
      left: calc(50% - 250px);
    }
    left: calc(50% - 205px);
    top: calc(50% - 315px);
    width: 50%;
  }

  @media (min-width: 1200px) {
    left: 30%;
    top: 12%;
  }
`;

export const BlockButton = styled.div`
  margin-top: 5%;
  display: flex;
`;

export const Block = styled.div`
     display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 5% 15%;
  label {
    display: flex;
    flex-direction: column;
    color: #738a94;
    font-family: Georgia,serif;
    font-size: 40px;
    text-transform: capitalize;
  }
   
  input:nth-child(1) {
    margin-bottom: 30px;
  }
  
  input {
    height: 30px;  
  }
`;



export const Button = styled.button`
  width: 100%;
  text-transform: uppercase;
  display: block;
  color: #fff;
  outline: none;
  cursor: pointer;
  height: 48px;
  background: #333b3b;
  border-radius: 24px;
  font-family: Avenir Next;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  letter-spacing: 1px;
  
  margin-top: 45px;
  
  &:hover {
    background: black;
  }
`;



