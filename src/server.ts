import express from 'express';

const app = express();

app.listen(3334, () => {

    app.get('/', (request, response) => {

        return response.json({message: 'Hello word, I´m not dead!'})



    } )

    console.log('This server started in port 3333!');

});



