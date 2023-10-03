const loginService = require ('../services/loginService');
class LoginController {

  async authLogin(req,res){
    let loginData = req.body;
    
    try{
      // we generate the JWT Token if the user exist
      let token = await loginService.auth(loginData);
      res.status(200).json({
        success:true,
        message: 'Auth correct',
        data: token
      });
    }
    catch (error) {
      res.status(401).json({
        success: false,
        message: `Auth error: ${error}`
      });
    }

  }
}

module.exports = new LoginController();
