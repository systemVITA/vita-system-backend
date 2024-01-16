import { Router } from 'express';
import Usercontrollers from '../controllers/Usercontrollers';
/* import AuthController from '../controllers/AuthController';
 */
const router = Router();

router.post('/user/createUser',Usercontrollers.createUser);
/* router.post('/user/session', AuthController.authUser);

 */
export default router;