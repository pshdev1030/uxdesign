import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const dayColor = '#212121';
const nightColor = 'white';
const nightButtonColor = 'white';
const dayButtonColor = '#212121';

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.day === 'true'
      ? `background-color: #fbab7e;
background-image: linear-gradient(180deg, #fbab7e 0%, #f7ce68 100%);
color:${dayColor};`
      : `background: rgb(1,22,46);
background: linear-gradient(180deg, rgba(1,22,46,1) 0%, rgba(1,66,109,1) 100%);
color:${nightColor};`}

  & .title {
    font-weight: bold;
    font-size: 1.4rem;
  }

  & > .gender {
    display: flex;
    align-items: center;
    margin: 30px 0;
  }
`;

export const Temp = styled.span`
  font-weight: bold;
  font-size: 2em;
`;

export const Button = styled(Link)`
  background: none;
  border: 3px solid #fff;
  border-radius: 5px;
  ${(props) =>
    props.day === 'true'
      ? `color: ${dayColor};border: 3px solid ${dayColor};`
      : `color: ${nightColor};border: 3px solid ${nightColor};`}
  display: block;
  font-size: 1em;
  font-weight: bold;
  margin: 1em auto;
  padding: 0.5em 1.5em;
  position: relative;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    ${(props) =>
      props.day === 'true'
        ? `color: white;
    background: ${dayButtonColor};`
        : `color: black;
    background: ${nightButtonColor};`}
  }
`;

export const Select = styled.select`
  border: none;
  padding: 0.2rem;
  border-radius: 5px;
`;
