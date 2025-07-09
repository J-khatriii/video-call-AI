import SignInView from "@/modules/auth/ui/views/sign-in-view";

const page = () => {
  return  <SignInView />
}

export default page

// http://localhost:3000/auth/sign-in 
//don't wanna use auth -- rename folder to (auth) -- this tells next js do not include this url
// http://localhost:3000/sign-in 