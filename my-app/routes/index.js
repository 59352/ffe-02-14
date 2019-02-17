const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('racing', { main: 'Welcome to RTR (time attack) about web-page', 
                      title: 'The time attack racing',
                      text: 'The sport of time attack racing is one of the fastest growing types of motorsport around the world. It’s exciting, challenging and accessible and every year it attracts more and more enthusiasts who want to try their hand at this ultimate pursuit of speed.' },
                    
          );
});

module.exports = router;
