import User from '../models/User'

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({
      where: {
        email: req.body.email,
      }
    });

    if(userExists) {
      return res.status(409).json({
        error: 'User already exists.', 
      });
    }

    const { id, name, email, provider } = await User.create(req.body);

    return res.status(201).json({
      id,
      name, 
      email, 
      provider,
    });
  }

  async update(req, res) {
    return res.status(204).json();
  }
}

export default new UserController();