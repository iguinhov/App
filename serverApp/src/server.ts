import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))



//app.get('/users/:id', (request, response) => {
   // const id = Number(request.params.id);

    //const user = users[id];

    //return response.json(user)



//}) 



app.listen(3333);