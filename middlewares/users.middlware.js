const { userModel } = require('../models/users.model');
const UserExist = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await userModel.findOne({
      where: { id_user: id },
    });
    if (!user)
      return res.status(404).json({
        status: 'error',
        message: 'user does not exist',
      });
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  UserExist,
};
