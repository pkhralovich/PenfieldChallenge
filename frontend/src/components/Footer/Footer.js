/*External or react libraries*/
import React from "react";
import Grid from '@material-ui/core/Grid';

/* Style */
import "./Footer.css"

/* Images */
import facebook_icon from "../../assets/images/ic_facebook.svg";
import twitter_icon from "../../assets/images/ic_twitter.svg";
import youtube_icon from "../../assets/images/ic_youtube.svg";
import instagram_icon from "../../assets/images/ic_instagram.svg";

function App() {
    let link = "https://www.nike.com/nl/en/";

    return (
        <div className="footer-container">
            <Grid container>
                {/* First column */}
                <Grid item xs={12} sm={3} md={2} className="main-column">
                    <a href={link}> Gift cards </a>
                    <a href={link}> Find a store </a>
                    <a href={link}> Sign up for email </a>
                    <a href={link}> Become a member </a>
                    <a href={link}> Feedback </a>
                </Grid>

                {/* Second column */}
                <Grid item xs={12} sm={3} md={2}>
                    <a href={link} className="column-title"> Get help </a>
                    <a href={link}> Order status </a>
                    <a href={link}> Shipping and delivery </a>
                    <a href={link}> Returns </a>
                    <a href={link}> Payment options </a>
                    <a href={link}> Contact us </a>
                </Grid>

                {/* Third column */}
                <Grid item xs={12} sm={3} md={2}>
                    <a href={link} className="column-title"> About nike </a>
                    <a href={link}> News </a>
                    <a href={link}> Carreers </a>
                    <a href={link}> Investors </a>
                    <a href={link}> Sustainability </a>
                </Grid>

                {/* Footer spacing */}
                <Grid item xs={false} sm={false} md={3}/>

                {/* Footer social networks links */}
                <Grid item xs={12} sm={3} md={3} className="social-container">
                    <img src={twitter_icon}   alt="Twitter icon"   className="social-icon"/>
                    <img src={facebook_icon}  alt="Facebook icon"  className="social-icon"/>
                    <img src={youtube_icon}   alt="Youtube icon"   className="social-icon"/>
                    <img src={instagram_icon} alt="Instagram icon" className="social-icon"/>
                </Grid>
            </Grid>

            <Grid container className="bottom">
                <Grid item xs={12} sm={6} className="copyright">
                    <p className="location"> Netherlands </p>
                    <p> &copy; 2021 Nike, Inc. All Rights Reserved </p>
                </Grid>

                <Grid item xs={12} sm={6} className="links">
                    <a href={link}> Guides </a>
                    <a href={link}> Terms of Use </a>
                    <a href={link}> Terms of Sale </a>
                    <a href={link}> Company Details </a>
                    <a href={link}> Privacy & Cookie Policy </a>
                    <a href={link}> Cookie Settings </a>
                </Grid> 
            </Grid>
        </div>
    );
}

export default App;