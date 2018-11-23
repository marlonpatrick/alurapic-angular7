
export abstract class TokenService {

  abstract getToken(): string;

  abstract setToken(token: string): void;

  abstract removeToken(): void;

  hasToken() {
    return !!this.getToken();
  }
}
