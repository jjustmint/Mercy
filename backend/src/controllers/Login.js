import { checkUser, getUserId } from "../model/user.model";
const LoginController = async (c) => {
  try {
    const body = await c.req.json({ username: String, password: String });
    console.log("before query");
    const userId = await getUserId(body.username);
    console.log("get id already");
    const checkPassword = await checkUser(userId, body.password);
    console.log("after query");

    if(!userId){
      return c.json({
        success: false,
        msg: "User is not found"
      },410)
    }
    if (!checkPassword) {
      return c.json({
        success: false,
        msg: "incorrect password or username",
      }, 412)
    }

    const JWT_TOKEN = Bun.env.JWT_TOKEN;
    const JWT = await sign(userId, JWT_TOKEN);
    setCookie('token', JWT);

    return c.json({
      success: true,
      msg: "successfully login"
    }, 200)

  } catch (e) {

    console.log(e);
    return c.json({
      sucess: false,
      msg: (e),
    },500)

  }
}

export { LoginController }