const UserModel = require('./models/Users');

exports.getUsers = function (req, res) {
    UserModel.find({}, (err, result) => {
        if (err) {
            //handle error
            res.json(err);
        } else {
            //send back to frontend
            res.json(result);
        }
    })
}

exports.addUser = async function (req, res) {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.json(user);
}