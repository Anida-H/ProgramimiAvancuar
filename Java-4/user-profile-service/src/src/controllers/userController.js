const UserService = require('../services/userService');

class UserController {
  static async register(req, res) {
    try {
      const newUser = await UserService.registerUser(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async getCurrentUser(req, res) {
    try {
      const user = await UserService.getUserById(req.userId);
      res.json(user);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  static async getUserById(req, res) {
    try {
      const user = await UserService.getUserById(req.params.id);
      res.json(user);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  static async updateUser(req, res) {
    try {
      const updatedUser = await UserService.updateUser(req.params.id, req.body);
      res.json(updatedUser);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = UserController;