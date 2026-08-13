import mongoose from "mongoose"

export const connectDB= async()=>{
    try {
        await mongoose.connect("mongodb://anushmajk_db_user:SXh3axRq92iqJSfq@ac-u7yom2k-shard-00-00.soxlfvf.mongodb.net:27017,ac-u7yom2k-shard-00-01.soxlfvf.mongodb.net:27017,ac-u7yom2k-shard-00-02.soxlfvf.mongodb.net:27017/?ssl=true&replicaSet=atlas-10ocbg-shard-0&authSource=admin&appName=Cluster0")
        console.log("Mongodb connected sucessfully");
}
    catch(error){
        console.error(error);
        process.exit(1) //exit with failure
    }
}
