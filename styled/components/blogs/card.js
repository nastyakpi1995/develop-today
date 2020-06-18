import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.1;
  color: black;
  margin: 0;
  transition: 0.5s all;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

export const CardWrapper = styled.div`
  margin: 30px 0px;
  position: relative;
  box-sizing: border-box;
  display: ${props => (props.theme % 4 !== 0) ? 'inline-block' : 'flex'};
  width: ${props => (props.theme % 4 !== 0) ? '30%' : '100%'};
  height: ${props => (props.theme % 4 !== 0) ? '30%' : '400px'};
`;

export const Text = styled.div`
   max-height: 150px;
   height: 100%;
   color: #738a94;
   font-family: Georgia,serif;
   margin-bottom: 15px;
   font-size: 15px;
   line-height: 1.5em;
   overflow: hidden;
`;


export const Section = styled.div`  
    position: relative;
    box-sizing: border-box;
    display: flex;
    
    section {
      width: 40%;
      overflow: hidden;
    }
  }
  ${props => (props.theme % 4 !== 0) ?
    'padding: 15px;' +
    'border-bottom: 1px solid #e9eef1;' +
    'background-size: cover;' +
    'div { width: 100%; }' +
    'section { width: 100%; height: 200px; }' +
    'flex-direction: column;'
     :
    'text-align: left; ' +
    'section { padding: 50px 0;}'
};
`;

export const SectionBody = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;

export const ImgBox = styled.div`
  padding-right: 10px;
  width: 60%;
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

