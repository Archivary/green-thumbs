const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
    {
        categories: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },
    },
    {
        toJSON: {
            getters: true
        }
    }
);


const Category = model('Category', categorySchema);

module.exports = Category;