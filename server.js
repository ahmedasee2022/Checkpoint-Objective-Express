//server.js
const express = require ('express');
const app = express();
const PORT =3000;

// middleware to verify working hours
const workingHourMiddleware = (req, res, next)=>{
    const now = new Data();
    const day = now.getDay();
    const hour = now.getHours();
    if (day >= 1 && day <= 5 && hour >= 9 && hour< 17) {
        next();
    } else {
        res.send('the wetsite is only available during working hours (Monday to friday, from 9 to 17)');
    }
};
app.use(epress.static('public'));
app.use(workingHoursMiddleware);

//Routes
app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/services',(req,res)=>{
    res.render('services');
});

app.get('/contact',(req,res)=>{
    res.render('contact');
});

// Set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(PORT,()=> {
    console.log(`Server is running on port ${PORT}`);
});


