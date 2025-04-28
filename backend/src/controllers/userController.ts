import { Request, Response } from 'express';
import { AppDataSource } from 'shared-orm-library/src/data-source'; 
import { User } from 'shared-orm-library/src/entities/User';



export async function getUsers(req: Request, res: Response) {
  const userRepo = AppDataSource.getRepository(User);
  const users = await userRepo.find({ relations: ['settings'] });
  res.json(users);
}