// const { Schema } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

// const Comment = new Schema(
//     {
//         commentText: {
//             type: String,
//             required: true,
//             maxlength: 280
//         },
//         username: {
//             type: String,
//             required: true
//         },
//         createdAt: {
//             type: date,
//             default: Date.now,
//             get: timestamp => dateFormat(timestamp)
//         }
//     },
//     {
//         toJSON: {
//             getters: true
//         }
//     }
// );

// const Comment = model('Comment', userSchema);

// module.exports = Comment;