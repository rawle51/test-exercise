import styled from '@emotion/styled';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  background-color: #fff;
  border-radius: 8px;
  min-width: 480px;
  min-height: 340px;
  box-sizing: border-box;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const StyledIcon = styled(ArrowBackIcon)`
  position: absolute;
  display: block;
  content: '';
  top: 16px;
  left: 16px;
  cursor: pointer;
  fill: black;
`;

export const StyledError = styled.div`
  display: flex;
  align-items: center;
  min-height: 32px;
`;
