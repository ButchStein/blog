const passport = require('passport')
const { Router } = require('express')
const upload = require('../middleware/upload')
const contr = require('../controllers/post.controller')
const router = Router()

// Admin
// /api/post/admin

router.post(
  '/admin/',
  passport.authenticate('jwt', { session: false }),
  upload.single('image'),
  contr.create
)
router.get(
  '/admin/',
  passport.authenticate('jwt', { session: false }),
  contr.getAll
)
router.get(
  '/admin/:id',
  passport.authenticate('jwt', { session: false }),
  contr.getById
)
router.put(
  '/admin/:id',
  passport.authenticate('jwt', { session: false }),
  contr.update
)
router.delete(
  '/admin/:id',
  passport.authenticate('jwt', { session: false }),
  contr.remove
)
router.get(
  '/admin/get/analytics',
  passport.authenticate('jwt', { session: false }),
  contr.getAnalytics
)
// Base
// /api/post
router.get('/', contr.getAll)
router.get('/:id', contr.getById)
router.put('/add/view/:id', contr.addView)

module.exports = router