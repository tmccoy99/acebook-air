const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');

/**
 * create a schema for Posts
 * it contains a list of the fields that you wish to have in the data
 * e.g. message: {type: String, required: true}
 */
const PostSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    message: { type: String, required: true },
    likes: {
      type: Array,
      default: [],
      required: false,
    },
    comments: {
      type: Array,
      of: { type: mongoose.Types.ObjectId, ref: 'Comment' },
      default: [],
      required: false,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
