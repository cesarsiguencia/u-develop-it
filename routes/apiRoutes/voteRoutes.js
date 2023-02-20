const express = require('express');
const router = express.Router();
const db = require('../../db/connection')
const inputCheck = require('../../utils/inputCheck')

router.post('/vote', ({ body }, res) => {
    // Data validation
    // const errors = inputCheck(body, 'voter_id', 'candidate_id');
    // if (errors) {
    //   res.status(400).json({ error: errors });
    //   return;
    // }
  
    const sql = `INSERT INTO votes (voter_id, candidate_id) VALUES (?,?)`;
    const params = [body.voter_id, body.candidate_id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        //PLACING AN ERROR JSON AFTER STATUS WILL LET SQL TELL THE ERR.MESSAGE THAT WOULD BE DISPLAYED FROM THE SQL SHELL TERMINAL. IF NOT MESSAGE IS INCLUDED, THE 400 WILL JUST GO ON FOREVER
        //status(400) allows to send status along with json message chained after. sendStatus(400) will only allow 'Bad request' and no additional info
        return;
      }
      res.json({
        message: 'success',
        data: body,
        changes: result.affectedRows
      });
    });
  });

router.get('/vote', (req,res) => {
    const sql = `SELECT * FROM votes`;

    db.query(sql, (err, rows) => {
        if(err){
            res.status(500).json({ error: err.message });
        }
        res.json({
            message: 'success',
            data: rows
        })
    })
});

router.get('/votes', (req, res) => {
  const sql = `SELECT candidates.*, parties.name AS party_name, COUNT(candidate_id) AS total_votes FROM votes
  LEFT JOIN candidates ON votes.candidate_id = candidates.id
  LEFT JOIN parties ON candidates.party_id = parties.id
  GROUP BY candidate_id ORDER BY total_votes DESC`

  db.query(sql, (err, total) => {
    if(err){
      res.status(500).json({ error: err.message})
    }
    res.json({
      message:'success',
      data: total
    })
  })

})

module.exports = router;