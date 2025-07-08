"use client";

import { authClient } from "@/lib/auth-client"; 

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {

  const { data: session } = authClient.useSession() 

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onsubmit = () => {
    authClient.signUp.email({
      email,
      name,
      password
    }, {
        onSuccess: () => {
            //redirect to the dashboard or sign in page
            window.alert("sucessful");
        },
        onError: () => {
            // display the error message
            window.alert("something went wrong");
        },
  });
  }

  const onLogin = () => {
    authClient.signIn.email({
      email,
      password
    }, {
        onSuccess: () => {
            //redirect to the dashboard or sign in page
            window.alert("sucessful");
        },
        onError: () => {
            // display the error message
            window.alert("something went wrong");
        },
  });
  }

  if(session){
    return(
      <div className="flex flex-col p-4 gap-2">
        <p>Logged in as {session.user.name}</p>
        <Button onClick={() => authClient.signOut()}>Sign out</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-10">
      <div className="p-4 flex flex-col gap-1.5">
      <Input placeholder="name" value={name} onChange={(e) => setName(e.target.value)}></Input>
      <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
      <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
      <Button onClick={onsubmit}>Create User</Button>
    </div>

    <div className="p-4 flex flex-col gap-1.5">
      <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
      <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
      <Button onClick={onLogin}>Login</Button>
    </div>
    </div>
  );
};
