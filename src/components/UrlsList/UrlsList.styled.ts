import styled from '@emotion/styled';
import Link from '@mui/material/Link';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

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

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`;

export const StyledDeleteIcon = styled(DeleteOutlineIcon)`
  cursor: pointer;
`;
