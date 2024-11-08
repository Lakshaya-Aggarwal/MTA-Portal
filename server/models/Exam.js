import mongoose, { model } from "mongoose";

const examSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    date:{
        type: String,
        required: true
    },
    time:{
        type: String
    },
    venue:{
        type: String
    },
    type:{
        type:String
    },
    subgroup :{
        type : String
    },
    group :{
        type : String
    },
    user : {
        type : mongoose.Types.ObjectId,
        ref : "User"
    }
});



export default model("Exam", examSchema);
//users