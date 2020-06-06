import styled from 'styled-components';

export const Title = styled.div`
  font-size: 60px;
  text-align: center;
  font-family: "Roboto", Arial, sans-serif;
  color: #fff;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  margin-top: 30px;
`;

export const Name = styled.h1`
  font-size: 24px;
  font-weight: 600;
  font-size: -webkit-xxx-large;
  color: #fff;
  font-family: "Roboto", Arial, sans-serif;
  margin: 0 0 25px 0;

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const Location = styled.div`
  width: 45%;
  display: block;
  height: 400px;
  margin: 20px;

  @media (max-width: 1000px) {
    width: 70%;
    margin: 20px auto;
  }
`;

export const Menu = styled.div`
  width: 30%;
  height: 400px;
  margin: 20px;
  background: black;
  display: block;

  @media (max-width: 1000px) {
    padding: 20px 0;
    width: 70%;
    height: 330px;
    margin: 0 auto;
    border: 1px solid #9a9a9a;
    border-radius: 20px;
  }
`;

export const Image = styled.img`
  overflow: hidden;
  box-sizing: border-box;
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: relative;
  cursor: pointer;
  display: block;
  border-radius: 10px;
`;

export const Link = styled.a`
  display: flex;
  color: #fff;
  text-decoration: none;
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;

  @media (max-width: 1000px) {
    display: table;
    margin: 0 auto;
  }
`;

export const Description = styled.p`
  margin: auto 5px;
  font-family: "Roboto", Arial, sans-serif;

  &:hover {
    color: #9a9a9a;988
    border-bottom: 1px solid #9a9a9a;
    border-top: 1px solid #000;
  }
`;

export const Li = styled.li`
  margin-bottom: 10px;
`;

export const Input = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    margin: 0 auto;
  }
`;

export const Email = styled.input`
  width: 100%;
  margin: 0;
  height: 30px;
  text-align: center;
  border-radius: 10px;
  border: 2px solid #9a9a9a;
  outline: none;
`;
