import React from 'react';
import styled from 'styled-components';

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const ContainerStyles = styled.div`
    height: 9px;
    width: 100%;
    background-color: white;
    border-radius: 20px;
    margin: 0;
`;

  const FillerStyles = styled.div`
    height: 100%;
    width: ${completed/12*100}%;
    background-color: #001981;
    border-radius: inherit;
    text-align: right;
    transition: 0.5s;
  `;

  return (
    <ContainerStyles>
      <FillerStyles/>
    </ContainerStyles>
  );
};

export default ProgressBar;