/**
 * Main API routes configuration.
 * Defines all application endpoints and maps them to their respective controllers.
 */

import { Router } from 'express';
import { CatsController } from '../controllers/cats.controller';
import { ImagesController } from '../controllers/images.controller';
import { UsersController } from '../controllers/users.controller';

// Initialize Express router
const router = Router();

// Cat breed routes
router.get('/breeds', CatsController.getBreeds); // Get all breeds
router.get('/breeds/:breed_id', CatsController.getBreedById); // Get breed by ID
router.get('/breeds/search/:q', CatsController.searchBreeds); // Search breeds by query

// Image routes
router.get('/imagesbybreedid', ImagesController.getImagesByBreedId); // Get images by breed ID

// User authentication routes
router.post('/login', UsersController.login); // User login
router.post('/register', UsersController.register); // User registration

export default router;
