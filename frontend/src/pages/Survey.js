/*External or react libraries*/
import React from "react";

/* Components */
import Header from "../components/Header/Header";
import SurveyForm from "../components/SurveyForm/SurveyForm";
import Footer from "../components/Footer/Footer";

/*Others*/
import "./Survey.css";

function App(props) {
    return (
        <div>
            <div className="content">
                <Header />
                <SurveyForm/>
            </div>
            
            <Footer />
        </div>
    );
}

export default App;