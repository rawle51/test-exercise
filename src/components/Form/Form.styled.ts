import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const StyledForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 16px;
  gap: 32px;
  height: 40px;
`;

export const StyledFiled = styled(TextField)`
  width: 100%;
`;
