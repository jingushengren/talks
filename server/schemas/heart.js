'use strict';

const mongoose = require('mongoose');

// 心里话对象
let HeartSchema = new mongoose.Schema({
  userid : String,
  userimg :  String,
  nickname : String,
  content : String ,
  writetime : {type:Date , default:Date.now()},
  location : String,
  writeimgs : Array,
  vedio:Array,
  audio:Array,
  agree : {type:Number , default:0},
  transmit : {type:Number , default:0},
  commentnum : {type:Number , default:0},
  browsenum : {type:Number , default:0},
  collectionnum :{type:Number , default:0},
  freeze : {type:Number , default:0},
  issee : {type:Number , default:0}
});

HeartSchema.statics = {
  findByUserid: function(userid , start , pagesize){
    return this
          .find({userid: userid , freeze : 0})
          .sort({writetime: -1 })
                .limit(pagesize)
                .skip(start);
  },
  findByUserids: function(userids , start , pagesize){
    return this
          .find({userid: {$in: userids } , freeze : 0})
          .sort({writetime: -1 })
                .limit(pagesize)
                .skip(start);
  },
  findById: function(heartid){
    return this
          .findOne({_id: heartid})
          .sort({writetime: -1 });
  },
  findByIds: function(heartids){
    return this
          .find({_id: { $in:heartids} , freeze : 0})
          .sort({writetime: -1 });
  },
  findByFreeze: function(freeze , start , pagesize){
    return this
             .find({freeze : freeze})
             .sort({writetime: -1 })
             .limit(pagesize)
             .skip(start);
  },
  fetch: function(start , pagesize){
    return this
             .find()
             .sort({writetime: -1 })
             .limit(pagesize)
             .skip(start);
  },
  findFreeze : function(freeze){
    return this
             .find({freeze : freeze})
             .count();
  }
};

module.exports = HeartSchema;