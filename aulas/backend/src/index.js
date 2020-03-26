const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
//Para dizer que os resultados seram em formato JSON
app.use(express.json());
app.use(routes);

//Query params
//São parametros enviados via GET
// app.get('/users', (request, response) =>{
// 	const params = request.query;

// 	console.log(params);

// 	return response.json({
// 		evento: 'Semana OmniStack',
// 		aluno: 'Bruno Pereira de Morais Gouveia Pinto'
// 	});
// });


//Routes params
//São parametros enviados via rotas (www.site.com.br/1/bruno)
// app.get('/users/:id/:nome', (request, response) =>{
// 	const params = request.params;

// 	console.log(params);

// 	return response.json({
// 		evento: 'Semana OmniStack',
// 		aluno: 'Bruno Pereira de Morais Gouveia Pinto'
// 	});
// });


//Request params
//Utilizado para recuperar os dados do body
// app.post('/users', (request, response) =>{
// 	const body = request.body;

// 	console.log(body);

// 	return response.json({
// 		evento: 'Semana OmniStack',
// 		aluno: 'Bruno Pereira de Morais Gouveia Pinto'
// 	});
// });

app.listen(3333);