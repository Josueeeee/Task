const { userModel } = require('../models/users.model');

const postUsers = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const createUser = await userModel.create({
      name,
      email,
      password,
    });
    return res.status(201).json({
      status: 'success',
      data: {
        createUser,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const Users = await userModel.findAll();
    return res.status(200).json({
      status: 'succes',
      data: {
        Users,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  const { user } = req.user;
  const { name, email } = req.body;
  try {
    const updateUser = await user.update({
      name,
      email,
    });
    return res.status(200).json({
      status: 'succes',
      data: {
        updateUser,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteUSer = async (req, res) => {
  const { user } = req.user;
  try {
    user.update({
      status: 'disabled',
    });
    return res.status(204).json({
      message: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};
