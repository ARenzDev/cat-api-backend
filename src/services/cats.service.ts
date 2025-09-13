import fetch from 'node-fetch';

/**
 * Service class for interacting with The Cat API.
 * Handles all external API calls related to cat breeds.
 */
export class CatsService {
  /** The base URL for The Cat API */
  private static readonly API_URL = 'https://api.thecatapi.com/v1';
  /** API key for authentication, retrieved from environment variables */
  private static readonly API_KEY = process.env.CAT_API_KEY || '';

  /**
   * Fetches all cat breeds from the external API.
   * @returns Promise resolving to an array of cat breed objects
   * @throws Error if the API request fails
   */
  static async getBreeds(): Promise<any> {
    const response = await fetch(`${this.API_URL}/breeds`, {
      headers: {
        'x-api-key': this.API_KEY,
      },
    });
    if (!response.ok) {
      throw new Error('Error al obtener las razas de gatos');
    }
    return response.json();
  }

  /**
   * Fetches a specific cat breed by its ID.
   * @param breedId - The unique identifier of the cat breed
   * @returns Promise resolving to the cat breed object
   * @throws Error if the API request fails
   */
  static async getBreedById(breedId: string): Promise<any> {
    const response = await fetch(`${this.API_URL}/breeds/${breedId}`, {
      headers: {
        'x-api-key': this.API_KEY,
      },
    });
    if (!response.ok) {
      throw new Error(`Error al obtener la raza con id ${breedId}`);
    }
    return response.json();
  }

  /**
   * Searches for cat breeds based on a query string.
   * @param query - The search query string
   * @returns Promise resolving to an array of matching cat breed objects
   * @throws Error if the API request fails
   */
  static async searchBreeds(query: string): Promise<any> {
    const response = await fetch(`${this.API_URL}/breeds/search?${query}`, {
      headers: {
        'x-api-key': this.API_KEY,
      },
    });
    if (!response.ok) {
      throw new Error(`Error al buscar razas con la consulta ${query}`);
    }
    return response.json();
  }
}
