import express, { Router } from 'express'
import asyncErrorHandler from '../../services/asyncErrorHandler'
import courseController from '../../controller/course/courseController'
import Middleware from '../../middleware/middleware'
const courseRouter: Router = express.Router()

courseRouter.route('/institute/course').post(Middleware.isLogin, asyncErrorHandler(courseController.createCourse))



export default courseRouter