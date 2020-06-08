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

export const BlockInput = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  
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



