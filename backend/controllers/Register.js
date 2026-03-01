const bcrypt = require('bcrypt');
const connection = require('../database');

const Register = async (req, res) => {
  const user = req.body.user
  const password = req.body.password
  const email = req.body.email
  const hash = await bcrypt.hash(password, 10);


  connection.query(
    `INSERT INTO users (user, hashed_password, email) VALUES (?,?,?)`,
    [user, hash, email],
    (err, rows) => {
      // Check if cannot find the data in the database then return the error
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        // Return data to the client if success
        console.log(rows);
        if (rows) {
          res.json({
            success: true,
            data: {
            message: "create success",
            },
          });
        }
      }
    }
  );
};

module.exports = Register;