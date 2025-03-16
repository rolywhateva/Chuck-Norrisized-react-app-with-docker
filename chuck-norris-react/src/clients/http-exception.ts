export class HttpError extends Error {
  public statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.name = 'Http Error';
    this.statusCode = statusCode;
  }
}
