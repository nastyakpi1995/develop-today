import styled from 'styled-components';

export const BoxWrapper = styled.div`
  a {
    position: relative;
    text-indent: 18px;
    text-decoration: none;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    font: 14px "BrandonText", Helvetica, Arial, sans-serif;
    vertical-align: middle;
    color: #ffffff;
    display: inline-block;
    transition: color .35s ease-in-out;
    cursor: point;
  }
  a:hover {
    color: gray;
  }
`;

export const Menu = styled.div`
  background: black;
  width: 100%;
  
  div {
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    align-items: center;
    max-width: 1040px;
    margin: 0 auto;
    width: 100%;
  }
`;

export const Home = styled.h1`
    text-indent: 18px;
    text-decoration: none;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    font: 14px "BrandonText", Helvetica, Arial, sans-serif;
    vertical-align: middle;
    color: #ffffff;
    display: inline-block;
    transition: color .35s ease-in-out;
    width: 100px;
    cursor: pointer;
    &:hover {
      color: gray;
    }
`;
