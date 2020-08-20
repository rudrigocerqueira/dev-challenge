const express = require('express');
const app = express();


app.use(express.json());




app.post('/Login', (request, response)=>{
    if(request.body.user === 'rodrigo' && request.body.pwd === '123456'{

        const id = 1;
        var token = jwt.sign({id}, process.env.SECRET, {
            expiresIn: 300
        });

        response.status(200).send({auth: true, toke: token});

    }
    response.status(500).send('Login inválido!');
})

app.get('/employer', (request, response)=>{
    return response.json(
        {
            "employer_name": "Academia Jedi",
            "employer_code": "4FqeyPrcbGNX",
            "member_count": 5,
            "thumbnail": "https://qrpoint.com.br/wp-content/uploads/2018/12/cropped-MarcaVertical-03-1.png",
            "register_date": "04/09/2019"
             });
             
});

app.post('/check-pin', (request, response) =>{
    return response.json(
        [
            {
                "pin_code": "12345"
            },
            {
                "member_name": "Lucas Skywalker",
                "member_code": 1,
                "member_personal_data": {
                    "father": "Anaquim Skywalker",
                    "mother": "Pâmela Amidala",
                    "hand": false
                },
                "thumbnailHd": "https://qrpoint.com.br/wp-content/uploads/2018/12/cropped-MarcaVertical-03-1.png",
                "birthday": "04/05/1999"
             }
        ]
   );
         
});

app.post('/submit-medical-license', (request, response) =>{
    return response.json(
        {
            "initial_date": "01/10/2019",
            "final_date": "03/10/2019",
            "time": 65,
            "member_code": 1
        });
});

app.get('/medical-licenses', (request, response) =>{
    return response.json(
        [
            {
                "initial_date": "01/10/2019",
                "final_date": "03/10/2019",
                "time": 65
            },
            {
                "inicial_date": "05/09/2019",
                "end_date": "05/10/2019",
                "time": 480
            }
        ]
    )
})


app.listen(3333, () =>{
    console.log("✔ Servidor iniciado na porta 3333 http://localhost:3333/");
});