const { Schema, model } = require('mongoose');

const plantSchema = new Schema(
    {
        // categories: {
        //     // moved to category.js file
        //     type: String,
        //     required: true,
        //     unique: false,
        //     trim: true,
        // },
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        image: {
            // Cloudinary string
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        maintenance: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        waterneeds: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        // return many comments per user
        // comments: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'Comment'
        //     }
        // ],
        // return one category per plant
        categories: {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        },
    },
    {
        toJSON: {
            getters: true
        }
    }
);

plantSchema.virtual('commentCount').get(function () {
    return this.comments.length;
});

plantSchema.virtual('categoryCount').get(function () {
    return this.category.length;
});

const Plant = model('Plant', plantSchema);

module.exports = Plant;