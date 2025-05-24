import { users, type User, type InsertUser, insertUserSchema } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.currentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    // Validate input using the schema
    const validationResult = insertUserSchema.safeParse(insertUser);
    if (!validationResult.success) {
      throw new Error(`Invalid user data: ${validationResult.error.message}`);
    }

    // Additional business logic validation
    if (!insertUser.username || insertUser.username.trim().length === 0) {
      throw new Error("Username cannot be empty");
    }

    if (!insertUser.password || insertUser.password.length === 0) {
      throw new Error("Password cannot be empty");
    }

    // Check for duplicate username
    const existingUser = await this.getUserByUsername(insertUser.username);
    if (existingUser) {
      throw new Error("Username already exists");
    }

    const id = this.currentId++;
    const user: User = { ...validationResult.data, id };
    this.users.set(id, user);
    return user;
  }
}

export const storage = new MemStorage();
