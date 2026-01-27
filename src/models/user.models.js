import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            required : true,
            unique : true
        },

        email : {
            type : String,
            required : true,
            unique : true
        },

        password : {
            type : String,
            required : true
        },

        fullName : {
            type : String,
            required : true
        },

        profilePicture : {
            type : String,
            default : ''
        },

        coverPicture : {
            type : String,
            default : ''
        },

        followers : {
            type : [mongoose.Schema.Types.ObjectId],
            ref : 'User',
            default : [],
        },
        following : {
            type : [mongoose.Schema.Types.ObjectId],
            ref : 'User',
            default : [],

        },

        watchHistory : {
            type : [mongoose.Schema.Types.ObjectId],
            ref : 'Video',
            default : []
        },

    }, {timestamps : true}
);

export const user = mongoose.model('User', userSchema);