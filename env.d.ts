declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: number;
    USER: string;
    HOST: string;
    PASSWORD: string;
    DATABASE_PORT: number;
  }
}
