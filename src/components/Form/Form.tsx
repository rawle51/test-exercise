import { ChangeEvent, FormEvent } from 'react';
import { LoadingButton } from '@mui/lab';

import { StyledForm, StyledFiled } from './Form.styled';

interface Formprops {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  loading: boolean;
  buttonName?: string;
}

export const Form = ({
  handleSubmit,
  handleInputChange,
  value,
  loading,
  buttonName = 'Submit',
}: Formprops) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFiled
        variant="outlined"
        size="small"
        onChange={handleInputChange}
        value={value}
      />
      <LoadingButton
        loading={loading}
        type="submit"
        variant="contained"
        disabled={!value}
      >
        {buttonName}
      </LoadingButton>
    </StyledForm>
  );
};
