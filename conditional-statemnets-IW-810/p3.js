// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let reg_email= "abc@gmail.com"
let reg_password= 123456

let ent_email= "ab@gmail.com"
let ent_password= 12345

if(reg_email==ent_email){
  if(reg_password== ent_password){
    console.log("Login Successful")
  }else{
    console.log("Incorrect Password");
  }
}else{
  console.log("Wrong credentials")
}
