
export abstract class TokenService {

  abstract getToken(): string;

  abstract setToken(token: string): void;

  abstract hasToken(): boolean;

  abstract removeToken(): void;
}
