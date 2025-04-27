import express from 'express';
import { AppDataSource } from 'shared-orm-library/src/data-source';
import userRouter from './routes/userRoutes';

const app = express();
app.use(express.json());

AppDataSource.initialize().then(() => {
  console.log('Connected to DB');
  app.use('/users', userRouter);

  app.listen(3001, () => {
    console.log('Server running at http://localhost:3001');
  });
}).catch((error: any) => console.error('DB Connection Error', error));
