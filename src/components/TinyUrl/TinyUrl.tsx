import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';

import {
  StyledContainer,
  StyledContent,
  StyledFiled,
  StyledForm,
  StyledButton,
  StyledResult,
} from './TinyUrl.styled';
import { useFetch } from '../../services/requestor.service';
import { Header } from '../Header/Header';
import { RoutePath } from '../../services/navigation.service';
import { UrlItem } from '../../services/sdk.service';
import { Form } from '../Form/Form';

export const TinyUrl = () => {
  const [value, setValue] = useState('');
  const [copyState, setCopyState] = useState(false);
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

  const copyText = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopyState(true);
      })
      .catch((err) => {
        console.error('Unable to copy:', err);
      });
  };

  useEffect(() => {
    if (copyState) {
      let timerId = setTimeout(() => setCopyState(false), 2000);

      return () => clearTimeout(timerId);
    }
  }, [copyState]);

  return (
    <StyledContainer>
      <Header />

      <StyledButton variant="button" onClick={() => navigate(RoutePath.home)}>
        <Typography variant="body2">View the urls list</Typography>
      </StyledButton>

      <Form
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        value={value}
        loading={loading}
      />

      <StyledContent>
        {responseData && (
          <StyledResult onClick={() => copyText(responseData.data.shortUrl)}>
            Short url: {responseData.data.shortUrl}
            {copyState ? (
              <>
                <DoneIcon color="success" />
                <Typography color="green">Copied</Typography>
              </>
            ) : (
              <ContentCopyIcon />
            )}
          </StyledResult>
        )}
        {error && (
          <Typography variant="caption" color="error">
            {error}
          </Typography>
        )}
      </StyledContent>
    </StyledContainer>
  );
};
