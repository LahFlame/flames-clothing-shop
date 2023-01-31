import { PaystackButton } from "react-paystack";
import { currentUser } from "../../redux/user/user.selector";
import { selectCartTotal } from "../../redux/cart/cart.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./payment.styles.scss"

const PaymentButton = ({currentUser,cartTotal}) => {
    console.log(currentUser,cartTotal);
    const stackProps ={
        email: currentUser ? currentUser.email : "onuhjorshh@gmail.com",
        text: "Pay Now",
        publicKey: "pk_test_a1b31ab9b61ec2111cf09c65341da84df2975138",
        amount: cartTotal * 100,
        onSuccess: () => alert("success"),
        onClose: () => alert("sure about this???")
    }

    return (
            <PaystackButton {...stackProps}/>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: currentUser,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(PaymentButton);