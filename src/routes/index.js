
const { Router } = require('express');
const { route } = require('../app');

const router = Router();

router.get('/', (req, res) =>
{
    res.json({ message: "Halo welt. I'm in a docker container" });
})

module.exports = router;