const UserModel = require("../models/User");

const userController = {
  create: async (req, res) => {
    try {
      const user = {
        name: req.body.name,
        password: req.body.password,
      };

      const response = await UserModel.create(user);

      res.status(201).json({ response, msg: "Usuário criado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const parties = await PartyModel.find();

      res.json(parties);
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;

      const party = await PartyModel.findById(id);

      if (!party) {
        res.status(404).json({ msg: "Festa não encontrada." });
        return;
      }

      res.json(party);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    const id = req.params.id;
    const party = await PartyModel.findById(id);

    if (!party) {
      res.status(404).json({ msg: "Festa não encontrada." });
      return;
    }

    const deletedParty = await PartyModel.findByIdAndDelete(id);

    res.status(200).json({ deletedParty, msg: "Festa excluída com sucesso!" });
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;

      const party = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        budget: req.body.budget,
        image: req.body.image,
        services: req.body.services,
      };

      if (party.services && !checkPartyBudget(party.budget, party.services)) {
        res.status(406).json({ msg: "O seu orçamento é insuficiente." });
        return;
      }

      const updateParty = await PartyModel.findByIdAndUpdate(id, party);

      if (!updateParty) {
        res.status(404).json({ msg: "Festa não encontrada." });
      }

      res.status(200).json({ party, msg: "Festa atualizada com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = partyController;
