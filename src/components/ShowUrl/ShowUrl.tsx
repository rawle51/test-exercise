import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

import { Form } from '../Form/Form';
import { Header } from '../Header/Header';
import { UrlItem } from '../../services/sdk.service';
import { useFetch } from '../../services/requestor.service';
import { StyledButton, StyledContainer } from './ShowUrl.styled';

import { RoutePath } from '../../services/navigation.service';

export const ShowUrl = () => {
  const navidate = useNavigate();
  const [value, setValue] = useState('');

  const { fetchData: getUrl, loading } = useFetch<string, { data: UrlItem }>({
    url: `/urls/${1}`,
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
    </StyledContainer>
  );
};
