import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
  font-size: 44px;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 30px;
  
  p {
    height: 100%;
    color: #738a94;
    font-family: Georgia,serif;
    margin-bottom: 15px;
    font-size: 30px;
  }
`;

export const PostTitle = styled.h1`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.1;
  color: black;
  margin-bottom: 30px;
  transition: 0.5s all;
  &:hover {
    color: gray;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  justify-content: center;
  color: black;
`;
