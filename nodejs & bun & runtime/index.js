const {
    program
} = require('commander');
const { resolveTxt } = require('dns');

const fs = require('fs')

program.parse();

fs.readFile(program.args[0] ,'utf8', (err,data)=>{
    if(err){
        console.log("wrong args")
        return
    }

    const res = data.trim().split(/\s+/);
    console.log("file has words of ",res.length);
})




