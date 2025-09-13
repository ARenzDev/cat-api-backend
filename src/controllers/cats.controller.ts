import { Request, Response } from 'express';
import { CatsService } from '../services/cats.service';

/**
 * Controller class for handling cat breed-related HTTP requests.
 * Provides endpoints for retrieving and searching cat breeds.
 */
export class CatsController {
  /**
   * Retrieves all cat breeds from the external API.
   * @param req - Express request object
   * @param res - Express response object
   */
  static async getBreeds(req: Request, res: Response) {
    try {
      const data = await CatsService.getBreeds();
      res.json(data);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Error desconocido al obtener las razas de gatos' });
      }
    }
  }

  /**
   * Retrieves a specific cat breed by its ID.
   * @param req - Express request object containing breed_id parameter
   * @param res - Express response object
   */
  static async getBreedById(req: Request, res: Response) {
    const breedId = req.params.breed_id;
    try {
      const data = await CatsService.getBreedById(breedId);
      res.json(data);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: `Error desconocido al obtener la raza con id ${breedId}` });
      }
    }
  }

  /**
   * Searches for cat breeds based on a query string.
   * @param req - Express request object containing search query parameter
   * @param res - Express response object
   */
  static async searchBreeds(req: Request, res: Response) {
    const query = req.params.q as string;
    try {
      const data = await CatsService.searchBreeds(query);
      res.json(data);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: `Error desconocido al buscar razas con la consulta ${query}` });
      }
    }
  }
}
