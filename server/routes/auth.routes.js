const {Router} = require('express')
const {login, createUser} = require('../controllers/auth.controller')
const passport = require('passport')
const router = Router()

// path for admin routes /api/auth/admin/login
router.post('/admin/login', login)

// path for admin routes /api/auth/admin/create
router.post(
  '/admin/create',
  passport.authenticate('jwt', {session: false}),
  createUser)

module.exports = router