const { Schema } = require('mongoose');

const imageSchema = new Schema(
    {
        img: {
            data: Buffer,
            type: String
        }
    }
);

const Image = model('Image', imageSchema);

module.exports = Image;