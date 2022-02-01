import React, { useState } from 'react';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

const SignInSignUp = () => {
    const [state, setState] = useState("Sign in")

    return (
        <>
            {state === "Sign in" ? <SignIn changeState={setState}/> : <SignUp changeState={setState}/>}
        </>
    )
}

export default SignInSignUp
