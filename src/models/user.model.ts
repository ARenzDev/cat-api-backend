import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

/**
 * Interface defining the structure of a User document in MongoDB.
 * Extends Mongoose Document for database operations.
 */
export interface IUser extends Document {
    /** User's full name */
    name: string;
    /** User's identification number (unique) */
    identification: string;
    /** User's email address (unique) */
    email: string;
    /** User's age in years */
    age: number;
    /** User's login username (unique) */
    username: string;
    /** User's hashed password */
    password: string;
    /** Method to compare a candidate password with the stored hash */
    comparePassword(candidatePassword: string): Promise<boolean>;
}

/**
 * Mongoose schema definition for User model.
 * Defines the structure and validation rules for user documents.
 */
const UserSchema: Schema<IUser> = new Schema({
    name: { type: String, required: true },
    identification: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

/**
 * Instance method to compare a candidate password with the stored hash.
 * Uses bcrypt for secure password comparison.
 */
UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
    return await bcrypt.compare(candidatePassword, this.password);
};

/**
 * Mongoose model for User collection.
 * Provides database operations for user documents.
 */
const UserModel = mongoose.model<IUser>('User', UserSchema);
export default UserModel;
