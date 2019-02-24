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

// router.put('/', (req,res) => {
//     if (req.isAuthenticated()) {
//       queryText =  `BEGIN;	
//                       UPDATE
//                           "comments"
//                       SET
//                           "user_id" = 6
//                       WHERE
//                           "user_id" = $1;
//                       UPDATE
//                           "message"
//                       SET
//                           "user_id" = 6
//                       WHERE
//                           "user_id" = $1;
//                       DELETE FROM 
//                           "person"
//                       WHERE
//                           "id" = $1;
//                       COMMIT;` ,
//                       VALUES ()
//       queryValue = []
          

//       )
//     }
// })
    
module.exports = router;

// if (req.isAuthenticated()) {
//   const newMessage = req.body;
//   console.log(req.body);
//   const queryText = `INSERT INTO "message" ("headline", "message", "user_id" )
//                     VALUES ($1, $2, $3)`;
//   const queryValues = [
//                      newMessage.headline,
//                      newMessage.message,
//                      newMessage.user_id,
//   ];
//   pool.query(queryText, queryValues)
//     .then(() => { res.sendStatus(201); })
//     .catch((error) => {
//       console.log('POST Message Router Error', error);
//       res.sendStatus(500);
//     })
//     } else {
//       res.sendStatus(403);
//   }
// }); // end POST Message request