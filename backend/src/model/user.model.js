import { prisma } from '../'

export const createUser = async (username, password, email) => {
    const newUser = await prisma.users.create({
        data: {
            username: username,
            hashed_password: password,
            email: email
        }
    })
    return newUser;
}

export const getUserId = async ( username ) => {
    const userId = prisma.users.findFirst({
        where: username,
        select: {
            id: true
        }
    })
    return userId
}

export const checkUser = async ( userId, password ) => {
    const checkUser = await prisma.users.findFirst({
        where: userId,
        select: {
            id: true,
            hashed_password: true
        }
    })
    if(checkUser?.hashed_password){
        return false
    }
    return Bun.password.verify(checkUser.hashed_password, password);
}