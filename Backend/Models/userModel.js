const mongoose = require("mongoose")
const bcrypt = require('bcryptjs');
const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    pic:{
        type:String,
        default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
},
{timestamps:true}
)
//this will be a method to compare the password entered by the user and the password stored in the database
//we will use bcryptjs to compare the passwords
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}


//this will run before saving the password in the database and will encrypt the password
//using bcryptjs
userSchema.pre('save',async function(next){
    //if the password is not modified then we will move to the next middleware and not encrypt the password
if(!this.isModified){
    // next is a function that will move to the next middleware
    next();

}
// we will generate a salt and then hash the password
const salt = await bcrypt.genSalt(10);
//we will hash the password and then save it in the database to keep it secure
this.password = await bcrypt.hash(this.password,salt);
});
const User= mongoose.model("User",userSchema);
module.exports= User;