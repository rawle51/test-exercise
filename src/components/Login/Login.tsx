import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import {
  StyledContainer,
  StyledError,
  StyledForm,
  StyledIcon,
} from './Login.styled';
import { RoutePath } from '../../services/navigation.service';
import { useFetch } from '../../services/requestor.service';

const initialState = { username: '', password: '' };

export const Login = () => {
  const navigate = useNavigate();
  const [loginState, setState] = useState(initialState);
  const { fetchData, loading, error, responseData } = useFetch<string, unknown>(
    {
      url: `/login`,
      method: 'POST',
      data: JSON.stringify(loginState),
    },
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (responseData) {
      navigate(RoutePath.home);
    }
  }, [responseData, navigate]);

  return (
    <StyledContainer>
      <StyledIcon onClick={() => navigate(RoutePath.home)} />
      <Typography variant="h5" align="center">
        Sign in
      </Typography>
      <StyledForm onSubmit={handleSubmit}>
        <TextField
          name="username"
          onChange={handleChange}
          size="small"
          value={loginState.username}
        />
        <TextField
          type="password"
          name="password"
          onChange={handleChange}
          size="small"
          value={loginState.password}
        />
        <LoadingButton
          variant="contained"
          type="submit"
          loading={loading}
          disabled={!(loginState.username && loginState.password)}
        >
          Login
        </LoadingButton>
        <StyledError>
          <Typography variant="caption" color="error">
            {error}
          </Typography>
        </StyledError>
      </StyledForm>
    </StyledContainer>
  );
};
