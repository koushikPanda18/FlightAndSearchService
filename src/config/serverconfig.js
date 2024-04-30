//in this js file packages require stufs are done....because the main server index.js file is responsible for booting the most important piece of code,so we don't want to make this file clumsy with environt variable details


const dotenv=require("dotenv");

dotenv.config();

module.exports={
    PORT:process.env.PORT
}