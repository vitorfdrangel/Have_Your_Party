const UserModel = require("../models/User");

const userController = {
  create: async (req, res) => {
    try {
      const user = {
        name: req.body.name,
        password: req.body.password,
        date: req.body.date,
        city: req.body.city,
        gender: req.body.gender,
        email: req.body.email,
      };

      const response = await UserModel.create(user);

      res.status(201).json({ response, msg: "Usuário criado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await UserModel.find();

      res.json(users);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = userController;
