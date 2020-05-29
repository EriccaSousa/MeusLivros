const exprees = require('express');
const router = exprees.Router();

const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);

router.get('/', (req, res) => {
    res.send({ ok: true, usuario: req._id });
});

module.exports = router;