const { Router } = require('express');
const router = Router();

// const { postTweet } = require('../services/x.service');

router.get('/', (req, res) => {
	// const result = await postTweet('Hello World');
	// res.send(result);

	res.send('Hello World');
});

module.exports = router;
