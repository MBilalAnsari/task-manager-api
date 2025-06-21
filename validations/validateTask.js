import { body } from 'express-validator';

export const taskValidationRules = [
  body('title')
    .exists({ checkFalsy: true }).withMessage('Title is required').bail()
    .isString().withMessage('Title must be a string').bail()
    .isLength({ min: 1 }).withMessage('Title cannot be empty').bail()
    .isLength({ max: 50 }).withMessage('Title must be under 50 characters').bail(),

  body('description')
    .optional()
    .isString().withMessage('Description must be a string').bail()
    .isLength({ max: 300 }).withMessage('Description must be under 300 characters').bail(),
];
