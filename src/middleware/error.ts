import { NextFunction, Request, Response } from 'express';

export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  const status = Number(err.status || err.statusCode || 500);
  const body: Record<string, any> = {
    statusCode: status,
    message: err.message || 'Internal Server Error',
  };
  if (err.details) body.details = err.details;
  res.status(status).json(body);
}