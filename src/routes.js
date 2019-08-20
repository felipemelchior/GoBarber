import { Router } from 'express';
import User from './app/models/user';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Felipe Melchior',
    email: 'fehmel@gmail.com',
    password_hash: '123123',
  });

  return res.json(user);
});
export default routes;
