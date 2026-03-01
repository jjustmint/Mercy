const connection = require ('../database');

const Pet = async (req,res) => {
    const type = req.body.type;
    const petId = req.params.id;

  connection.query(
        `SELECT * FROM pets WHERE type = ? AND id = ?; `,[type,petId],
        (err, result) => {
            if(err){
                res.send({ err : err});
            }
            else if(result){
                console.log(result);
                    res.json({
                        success : true,
                        data : result[petId]
                    })
                } else {
                    res.json({
                        message: "Something went wrong!",
                    })
                }
        }
    )  
}

module.exports = Pet;