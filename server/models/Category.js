const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
    {
        name: {
            type: String,
            // required: true,
            unique: false,
            trim: true,
        },
<<<<<<< HEAD
    }
=======
    },
>>>>>>> feature/experimental
);


const Category = model('Category', categorySchema);

module.exports = Category;