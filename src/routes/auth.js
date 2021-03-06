import express from 'express';
import user from '../models/user';
const router = express.Router();
router.post('/',(req, res)=>{
  const{credentials} =req.body;
  User.findOne({email: credentials.email}).then(user=>{
    if(user){
    res.json({success:true});
    }else{
     res.status(400).json({errors:{global:"invalid credentials"}});
    }
  });
});

export default router;
