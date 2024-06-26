import History from '../Models/History.model.js';

export const getHistories = async (req, res) => {
  try {
    const response = await History.find({});
    return res.json({
      status: 200,
      data: response,
    });
  } catch (error) {
    return res.json({
      status: 500,
      error,
    });
  }
};

const getHistoryMethod = async (email) => {
  try {
    const response = await History.find({ email });

    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const getHistory = async (req, res) => {
  const { email } = req.params;
  try {
    const response = await getHistoryMethod(email);

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

export const addPurchase = async (req, res) => {
  const { email } = req.body;
  let alreadyExist = false;
  try {
    const response = await getHistoryMethod(email);
    alreadyExist = !!response;
  } catch (error) {
    return res.json({
      status: 500,
      error,
    });
  }

  try {
    const purchaseInfo = {
      purchase_id: req.body.purchase_id,
      purchase_date: req.body.purchase_date,
      product: req.body.product,
      category_product: req.body.category_product,
      amount: req.body.amount,
    };

    if (alreadyExist) {
      await History.update(
        { email },
        {
          $push: purchaseInfo,
        }
      );
    } else {
      await History.create(purchaseInfo);
    }

    return res.json({
      status: 200,
      message: 'The purchase was added successfully',
    });
  } catch (error) {
    return res.json({
      status: 500,
      error,
    });
  }
};

export const deletePurchase = async (req, res) => {
  const { email } = req.body;

  try {
    await History.deleteOne({ email });

    return res.json({
      status: 200,
      message: 'The purchase was deleted successfully',
    });
  } catch (error) {
    return res.json({
      status: 500,
      error,
    });
  }
};
