import {Router} from 'express';
import { signinController, signoutController, signupController } from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/sign-up', signupController);

authRouter.post('/sign-in', signinController);

authRouter.post('/sign-out', signoutController);