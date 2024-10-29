import { NextFunction, Request, Response } from 'express' 
export function myMiddleware(req: Request, res: Response, next: NextFunction) {
  req.user_id = "123456"
  console.log("passou pelo middleware")
  return next()
}