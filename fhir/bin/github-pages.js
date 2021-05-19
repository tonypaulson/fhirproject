#! /usr/bin/env node
const fhirpath = require('fhirpath');
const fhirpath_r4_model = require('fhirpath/fhir-context/r4');
const fs = require('fs');
const fsPromises = fs.promises;
async function doReadFile(){
  let filehandle =null;
  try{
    filehandle = await fsPromises.open("resource-example.json",'r+');

    var data=await filehandle.readFile("utf8");
    console.log(data);

  }catch(e){
    console.log("error",e);
  }
}
doReadFile().catch((error)=>{
  console.log("Error",error)
})



var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);


