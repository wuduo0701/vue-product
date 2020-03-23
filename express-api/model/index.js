const mongoose = require('mongoose');
//Schema数据结构
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

const dataSchema = new Schema({
  id: ObjectId,
  name: String,
  age: Number,
  address: String,
  sex: String,
})

const data = mongoose.model('data', dataSchema);
//向外导出
module.exports = { data}