const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  username: {type:String, required:true},
  email: {type:String, required:true, unique:true},
  uid: {type: String, required:true, unique:true}, 
  password: {type:String,required:true}, 
  address: {type:Array, required:false},
  phone: {type:String, required:true},
  userType:{type:String, required:true, default:"Client", enum:['admin', 'Drive', 'Client', 'Vendor']},
  profile:{
    type: String,
    require:true, 
    default: 'https://avatars.githubusercontent.com/u/143475738?v=4'
  } 
},{timestamps:true}); 
module.exports = mongoose.model('User',UserSchema)