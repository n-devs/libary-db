

interface Error {
      name: string;
      message: string;
      stack?: string;
}

export type AnyError = Error;