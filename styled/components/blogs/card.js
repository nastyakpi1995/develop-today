import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.1;
  color: black;
  margin-bottom: 30px;
  transition: 0.5s all;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  display: ${props => (props.theme % 4 !== 0) ? 'inline-block' : 'flex'};
  width: ${props => (props.theme % 4 !== 0) ? '30%' : '100%'};
`;

export const Section = styled.div`  
    position: relative;
    box-sizing: border-box;
    display: flex;
    
    div {
      width: 60%;
    }
    
    p {
      max-height: 150px;
      height: 100%;
      color: #738a94;
      font-family: Georgia,serif;
      margin-bottom: 15px;
      font-size: 15px;
      line-height: 1.5em;
      overflow: hidden;
    }
    
    section {
      width: 40%;
      padding: 0 20px;
      overflow: hidden;
    }
  }
  ${props => (props.theme % 4 !== 0) ?
    'padding: 15px;' +
    'border-bottom: 1px solid #e9eef1;' +
    'background-size: cover;' +
    'div { width: 100%; height: 60%; }' +
    'section { width: 100%; height: 200px; }' +
    'flex-direction: column;'
     :
    ' text-align: left; margin-bottom: 50px;'
};
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: inherit;
  color: black;
  border: none;
  cursor: pointer;
`;

export const Img = styled.img`
  overflow: hidden;
  box-sizing: border-box;
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  cursor: pointer;
`;

