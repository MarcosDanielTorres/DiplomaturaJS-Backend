import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/diplomatura-test-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
