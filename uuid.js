// crypto, available from v14.17.0+ is the new standard for generating a UUID
//it requires no installation in our case.
//generates cryptographically strong version  4 UUIDs without external dependencies.
// const crypto = require("crypto") //if you want to;

const myUUID = crypto.randomUUID()
console.log(myUUID)

const uuid = crypto.randomUUID()
console.log(uuid)


// uuid must be installed ~ npm install uuid

// FOR ECMASCRIPT6
// import { v4 as uuidv4 } from 'uuid';
// const myuuid = uuidv4();
// console.log(`Your UUID is: ${myuuid}`);
// // console.log(Math.random()*100)

const {v4: uuidv4, NIL} = require("uuid");
const myuuid = uuidv4();
console.log(`Your UUID is: ${myuuid}`);


// console.log(parseInt(Math.random()*100))


const {v1: uuidv1} = require("uuid")
const timestampUUID = uuidv1()
console.log(timestampUUID)

// other versions (v3, v5) v3 ~ name-based , MD5 : v5 ~ name-based, SHA-1

//PRACTICE ALL THE WAY

//NIL ~ zeros
const {NIL: NIL_UUID} = require("uuid");
console.log(NIL_UUID)

// MAX ~ max UUID string 
const {MAX: MAX_UUID} = require("uuid")
console.log(MAX_UUID)

//parse ~ convert UUID string to array of bytes
const {parse: uuidParse} = require("uuid")
console.log(uuidParse("fe687c00-1cfd-11f1-a28d-8733aaab0858"))

//stringify ~ convert array of bytes to UUID string uuid.stringify(arr[,offset]) offset[number starting index in the array]
const {stringify: uuidStringify} = require("uuid")
console.log(uuidStringify([
  254, 104, 124,   0,  28, 253,
   17, 241, 162, 141, 135,  51,
  170, 171,   8,  88
]))

//To generate an array 
const arr = Uint8Array.of(
    0x10,
    0x91,
    0x56,
    0xbe,
    0xc4,
    0xfb,
    0xc1,
    0xea,
    0x71,
    0xb4,
    0xef,
    0xe1,
    0x67,
    0x1c,
    0x58,
    0x36
  )
//Then you can apply the methods above

//You can convert any uuid version to another v1ToV6 vToV1
const {v1ToV6} = require("uuid")
console.log(v1ToV6('92f62d9e-22c4-11ef-97e9-325096b39f47'))

//VALIDATION 
const {validate: validateUUID} = require("uuid")
console.log(validateUUID('fe687c00-1cfd-11f1-a28d-8733aaab0858'))
console.log(validateUUID('123456789'))

  //version
const {version: validateUUIDVersion} = require("uuid")
console.log(validateUUIDVersion('fe687c00-1cfd-11f1-a28d-8733aaab0858'))

//You can choose to do both
function validateuuidv1 (uuid) {
    return validateUUID(uuid) && validateUUIDVersion(uuid) === 1
}
console.log(validateuuidv1('fe687c00-1cfd-11f1-a28d-8733aaab0858'))

//CL ~ uuid can be generated from the command line using default  version -- 4

// npx uuid

//npx uuid --help