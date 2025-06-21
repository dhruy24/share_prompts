import 'server-only'
import { cookies } from 'next/headers'
 
export async function createSession(userInfo) {
  //const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const expiration = new Date(Date.now() +  10 * 1000); // 1 min from now
  //const session = await encrypt({ userId, expiresAt })
  const cookieStore = await cookies()
 
  cookieStore.set('session', userInfo, {
    httpOnly: true, //important as it keeps the cookies on server only
    secure: true,
    sameSite: 'lax',
    path: '/',
    expires: expiration, 
  })

  let data = {
    name:"dhruv",
    email:"dhruv@gamil"
  }

  cookieStore.set('userInfo', JSON.stringify(data), {
    httpOnly: true, //important as it keeps the cookies on server only
    secure: true,
    sameSite: 'lax',
    path: '/',
    expires: expiration, 
  })
}

export async function deleteSession() {
    const cookieStore = await cookies()
    cookieStore.delete('session')
}