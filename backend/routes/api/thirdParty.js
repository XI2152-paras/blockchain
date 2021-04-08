const express = require('express');
const {check, validationResult} = require('express-validator')
const router = express.Router();

const User = require('../../models/thirdParty');

router.post('/' ,[
    check('orgName', 'Organization name is required').notEmpty(),
    check('email', 'Please check for email').isEmail(),
    check('password', 'Please check for password').notEmpty(),
  ] , async (req, res) => {

  // Error handling
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array(), success: false});
  }

  // Form Data
  const {orgName, email, password} = req.body;

  try {
    // Check if user exists by email
    let user = await User.findOne({ email })
    if(user)
      return res.status(400).json({ errors: [{msg: `User with email ${email} already exists`}], success: false });

    // Create New User
    user = new User({ orgName, email, password });

    // Save user to db
    await user.save();

    return res.json({
      message: "Organization registered successfully",
      success: true, 
      content: { id: user.id }
    });

  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
});


router.get('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    // Fetch user by id from db
    const user = await User.findById(id);

    if(!user)
      return res.status(400).json({ errors: [{msg: `Organization with id ${id} does not exists`}], success: false });

    return res.status(202).json({
      message: "Retrieve Organization by id",
      success: true,
      content: user
    });

  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
})

router.get('/', (req, res) => {
  User.find()
      .then((result)=>{
          res.send(result);
      })
      .catch((err)=>{
          console.log(err);
      });
});

module.exports = router;