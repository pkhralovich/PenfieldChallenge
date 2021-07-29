/*External or react libraries*/
import React from "react";
import queryString from "query-string";

/* Components */
import Header from "../components/Header/Header";
import SurveyForm from "../components/SurveyForm/SurveyForm";
import Footer from "../components/Footer/Footer";

/*Others*/
import "./Survey.css";

function App(props) {
    const user = getQuery("user");
    const sale = getQuery("sale");
    
    function getQuery(key) {
        const query = queryString.parse(window.location.search);
        return query[key] ? query[key] : "";
    }

    function renderContent() {
        return user && sale ? <SurveyForm sale={sale}/> : null;
    }

    return (
        <div>
            <div className="content">
                <Header user={user} showError={!(user && sale)}/>
                { renderContent() }
            </div>
            
            <Footer />
        </div>
    );
}

export default App;