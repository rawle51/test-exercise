import { useNavigate } from 'react-router-dom';

import { RoutePath } from '../../services/navigation.service';
import { useFetch } from '../../services/requestor.service';
import { getAuthorized } from '../../services/serverMock.service';
import { Logo } from '../Logo/Logo';
import { StyledContainer, StyledLink, StyledLogout } from './Header.styled';

export const Header = ({ cleanup }: { cleanup?: () => void }) => {
  const isAuthorized = getAuthorized();
  const navigate = useNavigate();

  const { fetchData: logout } = useFetch<string, unknown>({
    url: `/login`,
    method: 'DELETE',
  });

  const handleLogout = async () => {
    await logout();
    cleanup?.();
    navigate(RoutePath.home);
  };

  return (
    <StyledContainer>
      <Logo />
      {isAuthorized ? (
        <StyledLogout onClick={handleLogout}>Logout</StyledLogout>
      ) : (
        <StyledLink to={RoutePath.login}>Sign in</StyledLink>
      )}
    </StyledContainer>
  );
};
