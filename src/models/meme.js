import mongoose from 'mongoose';
import validator from 'validator';

const memeSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },
      picture: {
        type: Buffer
      },
      category: {
        type: String,
        required: true,
        trim: true,
      },
    },
    {
      timestamps: true,
    }
  );
  
  memeSchema.methods.toJSON = function () {
    const meme = this;
    const memeObject = meme.toObject();
  
    delete memeObject.password;
  
    return memeObject;
  };
  
  /*memeSchema.pre('save', async function (next) {
    const user = this;
  
    if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8);
    }
  
    next();
  });*/
  
  const Meme = mongoose.model('Meme', memeSchema);
  
  export default Meme;
  