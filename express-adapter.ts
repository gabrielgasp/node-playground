import express, { Request, Response, NextFunction } from 'express';

const expressApp = express();

type ExpressHandler = (req: Request, res: Response, next: NextFunction) => void;

class app {
  static route(endpoint: string) {
    const route = expressApp.route(endpoint);

    return {
      get: (...handlers: ExpressHandler[]) => route.get(...handlers),
      post: (...handlers: ExpressHandler[]) => route.post(...handlers),
      put: (...handlers: ExpressHandler[]) => route.put(...handlers),
      delete: (...handlers: ExpressHandler[]) => route.delete(...handlers)
    };
  }
}

app.route('/')
  .get(
    (req, res, next) => {
      console.log('GET /');
      next();
    },
    (req, res) => res.send('Hello World!')
  );
