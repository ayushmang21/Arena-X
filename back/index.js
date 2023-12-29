const express = require('express');
const cors = require('cors');
const UserRouter = require('./routers/userRouter')

const port = 5000;

const app = express();

app.use(express.json());
app.use(cors({ origin: ['http://localhost:5174'] }));
app.use( '/user', UserRouter );



app.listen(port, () => {console.log('Server Started..!!');})