import { createServer, Response } from 'miragejs';
import { LoginRequest } from './sdk.service';

export const TOKEN_ITEM = 'token-item';

export function getAuthorized(): boolean {
  return Boolean(localStorage.getItem(TOKEN_ITEM));
}

export function server() {
  createServer({
    routes() {
      this.urlPrefix = 'http://localhost:3000';

      // '/login'
      this.post('/login', (_, request) => {
        const requestBody = JSON.parse(JSON.parse(request.requestBody)) as LoginRequest;
        if (isValidLogin(requestBody)) {
          const token = 'mock-token';

          localStorage.setItem(TOKEN_ITEM, token);

          return new Response(200, {}, { token });
        } else {
          return new Response(401, {}, { error: 'Invalid credentials' });
        }
      });

      this.delete('/login', () => {
        if (!getAuthorized()) {
          return new Response(401, {}, { error: 'Unauthorized' });
        }

        localStorage.removeItem(TOKEN_ITEM);

        return new Response(200, {}, { message: 'Logged out' });
      });

      // '/urls'

      this.post('/urls', () => {
        if (!getAuthorized()) {
          return new Response(401, {}, { error: 'Unauthorized' });
        }

        return new Response(
          201,
          {},
          {
            message: 'Created',
            data: {
              id: '1',
              fullUrl: '12345',
              shortUrl: '1234',
            },
          },
        );
      });

      this.get('/urls', () => {
        if (!getAuthorized()) {
          return new Response(401, {}, { error: 'Unauthorized' });
        }

        return [
          { id: '1', shortUrl: '/mock-url-1', fullUrl: 'https://mocksite.com/page1' },
          { id: '2', shortUrl: '/mock-url-2', fullUrl: 'https://mocksite.com/page2' },
        ];
      });

      this.delete('/urls/:urlUuid', () => {
        if (!getAuthorized()) {
          return new Response(401, {}, { error: 'Unauthorized' });
        }

        return new Response(200, {}, { message: 'Deleted' });
      });
    },
  });
}

function isValidLogin(loginRequest: LoginRequest): boolean {
  return loginRequest.username === 'admin' && loginRequest.password === 'password';
}
