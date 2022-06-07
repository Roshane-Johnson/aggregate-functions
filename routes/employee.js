const { query } = require('express')
const express = require('express')
const router = express.Router()
const DB = require('../lib/db')

/**
 * Employee index view
 */
router.get('/', (req, res) => {
	const query = 'SELECT * FROM employees LIMIT 10000;'
	const query2 = `SELECT SUM(salary) AS total_salary,
	                COUNT(id) AS total_employees, 
					AVG(salary) AS average_salary,
					MIN(salary) AS lowest_salary,
					MAX(salary) AS highest_salary FROM employees`
	DB.query(query, (err, rows) => {
		if (err) throw err

		DB.query(query2, (err, aggregateRows) => {
			if (err) throw err

			// Formating values to currency
			aggregateRows[0].total_salary = Intl.NumberFormat('en-US', { currency: 'USD', style: 'currency' }).format(aggregateRows[0].total_salary)
			aggregateRows[0].average_salary = Intl.NumberFormat('en-US', { currency: 'USD', style: 'currency' }).format(aggregateRows[0].average_salary)
			aggregateRows[0].lowest_salary = Intl.NumberFormat('en-US', { currency: 'USD', style: 'currency' }).format(aggregateRows[0].lowest_salary)
			aggregateRows[0].highest_salary = Intl.NumberFormat('en-US', { currency: 'USD', style: 'currency' }).format(aggregateRows[0].highest_salary)

			rows.forEach((row) => {
				row.salary = Intl.NumberFormat('en-US', { currency: 'USD', style: 'currency' }).format(row.salary)
				row.bonus = Intl.NumberFormat('en-US', { currency: 'USD', style: 'currency' }).format(row.bonus)
			})

			res.render('employee/index', { page_title: 'Employees', employees: rows, aggregate: aggregateRows[0] })
		})
	})
})

/**
 * Employee add view
 */
router.get('/add', (req, res) => {
	res.render('employee/add', { page_title: 'Employee Add' })
})

/**
 * Employee add endpoint
 */
router.post('/create', (req, res) => {
	let employeeData = {
		first_nm: req.body.first_nm,
		last_nm: req.body.last_nm,
		salary: req.body.salary,
		pay_day: req.body.pay_day,
		bonus: req.body.bonus,
	}

	let sqlAdd = `INSERT INTO employees SET ?;`
	DB.query(sqlAdd, employeeData, (err, rows) => {
		if (err) throw err
		res.redirect('/employee')
	})
})

/**
 * Employee edit view
 */
router.get('/edit/:id', (req, res) => {
	// This way mes the query insecure because the info is coming directly from user to the query
	// let sqlEdit = `SELECT * FROM employees WHERE id = ${req.params.id}`
	// This way is called prepared statements and is more secured
	const sqlEdit = `SELECT * FROM employees WHERE id = ?;`
	DB.query(sqlEdit, [req.params.id], (err, rows) => {
		if (err) throw err
		res.render('employee/edit', { page_title: 'Edit', employee: rows[0] })
	})
})

/**
 * Employee edit endpoint
 */
router.post('/update/:id', (req, res) => {
	const id = req.params.id
	const data = {
		first_nm: req.body.first_nm,
		last_nm: req.body.last_nm,
		salary: req.body.salary,
		pay_day: req.body.pay_day,
		bonus: req.body.bonus,
	}
	const query = 'UPDATE employees SET ? WHERE id = ?;'

	DB.query(query, [data, id], (err, results) => {
		if (err) throw err
		res.redirect('/employee')
	})
})

/**
 * Employee delete endpoint
 */
router.get('/delete/:id', (req, res) => {
	const id = req.params.id
	let sql = `DELETE FROM employees WHERE id = ?;`
	DB.query(sql, id, (err, results) => {
		if (err) throw err
		res.redirect('/employee')
	})
})

module.exports = router
