const express = require('express')
const router = express.Router()
const DB = require('../lib/db')

router.get('/', (req, res) => {
	res.render('index', {
		page_title: 'Home',
	})
})

module.exports = router
