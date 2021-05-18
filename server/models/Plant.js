const { Schema, model } = require('mongoose');

const plantSchema = new Schema(
    {
        plantname: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        planttype: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        season: {
            // which type to choose for seasons?
            type: String,
            required: true,
            unique: false,
            trim: true,
        },
        highmaintenance: {
            // which type to choose for low or high maintenance?
            type: Boolean,
            required: true,
        },
        waterneeds: {
            // which type to choose for water needs?
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        // upload photos to cloudinary and then in seed file, upload link to cloudinary
        //shop shop
        // image: [imageSchema],
        comments: [commentSchema]
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

const Plant = model('Plant', plantSchema);

module.exports = Plant;