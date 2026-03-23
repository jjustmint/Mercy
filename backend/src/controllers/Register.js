import { createUser } from "../model/user.model";
const RegisController = async (c) => {
  try{
    const body = await c.req.json({username: String, password: String, email: String});
    const hashedpassword = await Bun.password.hash(body.password);
    const newUser = await createUser(body.username, hashedpassword, body.email);
    return {
      sucess: true,
      data: newUser,
      msg: 200
    }

  }catch (e){
    console.log(e)
    return c.json(e,500);
  }
}

export {RegisController}