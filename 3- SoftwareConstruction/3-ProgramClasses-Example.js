import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    id:{
        type:int,
        require:true,
        unique:true,
    },
    login:{
        type:String,
        require:true,
        unique:true,
        },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    photo:{
        type:String,
        require:true,
    }
);

const ComposeListScheme = new Schema({
    genre:{
        type:String,
        require:true,
    }
);

const ComposeInfoScheme = new Schema({
    name:{
        type:String,
        require:true,
    },
    author:{
        type:String,
        require:true,
    },
   rate:{
        type: Number,
        require:true,
   },
   info:{
        type:String,
        require:true,
   },
   words: {
        type:String,
        require:true,
   },
   notes: {
        type:String,
        require:true,
   }
);

const RecomendImprovementScheme = new Schema({
    text:{
        type:String,
        require:true,
        unique:true,
    }
);

class Api {
  constructor(protocol, ver, key, address) {
    this.protocol = protocol;
    this.version = ver;
    this._key = key;
    this.address = address;
  }
}
