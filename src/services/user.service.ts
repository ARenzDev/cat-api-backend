import UserModel, { IUser } from '../models/user.model';
import bcrypt from 'bcrypt';

/**
 * Service class for managing user operations.
 * Handles user CRUD operations, authentication, and password management.
 */
class UserService {
    /**
     * Retrieves all users from the database.
     * @returns Promise resolving to an array of user objects
     */
    public async getAllUsers(): Promise<IUser[]> {
        return await UserModel.find();
    }

    /**
     * Retrieves a user by their unique ID.
     * @param userId - The unique identifier of the user
     * @returns Promise resolving to the user object or null if not found
     */
    public async getUserById(userId: string): Promise<IUser | null> {
        return await UserModel.findById(userId);
    }

    /**
     * Creates a new user with hashed password.
     * @param userData - Partial user data including required password
     * @returns Promise resolving to the created user object
     * @throws Error if password is not provided or save operation fails
     */
    public async createUser(userData: Partial<IUser>): Promise<IUser> {
        if (!userData.password) {
            throw new Error('La contraseña es obligatoria');
        }

        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = new UserModel({
            ...userData,
            password: hashedPassword,
        });
        try {
            return await user.save();
        } catch (error) {
            throw error;
        }
    }

    /**
     * Updates an existing user by their ID.
     * @param userId - The unique identifier of the user to update
     * @param userData - Partial user data to update
     * @returns Promise resolving to the updated user object or null if not found
     */
    public async updateUser(userId: string, userData: Partial<IUser>): Promise<IUser | null> {
        return await UserModel.findByIdAndUpdate(userId, userData, { new: true });
    }

    /**
     * Deletes a user by their ID.
     * @param userId - The unique identifier of the user to delete
     * @returns Promise resolving to the deleted user object or null if not found
     */
    public async deleteUser(userId: string): Promise<IUser | null> {
        return await UserModel.findByIdAndDelete(userId);
    }

    /**
     * Finds a user by their username.
     * @param username - The username to search for
     * @returns Promise resolving to the user object or null if not found
     */
    public async findUserByUsername(username: string): Promise<IUser | null> {
        return await UserModel.findOne({ username });
    }

    /**
     * Validates user credentials by checking username and password.
     * @param username - The username to authenticate
     * @param password - The plain text password to verify
     * @returns Promise resolving to the user object if valid, null otherwise
     */
    public async validateUser(username: string, password: string): Promise<IUser | null> {
        const user = await this.findUserByUsername(username);
        if (user && (await user.comparePassword(password))) {
            return user;
        }
        return null;
    }
}

export default new UserService();
