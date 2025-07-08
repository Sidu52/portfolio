const User = require("../models/user");
const { ErrorResponse, SuccessResponse } = require("../uttils/helper");

// Get All Users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users || users.length === 0) {
            return ErrorResponse(res, "No users found", 404);
        }
        SuccessResponse(res, users, "User fetch successfully");
    } catch (err) {
        console.error(err);
        return ErrorResponse(res, "Server error", 500);
    }
}

// Get User By ID
const getUsrById = async (req, res) => {
    try {
        const user_id = req.user;
        const user = User.findById(user_id);

        if (!user) {
            return ErrorResponse(res, "User not found", 404);
        }
        SuccessResponse(res, user, "User Detail fetch successfully")
    } catch (err) {
        console.error(err);
        return ErrorResponse(res, "Server error", 500);
    }
}

// Add User 
const adduser = async (req, res) => {
    try {
        const { email } = req.body;
        // check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return ErrorResponse(res, "User already exists", 400);
        }
        // create new user
        const newUser = new User(req.body);
        await newUser.save();
        SuccessResponse(res, newUser, "User created successfully");
    } catch (err) {
        console.error(err);
        return ErrorResponse(res, "Server error", 500);
    }
}

module.exports = { adduser, getUsers, getUsrById }