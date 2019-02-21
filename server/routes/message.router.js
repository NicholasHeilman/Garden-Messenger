const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// GET for the message display
router.get('/',  (req, res) => {
    if (req.isAuthenticated()) {
        queryText=(`SELECT * FROM "message"
                    JOIN "person"
                    ON "id" = "user_id";`)            
        pool.query(queryText)
      .then(results => res.send(results.rows))
      .catch(error => {
            console.log('Get Message Router Error ', error);
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
    console.log('req.user:', req.params)
  const queryText = `SELECT 
	                    person.username,
	                    person.id,
	                    message.message,
	                    message.date,
	                    message.headline,
	                    message.mess_id,
	                    message.user_id,
	                    comments.message_id,
	                    comments.comment,
	                    comments.user_id
                    FROM "comments" 
                    JOIN "person" ON "comments"."user_id" = "person"."id"
                    JOIN "message" ON "message"."mess_id" = "comments"."message_id"
                    WHERE "message"."mess_id" = $1;`;
      pool.query(queryText, [req.params.id])
      .then((result) => {res.send(result.rows);
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
      console.log('POST Message Router Error', error);
      res.sendStatus(500);
    })
    } else {
      res.sendStatus(403);
  }
}); // end POST Message request

//Delete Message Router
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = 'DELETE FROM "message" WHERE "mess_id" = $1';
    pool.query( queryText, [req.params.id])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('DELETE Error', err)
      res.sendStatus(500);
    })
  });



module.exports = router;


// WHERE "mess_id" = $1;`,
// [req.param.mess_id])