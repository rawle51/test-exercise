import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

import { useFetch } from '../../services/requestor.service';
import { Header } from '../Header/Header';
import {
  StyledContainer,
  StyledButton,
  StyledItem,
  StyledDeleteIcon,
  StyledList,
  StyledButtonWrapper,
} from './UrlsList.styled';
import { RoutePath } from '../../services/navigation.service';
import { UrlItem } from '../../services/sdk.service';

export const UrlsList = () => {
  const navigate = useNavigate();

  const {
    fetchData: getUrls,
    loading,
    error,
    responseData,
  } = useFetch<string, UrlItem[]>({
    url: '/urls',
    method: 'GET',
  });

  const [state, setState] = useState(responseData);

  const { fetchData: deleteUrl } = useFetch<string, UrlItem[]>({
    url: '/urls',
    method: 'DELETE',
  });

  const handleDelete = async (id: string) => {
    setState((prevState) => {
      const newState = prevState
        ? prevState?.filter((item) => item.id !== id)
        : null;

      return newState;
    });

    await deleteUrl();
  };

  useEffect(() => {
    getUrls();
  }, []);

  useEffect(() => {
    setState(responseData);
  }, [responseData]);

  return (
    <StyledContainer>
      <Header cleanup={() => setState(null)} />

      <StyledButtonWrapper>
        <StyledButton
          onClick={() => navigate(RoutePath.createUrl)}
          variant="button"
        >
          <Typography variant="body2">Create new url</Typography>
        </StyledButton>
        <StyledButton
          onClick={() => navigate(RoutePath.showUrl)}
          variant="button"
        >
          <Typography variant="body2">Find existing url</Typography>
        </StyledButton>
      </StyledButtonWrapper>

      {loading && (
        <Typography align="left" variant="body1">
          Loading
        </Typography>
      )}

      {error && <Typography variant="body1">{error}</Typography>}

      {state && (
        <StyledList>
          {state.map(({ id, shortUrl, fullUrl }) => (
            <StyledItem key={id}>
              <span>
                {fullUrl} - {shortUrl}
              </span>
              <StyledDeleteIcon onClick={() => handleDelete(id)} />
            </StyledItem>
          ))}
        </StyledList>
      )}
    </StyledContainer>
  );
};
