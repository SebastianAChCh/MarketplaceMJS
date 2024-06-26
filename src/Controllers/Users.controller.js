import Users from '../Models/Users.model.js';

export const getUsers = async (req, res) => {
  try {
    const response = await Users.find({});
    if (response) {
    }
    return res.json({
      status: 200,
      data: response ? response : 'There are not users yet',
    });
  } catch (error) {
    return res.json({
      status: 500,
      error,
    });
  }
};

export const createUser = async (req, res) => {
  try {
    await Users.create(req.body);
    return res.json({
      status: 200,
      message: 'User created successfully',
    });
  } catch (error) {
    return res.json({
      status: 500,
      error,
    });
  }
};

export const getUser = async (req, res) => {
  const { email } = req.params;
  try {
    const response = await Users.findOne({
      email,
    });

    return res.json({
      status: 200,
      response: response ? response : 'That user does not exist',
    });
  } catch (error) {
    return res.json({
      status: 500,
      error,
    });
  }
};

export const editUser = async (req, res) => {
  const { email } = req.body;
  const userInfo = req.body;

  try {
    const response = await Users.updateOne(
      { email },
      {
        $set: userInfo,
      }
    );

    return res.json({
      status: 200,
      response,
    });
  } catch (error) {
    return res.json({
      status: 500,
      error,
    });
  }
};

export const deleteUser = async (req, res) => {
  const { email } = req.body;

  try {
    await Users.deleteOne({ email });

    return res.json({
      status: 200,
      message: 'user deleted successfully',
    });
  } catch (error) {
    return res.json({
      status: 500,
      error,
    });
  }
};
