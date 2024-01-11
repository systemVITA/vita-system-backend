import { Router } from 'express';
import Usercontrollers from '../controllers/Usercontrollers';

const router = Router();

router.post('/user/createUser',Usercontrollers.createUser);


export default router;