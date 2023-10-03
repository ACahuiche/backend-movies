const express = require('express');
const modelLogin = require('../models/loginModel');

class AuthService {
  auth(loginData){
    modelLogin.find({userName: loginData.user, passwoord: loginData.password},(error,userlogin)=>{
      if(error){
        throw new Error (error);
      }
      else {
        if (userlogin.length == 0){
          throw new Error ("No user was found, verify your username and password");
        }
        else {
          //Here the JWT is generated and returned to the controller
        }
      }
    });
  }
}

module.exports = new AuthService();
