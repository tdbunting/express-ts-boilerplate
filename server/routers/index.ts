/**
 * Routes
 */
import express, { Request, Response, NextFunction } from 'express';

// init express router
const router = express.Router();

router.route('/api/test')
  .get((req: Request, res: Response) => {
    res.json({ message: 'hello' })
  });

router.route('/api/health')
  .get((req: Request, res: Response) => {
    res.status(200).json({ status: 'ok' })
  });

export default router;