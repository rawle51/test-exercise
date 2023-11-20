import styled from '@emotion/styled';
import { Link } from '@mui/material';

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  background-color: #fff;
  border-radius: 8px;
  min-width: 480px;
  min-height: 340px;
  box-sizing: border-box;
`;

export const StyledButton = styled(Link)`
  align-self: flex-start;
  margin-bottom: 16px;
  cursor: pointer;
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  min-height: 32px;
`;

export const StyledResult = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  cursor: pointer;
`;
