import History from '../Models/History.model.js';

export const getHistories = async (req, res) => {
  try {
    const response = await History.find({});
    return res.json({
      status: 200,
      data: response.length > 0 ? response : 'there are not values yet',
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
    alreadyExist = response.length > 0;
  } catch (error) {
    return res.json({
      status: 500,
      error,
    });
  }

  const purchaseInfo = {
    purchase_id: req.body.purchases[0].purchase_id,
    purchase_date: req.body.purchases[0].purchase_date,
    product: req.body.purchases[0].product,
    category_product: req.body.purchases[0].category_product,
    amount: req.body.purchases[0].amount,
  };

  try {
    if (alreadyExist) {

      const response = await History.find({ email });
      const purchasesArr = Array(response[0].purchases);
      const itExist = purchasesArr[0].some(purchase => purchase.purchase_id == req.body.purchases[0].purchase_id);

      if (itExist) {
        return res.json({
          status: 200,
          message: 'The id of that purchase already exist',
        });
      }

      await History.updateOne({ email }, { $push: { purchases: purchaseInfo, } });
    } else {
      await History.create(req.body);
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

export const deleteHistory = async (req, res) => {
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
