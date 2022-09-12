import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const postSchema = new Schema({
    teamName: {
        type: String,
        required: true,
    },

    willingToTrade: {
        type: String,
        required: true,
    },

    wantToReceive: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Posts", postSchema);
