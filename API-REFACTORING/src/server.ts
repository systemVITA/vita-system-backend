import Express, { NextFunction, Request, Response } from 'express';
import Usercontrollers from './controllers/Usercontrollers';
import Dadoscontrollers from './controllers/Dadoscontrollers';
import router from './routes';

const app = Express();
app.use(Express.json());
const PORT = 8000;

app.get('/', (req, res) => {
    return res.send({ message: 'hello world' });
});

app.use(router);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof Error) {
        return res.status(500).json({
            status: 'Error',
            message: error.message,
        });
    }

    return res.status(500).json({
        status: 'Error',
        message: 'Internal Server Error',
    });
});

app.post('/createUser', Usercontrollers.createUser);
app.post('/createDados', Dadoscontrollers.createDados);
app.get('/listDados/:id', Dadoscontrollers.listDados);
app.put('/updateDados', Dadoscontrollers.updateDados);
app.delete('/deleteDados', Dadoscontrollers.deleteDados);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
