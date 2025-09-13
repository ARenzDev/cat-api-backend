import fetch from 'node-fetch';

/**
 * Service class for interacting with The Cat API for images.
 * Handles API calls related to retrieving cat images.
 */
export class ImagesService {
  /**
   * Fetches images for a specific cat breed by its ID.
   * @param breedId - The unique identifier of the cat breed
   * @returns Promise resolving to an array of image objects
   * @throws Error if the API request fails
   */
  static async getImagesByBreedId(breedId: string) {
    try {
      const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, {
        headers: {
          'x-api-key': process.env.CAT_API_KEY || ''
        }
      });
      if (!response.ok) {
        throw new Error(`Error fetching images: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}
