
const express = require("express");

const app = express()

let segundos = 0;
let minutos = 0;

app.get("/iniciar", (req, res) => {

    

    function seg() {



        if (segundos == 60) {
        segundos = 0;
        minutos++;
        } else {            
            segundos++ 
        }
        
    }

res.send(`Tempo atual do cronômetro: ${minutos} minutos e ${segundos} segundos`);

     
const intervalId = setInterval(seg,1000) 
    
    
    
});

// clearInterval()


app.listen(8000);