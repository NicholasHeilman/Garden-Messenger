const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET for the message display
router.get('/',  (req, res) => {
    if (req.isAuthenticated()) {
        queryText=(`SELECT * FROM "message";`)            
        pool.query(queryText).then(results => res.send(results.rows))
        .catch(error => {
            console.log('Get Error Message:', error);
            res.sendStatus(500);
            res.send(req.user);
        })
    } else {
      // They are not authenticated.
      res.sendStatus(403); // 403 user should not be there
    }
  });
    
/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;