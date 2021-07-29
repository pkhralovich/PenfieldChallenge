/*External or react libraries*/
import React from "react";
import Button from '@material-ui/core/Button';

/* Styles */
import "./Header.css";

/* Images */
import nike_icon from "../../assets/images/ic_nike.svg";

function App(props) {
    function renderBottom() {
        if (!props.showError) return <h2>Let's start!</h2>;
        else return <Button size="large" onClick={() => window.location.href="https://www.nike.com"}>Go to Nike</Button>
    }

    function renderMessage() {
        if (props.showError){
            return (
                <p className="message">
                    Ups... That's strange! It looks like this link is not valid anymore.
                    We apologize for any inconvient. Please go to Nike.com to view our products.
                </p>
            );
        } else {
            return (
                <p className="message">
                    Hi {props.user}! Thank you for your purchase, now you are part of the family! <br/>
                    Please, complete this survey to help us to improve our service. <br/>
                    We will give you a discount voucher after you submit the questions.
                </p>
            );
        }
    }

    return (
        <div className="header">
            <img src={nike_icon} alt="Nike icon" className="icon" />
            <h1>Nike satisfaction survey</h1>

            <hr className="separator"/>

            { renderMessage() }

            <hr className="separator"/>

            { renderBottom() }
        </div>
    );
}

export default App;