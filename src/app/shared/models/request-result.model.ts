export enum RequestResultType {
  ERROR,
  SUCCESS
}

export interface RequestResult {
  type: RequestResultType;
  message: string;
}
