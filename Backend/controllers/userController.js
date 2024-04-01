const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");
// @desc Register a new user
const registerUser =asyncHandler(async (req,res)=>{
    const {name,email,password,pic } = req.body;
 //if no name or email or password is entered then we will throw an error
    if(!name || !email || !password){
        res.status(400);
        throw new Error("Please fill all the fields");
    }
    //we will check if the user already exists
    const userExists = await User.findOne({email});
    //if user exists then we will throw an error
    if(userExists){
        res.status(400);
        throw new Error("User ALready Existes");
    }
    //if user does not exist then we will create a new user
    const user = await User.create({
        name,
        email,
        password,
        pic, 
    });
    //if user is created successfully then we will send the response
    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            //we will generate a token for the user why because when the user registers we want to keep the user logged in
            token:generateToken(user._id),
        });
    }
    //if this fails then we will throw an error
    //user not found failed to create user
    else{
        res.status(400);
        throw new Error("User not found failed to create user");
    }

}) ;

const authUser = asyncHandler(async (req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(user && (await user.matchPassword)){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token:generateToken(user._id),
        })
    }
})
const allUsers = asyncHandler(async (req,res)=>{    
    const users = await User.find({});
    res.json(users);
}
)

module.exports = {registerUser,authUser};