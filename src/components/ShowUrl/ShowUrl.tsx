import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

import { Form } from '../Form/Form';
import { Header } from '../Header/Header';
import { UrlItem } from '../../services/sdk.service';
import { useFetch } from '../../services/requestor.service';
import { StyledButton, StyledContainer, StyledResult } from './ShowUrl.styled';

import { RoutePath } from '../../services/navigation.service';
import { EXAMPLE_URL } from '../../services/serverMock.service';

export const ShowUrl = () => {
  const navidate = useNavigate();
  const [value, setValue] = useState('');

  const requestValue = value === EXAMPLE_URL ? 1 : 2;

  const {
    fetchData: getUrl,
    loading,
    responseData,
    error,
  } = useFetch<string, { data: string }>({
    url: `/urls/${requestValue}`,
    method: 'GET',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await getUrl();
    setValue('');
  };

  return (
    <StyledContainer>
      <Header />

      <div>
        <StyledButton onClick={() => navidate(RoutePath.home)} variant="button">
          <Typography variant="body2">View the urls list </Typography>
        </StyledButton>
      </div>
      <Form
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        value={value}
        loading={loading}
        buttonName="Get url"
      />
      {responseData && !error && (
        <StyledResult>
          <Typography>{responseData.data}</Typography>
        </StyledResult>
      )}
      {error && (
        <StyledResult>
          <Typography color="error">{error}</Typography>
        </StyledResult>
      )}
    </StyledContainer>
  );
};
