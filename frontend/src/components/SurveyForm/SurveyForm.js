/*External or react libraries*/
import React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

/* Styles */
import "./SurveyForm.css";

function App() {   
    let getQuestion = function (name, label, helper_left, helper_right) {
        return (
            <FormControl component="fieldset" className="label">
                <FormLabel component="legend">{label}</FormLabel>
                <RadioGroup name={name} row>
                    <FormLabel className="helper-full">{helper_left}</FormLabel>
                    
                    <div className="marks">
                        <FormControlLabel value="1"   control={<Radio />} label="1" />
                        <FormControlLabel value="2"   control={<Radio />} label="2" />
                        <FormControlLabel value="3"   control={<Radio />} label="3" />
                        <FormControlLabel value="4"   control={<Radio />} label="4" />
                        <FormControlLabel value="5"   control={<Radio />} label="5" />
                        
                        <FormControlLabel value="6"   control={<Radio />} label="6" />
                        <FormControlLabel value="7"   control={<Radio />} label="7" />
                        <FormControlLabel value="8"   control={<Radio />} label="8" />
                        <FormControlLabel value="9"   control={<Radio />} label="9" />
                        <FormControlLabel value="10"  control={<Radio />} label="10" />
                    </div>
                
                    <FormLabel className="helper-full right">{helper_right}</FormLabel>

                    <div className="helper-container full">
                        <FormLabel className="helper left">{helper_left} (1)</FormLabel>
                        <FormLabel className="helper right">{helper_right} (10)</FormLabel>
                    </div>
                </RadioGroup>
            </FormControl>
        );
    }
    
    return (
        <form class="form-survey">
            { getQuestion("satisfaction", "How satisfied are you with the whole behaviour of the page?", "Not satisfied", "Totally satisfied") }
            { getQuestion("description", "The description and the picture of the products were usefull?", "Not usefull", "Really usefull") }
            { getQuestion("quality", "The quality of the product was the expected", "Strongly disagree", "Strongly agree") }
            { getQuestion("size", "The size of the product corresponds to the description", "Strongly disagree", "Strongly agree") }
            { getQuestion("repeat", "Are you willing to buy again with us?", "Absolutely not", "Absolutely yes")}
        
            <Button size="large">
                Submit
            </Button>
        </form>
    );
}

export default App;