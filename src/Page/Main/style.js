import styled from '@emotion/styled';

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.day === true
      ? `background-color: #fbab7e;
background-image: linear-gradient(180deg, #fbab7e 0%, #f7ce68 100%);
color:black;`
      : `background: rgb(1,22,46);
background: linear-gradient(180deg, rgba(1,22,46,1) 0%, rgba(1,66,109,1) 100%);
color:white;`}

  &>.title {
    font-weight: bold;
    font-size: 1.4em;
  }

  & > .gender {
    display: flex;
    align-items: center;
    margin: 30px 0;
  }
`;
