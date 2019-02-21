// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();
// // const { rejectUnauthenticated } = require('../modules/authentication-middleware');


// // GET Comments 
// router.get('/:id', (req, res) => {
//     if (req.isAuthenticated()) {
//       console.log('req.user:', req.params)
//     const queryText = `SELECT * FROM "comments"
//                 JOIN "message"
//                 ON "mess_id" = "message_id"
//                 WHERE mess_id = $1;`;
//         pool.query(queryText, [req.params.id])
//         .then((result) => {res.send(result.rows);
//         }).catch((error) => {
//           console.log('GET Detail Error', error);
//           res.sendStatus(500);
//         })
//     } else {
//       res.sendStatus(403);
//     }
//   }); // end GET DetailMessage

//   module.exports = router;