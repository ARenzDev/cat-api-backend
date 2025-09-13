import { Request, Response } from 'express';
import { ImagesService } from '../services/images.service';

/**
 * Controller class for handling cat image-related HTTP requests.
 * Provides endpoints for retrieving images by breed ID.
 */
export class ImagesController {
  /**
   * Retrieves images for a specific cat breed by its ID.
   * @param req - Express request object containing breed_id query parameter
   * @param res - Express response object
   */
  static async getImagesByBreedId(req: Request, res: Response) {
    const breedId = req.query.breed_id as string;
    try {
      const data = await ImagesService.getImagesByBreedId(breedId);
      res.json(data);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Error desconocido al obtener las imágenes de la raza de gatos' });
      }
    }
  }
}