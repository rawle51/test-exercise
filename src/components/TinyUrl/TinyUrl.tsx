import { useState, ChangeEvent, FormEvent } from 'react';
import { Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';

import {
  StyledContainer,
  StyledContent,
  StyledFiled,
  StyledForm,
  StyledButton,
} from './TinyUrl.styled';
import { useFetch } from '../../services/requestor.service';
import { Header } from '../Header/Header';
import { RoutePath } from '../../services/navigation.service';
import { UrlItem } from '../../services/sdk.service';

export const TinyUrl = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const { fetchData, loading, error, responseData } = useFetch<
    string,
    { data: UrlItem }
  >({
    url: `/urls`,
    method: 'POST',
    data: value,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetchData();
    setValue('');
  };

  return (
    <StyledContainer>
      <Header />

      <StyledButton variant="button" onClick={() => navigate(RoutePath.home)}>
        <Typography variant="body2">View the urls list</Typography>
      </StyledButton>

      <StyledForm onSubmit={handleSubmit}>
        <StyledFiled
          variant="outlined"
          size="small"
          onChange={handleInputChange}
          value={value}
        />
        <LoadingButton loading={loading} type="submit" variant="contained">
          Submit
        </LoadingButton>
      </StyledForm>

      <StyledContent>
        {responseData && <div>Short url: {responseData.data.id}</div>}
        {error && (
          <Typography variant="caption" color="error">
            {error}
          </Typography>
        )}
      </StyledContent>
    </StyledContainer>
  );
};
