declare namespace NodeJS {
    interface ProcessEnv {
      readonly APP_HOST: string;
      readonly APP_PORT: number;
      readonly DATABASE_URL:string
      readonly JWT_KEY: string;
      readonly JWT_EXPIRE: string;
    }
  }