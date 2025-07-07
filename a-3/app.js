const { MongoClient } = require("mongodb")
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
async function run() {
    try{
        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db("employeeDB");
        const users = db.collection("users");
        await users.insertOne({ name: "Nina", role: "Admin" });
        console.log("User inserted");
        const allUsers = await users.find().toArray();
        console.log("All users:");
        console.log(allUsers);
    }
    catch (error) {
        console.log("Error: ", error);
    }
    finally{
        await client.close();
        console.log("Connection closed");
    }
}
run();