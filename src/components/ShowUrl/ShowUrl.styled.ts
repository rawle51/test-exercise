import styled from '@emotion/styled';
import { Link } from '@mui/material';

export const StyledContainer = styled.div`
  min-width: 480px;
  min-height: 340px;
  background-color: #fff;
  border-radius: 8px;
  padding: 32px;
  box-sizing: border-box;
`;

export const StyledButton = styled(Link)`
  display: block;
  margin-bottom: 16px;
  cursor: pointer;
`;

export const StyledResult = styled.div`
  margin-top: 16px;
`;
