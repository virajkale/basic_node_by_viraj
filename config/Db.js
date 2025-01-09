const mongoose= require("mongoose");

const dbConnect= async () =>{
    try {
        const connected = await mongoose.connect("mongodb+srv://vi8.mongodb.net/testingproject2");
              console.log("DB Connected Successfully");
    } catch (error) {
        console.log(`Error: ${error.message}`);
        //     process.exit(1);
    }
};


module.exports = dbConnect;

