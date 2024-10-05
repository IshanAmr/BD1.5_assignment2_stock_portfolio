const express = require('express');
const { resolve } = require('path');

const app = express();
const cors=cors();
app.use(cors());
const port = 3000;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(`Welcome to the stock portfolio analysis API`);
});

app.get('/calculate-returns', (req,res)=> {
   let boughtAt=parseFloat(req.query.boughtAt);
   let marketPrice=parseFloat(req.query.marketPrice);

   let result=(marketPrice-boughtAt)*2;
   res.send(result.toString());
})

app.get('/total-returns', (req,res)=> {
    let stock1=parseFloat(req.query.stock1);
    let stock2=parseFloat(req.query.stock2);
    let stock3=parseFloat(req.query.stock3);
    let stock4=parseFloat(req.query.stock4);

    let result=stock1+stock2+stock3+stock4;
    res.send(result.toString());
})

app.get('/calculate-return-percentage', (req,res)=> {
    let boughtAt=parseFloat(req.query.boughtAt);
    let returns=parseFloat(req.query.returns);
    let result =((boughtAt-returns)/boughtAt)*100;
    res.send(result.toString());
})

app.get('/total-return-percentage', (req,res)=> {
    let stock1=parseFloat(req.query.stock1);
    let stock2=parseFloat(req.query.stock2);
    let stock3=parseFloat(req.qeury.stock3);
    let stock4=parseFloat(req.query.stock4);

    let result=stock1+stock2+stock3+stock4;
    res.send(result.toString());
})

app.get('/status', (req, res)=> {
   let returnPercentage=parseFloat(req.query.returnPercantage);
   let result;
   if(returnPercentage>0) result='Profit';
   else result='Loss';

   res.send(result.toString());
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
