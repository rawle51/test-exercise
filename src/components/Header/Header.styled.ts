import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 32px;
  margin-bottom: 32px;
  border-bottom: 1px solid;
`;

export const StyledLogout = styled.span`
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
