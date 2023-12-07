import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// All userRoutes are starting with /users
app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage !!'))

app.listen(PORT, () => console.log(`Server is Running on port: http://localhost:${PORT}`));





