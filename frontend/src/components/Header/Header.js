/*External or react libraries*/
import React from "react";

/* Styles */
import "./Header.css";

/* Images */
import nike_icon from "../../assets/images/ic_nike.svg";

function App() {
    let user = "Pavel";

    return (
        <div className="header">
            <img src={nike_icon} className="icon" />
            <h1>Nike satisfaction survey</h1>

            <hr className="separator"/>

            <p className="message">
                Hi {user}! Thank you for your purchase, now you are part of the family! <br/>
                Please, complete this survey to help us to improve our service. <br/>
                We will give you a discount voucher after you submit the questions.
            </p>

            <hr className="separator"/>

            <h2>Let's start!</h2>
        </div>
    );
}

export default App;