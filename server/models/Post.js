const { Schema, model } = require('mongoose');
<<<<<<< HEAD
// const commentSchema = require('./Comment');
=======
>>>>>>> feature/experimental
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
    {
        postText: {
            type: String,
            required: 'You need to leave a plant!',
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
<<<<<<< HEAD
    //     comments: [commentSchema]
     },
=======
        comments: [{
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }]
    },
>>>>>>> feature/experimental
    {
        toJSON: {
            getters: true
        }
    }
);

<<<<<<< HEAD
// postSchema.virtual('commentCount').get(function () {
//     return this.comments.length;
// });

=======
>>>>>>> feature/experimental
const Post = model('Post', postSchema);

module.exports = Post;

