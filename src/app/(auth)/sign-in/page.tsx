import SignInView from "@/modules/auth/ui/views/sign-in-view";
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation" 
import { headers } from "next/headers"

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  
  if(!!session){
    redirect("/")
  }
  return  <SignInView />
}

export default page

// http://localhost:3000/auth/sign-in 
//don't wanna use auth -- rename folder to (auth) -- this tells next js do not include this url
// http://localhost:3000/sign-in 