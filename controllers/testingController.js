class TestingController {
  validateAuthToken(req,res){
    res.status(200).json({
      success:true,
      message: `If you see this message it means that the JWT test is successful`
    }); 
  }
}

module.exports = new TestingController();