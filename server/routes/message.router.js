const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET for the message display
router.get('/',  (req, res) => {
    if (req.isAuthenticated()) {
        queryText=(`SELECT * FROM "message"
                    JOIN "person"
                    ON "id" = "user_id";`)            
        pool.query(queryText)
      .then(results => res.send(results.rows))
      .catch(error => {
            console.log('Get Error ', error);
            res.sendStatus(500);
            res.send(req.user);
        })
    } else {
    res.sendStatus(403); // 403 user should not be there
  }
});
    
//  //router for GET DetailMessage
router.get('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    console.log('req.user:', req.user)
  pool.query(`SELECT * FROM "message"
              JOIN "comments"
              ON "mess_id" = "message_id"
              WHERE "mess_id" = $1;`,
              [req.param.mess_id])
      .then((result) => {
          res.send(result.rows);
      }).catch((error) => {
        console.log('GET Detail Error', error);
        res.sendStatus(500);
      })
  } else {
    res.sendStatus(403);
  }
}); // end GET DetailMessage

// //POST router for new meassage 
router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
  const newMessage = req.body;
  console.log(req.body);
  const queryText = `INSERT INTO "message" ("headline", "message", "user_id" )
                    VALUES ($1, $2, $3)`;
  const queryValues = [
                     newMessage.headline,
                     newMessage.message,
                     newMessage.user_id,
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((error) => {
      console.log('POST Error', error);
      res.sendStatus(500);
    })
    } else {
      res.sendStatus(403);
  }
}); // end POST Message request


module.exports = router;