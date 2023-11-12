import { Global } from '@emotion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { TinyUrl } from '../TinyUrl/TinyUrl';
import { globalStyles, StyledContainer } from './App.styled';
import { Login } from '../Login/Login';
import { RoutePath } from '../../services/navigation.service';
import { UrlsList } from '../UrlsList/UrlsList';

export const App = () => {
  return (
    <StyledContainer>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <Routes>
          <Route path={RoutePath.login} Component={Login} />
          <Route path={RoutePath.home} Component={UrlsList} />
          <Route path={RoutePath.createUrl} Component={TinyUrl} />
        </Routes>
      </BrowserRouter>
    </StyledContainer>
  );
};
