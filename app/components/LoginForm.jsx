
import { signup } from '../actions/auth'

async function LoginForm() {
  return (
    <form action={async(formData)=>{
        "use server"
        let res = await signup(formData)
        console.log("login resssss", res)
    }}>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="Email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default LoginForm