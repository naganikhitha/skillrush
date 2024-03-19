import mongoose from "mongoose";

export const dbConnection = ()=>
{
    mongoose.connect('mongodb+srv://Naganikhitha:Niki8179%40@cluster0.doav1gx.mongodb.net/?retryWrites=true',
        {
            dbName:"reservation"
        }).then(()=>
        {
        
            console.log("Connected successfully");
        }).catch((err)=>
            {
                console.log("Some error while connecting"+err);
            });
};