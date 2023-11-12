import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
  }
`;

export const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('./assets/background.jpg');
  background-size: cover;
`;
