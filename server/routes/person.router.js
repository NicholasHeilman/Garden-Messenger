const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET for the message display
router.get('/',  (req, res) => {
    if (req.isAuthenticated()) {
        queryText=(`SELECT "username", "email", "id" FROM "person";`)            
        pool.query(queryText)
      .then(results => res.send(results.rows))
      .catch(error => {
            console.log('Get Router Person Error ', error);
            res.sendStatus(500);
            res.send(req.user);
        })
    } else {
    res.sendStatus(403); // 403 user should not be there
  }
});
    
module.exports = router;