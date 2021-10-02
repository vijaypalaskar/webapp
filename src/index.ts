import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { connect } from './db';
import path from 'path';
const app = express();
const PORT = process.env.PORT;
import routes from './Hotel';
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist/webapp'));
app.get('/*', (req, res, next) => {
    res.sendFile(path.resolve('dist/webapp/index.html'));
});

app.use('/api/hotel', routes);

app.listen(PORT, () => {
    // connect();
    console.log(`server listening on PORT: ${PORT}`);
});
