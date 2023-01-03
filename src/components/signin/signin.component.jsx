import React from "react"           
import "./signin.styles.scss"
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle,auth } from "../../firebase/firebase.utils";


class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email: "",password: ""});
        } catch (error) {
            console.log(error);
        }
        
    }
    handleChange = event => {
        const {name,value} = event.target;
        this.setState({[name]: value})
    }

    render(){
        return (
            <div className="signin">
                <h2>I already have an account</h2>
                <span>Signin with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email"
                        type="email" 
                        handleChange={this.handleChange}
                        value = {this.state.email}
                        label= "Email"
                        required
                    />
                    <FormInput 
                        name="password"
                        type="password" 
                        handleChange={this.handleChange} 
                        value = {this.state.password}
                        label = "Password"
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit" >SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default Signin;

            