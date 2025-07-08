const express = require("express");
const router = express.Router();
const { adduser, getUsers, getUsrById } = require("../controllers/user");

router.get('/', getUsers);
router.get('/:id', getUsrById);
router.post("/", adduser);

module.exports = router;