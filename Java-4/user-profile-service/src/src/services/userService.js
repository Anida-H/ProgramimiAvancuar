const User = require('../models/userModel');
const { hashPassword, comparePasswords } = require('../utils/passwordUtils');
const { validateUserInput } = require('../utils/validation');

class UserService {
  static async registerUser(userData) {
    validateUserInput(userData);
    
    if (User.findByEmail(userData.email)) {
      throw new Error('Email already in use');
    }

    const hashedPassword = await hashPassword(userData.password);
    const newUser = User.create({
      ...userData,
      password: hashedPassword
    });

    return newUser.toJSON();
  }

  static async loginUser(email, password) {
    const user = User.findByEmail(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isMatch = await comparePasswords(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    // Update last login
    user.lastLogin = new Date().toISOString();
    
    return user;
  }

  static async getUserById(id) {
    const user = User.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user.toJSON();
  }

  static async updateUser(id, updateData) {
    if (updateData.password) {
      updateData.password = await hashPassword(updateData.password);
    }
    
    const updatedUser = User.update(id, updateData);
    if (!updatedUser) {
      throw new Error('User not found');
    }
    
    return updatedUser.toJSON();
  }
}

module.exports = UserService;