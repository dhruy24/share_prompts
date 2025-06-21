
import { createSession } from "../lib/session"
import { redirect } from "next/navigation";

export async function signup(formData) {
    console.log("formData", formData)
    const isFormValid = true
    if(!isFormValid){
        return {
            error:"inavlid form data"
        }
    }

    //call api and get data in res

    if (formData.get("email") == "dhruv@gmail.com" && formData.get("password") == "123"){
        let response = {
            name:"Dhruv",
            access_token:"123456789"
        }
    
        //set session
        createSession(response)
        redirect("/dashboard")
    }else{
        return {
            error:"invalid password or email"
        }
    }


}