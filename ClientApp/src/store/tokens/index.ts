export interface IPersistedTokenData {
    email: string;
    token: string;
  }

const initialPersistedData = (): IPersistedTokenData | undefined => {
    return readTokenFromSessionStorage() || readTokenFromLocalStorage();
};

export const initialEmail = (): string => {
    return initialPersistedData() ? initialPersistedData()!.email : "";
};

export const initialToken = (): string => {
    return initialPersistedData() ? initialPersistedData()!.token : "";
};

export const assignTokenToSessionStorage = (email: string, token: string): void => persist(sessionStorage, email, token);
export const readTokenFromSessionStorage = (): IPersistedTokenData | undefined => read(sessionStorage);
export const removeTokenFromSessionStorage = (): void => remove(sessionStorage);

export const assignTokenToLocalStorage = (email: string, token: string): void => persist(localStorage, email, token);
export const readTokenFromLocalStorage = (): IPersistedTokenData | undefined => read(localStorage);
export const removeTokenFromLocalStorage = (): void => remove(localStorage);

const JWT_TOKEN_KEY = "jwt_token";

const persist = (storage: Storage, email: string, token: string) => {
storage.setItem(JWT_TOKEN_KEY, JSON.stringify({email, token}));
};

const read = (storage: Storage): IPersistedTokenData | undefined => {
const  json = storage.getItem(JWT_TOKEN_KEY);

if (json) {
    // catch old/unparseable tokens
    try {
    const parsed = JSON.parse(json);
    if (parsed.token) {
            return parsed as IPersistedTokenData;
    }
    } catch (err) {
    // no op - let it fall through
    }
}

return undefined;
};

const remove = (storage: Storage) => {
storage.removeItem(JWT_TOKEN_KEY);
};
