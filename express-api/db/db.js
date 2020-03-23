const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017/data`);

const db = mongoose.connection;

db.once('open', () => {
  console.log('data数据库连接成功！')
});
db.on('error',console.error.bind(console, 'connection error'))