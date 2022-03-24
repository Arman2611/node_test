
const express = require('express');
const app = express();

app.get('/', async (req, res) => {
	res.status(200).send('working...')
});

app.listen(3000, () => {
	console.log('Starting server on port 3000')
})