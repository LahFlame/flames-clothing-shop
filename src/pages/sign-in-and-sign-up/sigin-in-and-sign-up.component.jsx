import "./sign-in-and-sign-up.styles.scss"
import Signin from "../../components/signin/signin.component";
import SignUp from "../../components/signup component/signup.component";

const SignInAndSignUP = () => {
    return (
        <div className="sign-in-and-sign-up">
            <Signin />
            <SignUp />
        </div>
    )
}


export default SignInAndSignUP;