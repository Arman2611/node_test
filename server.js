
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
	res.status(200).send('working...')
});

app.listen(port, () => {
	console.log('Starting server on port 3000')
})