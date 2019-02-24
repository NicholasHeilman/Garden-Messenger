const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


// // GET Comments 



// //POST router for new meassage 
router.post('/', (req, res) => {
    if (req.isAuthenticated()) {
    const newComment = req.body;
    console.log(req.body);
    const queryText = `INSERT INTO "comments" ("comment", "user_id", "message_id" )
                      VALUES ($1, $2, $3)`;
    const queryValues = [
                       newComment.comment,
                       newComment.user_id,
                       newComment.message_id,
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(201); })
      .catch((error) => {
        console.log('POST Message Router Error', error);
        res.sendStatus(500);
      })
      } else {
        res.sendStatus(403);
    }
  }); 

  module.exports = router;