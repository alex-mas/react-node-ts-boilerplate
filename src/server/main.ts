import express from 'express';
import path from 'path';

const app  = express();

const PORT = 3000;

app.use(express.static('bin/client'));

app.get('*', (req, res) => {
    console.log(req.path);
    res.sendFile(path.resolve('./bin/client/index.html'));
});
console.log('test2');
app.listen(PORT,()=>{
    console.log('server ready at port '+ PORT);
});