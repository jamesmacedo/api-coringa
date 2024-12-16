import express from 'express';
import saveRoute from './routes/save';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/save', saveRoute);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

