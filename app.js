const fs = require("fs"); 
fs.readFile('data.JSON','utf8',(err,data)=>{
    if(err){
        console.error(error);
        return error;
    }
    const parsed = JSON.parse(data);
    console.log(parsed["skill"])
})


// import fs module  which provides a way to interact with the file system to read and write files. its a core nodejs modfule you dont need to install it seperately
/*
'data.JSON': The name of the file to read.

'utf8': The encoding format to use when reading the file. 'utf8' ensures the file is read as a text file in UTF-8 encoding.

(err, data) => { ... }: A callback function that is executed once the file reading operation is complete.

If err is not null, an error occurred. The error is logged to the console using console.error(err).

The return; statement exits the callback function to prevent further execution.

JSON.parse(data): Converts the JSON string (data) into a JavaScript object (jsonData).

Purpose: This line logs the parsed JavaScript object (jsonData) to the console.

The code reads the data.json file asynchronously, handles any potential errors that may occur during the file reading process, parses the JSON string into a JavaScript object, and then logs the object to the console. This is a common pattern for working with file I/O operations in Node.js, ensuring non-blocking and efficient handling of file data.

*/
