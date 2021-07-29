/*External or react libraries*/
import React, { useState } from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

/*Services*/
import SurveyService from '../../services/SurveyService';

/* Styles */
import "./SurveyForm.css";

function App() {
    const [error, setError] = useState("");

    const service = new SurveyService();

    const formData = {
        satisfaction : "",
        description : "",
        quality : "",
        size : "",
        repeat : "",
        comment : ""
    }

    const handleChange = function(event, key) {
        formData[key] = event.target.value;
    }

    const getQuestion = function (name, label, helper_left, helper_right) {
        return (
            <FormControl component="fieldset" className="label">
                <FormLabel component="legend">{label}</FormLabel>
                <RadioGroup name={name} row onChange={ (e) => handleChange(e, name) }>
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
    
    const isValidData = function(){
        let requiredFilled = formData.satisfaction &&
                        formData.description &&
                        formData.quality &&
                        formData.size &&
                        formData.repeat;

        let validComment = !formData.comment || (formData.comment && formData.comment.length)
        
        
        if (!requiredFilled) setError("Please, fill all numeric questions to get your voucher!");
        else if (!validComment) setError("Comment to long. The maximum length is 300 characters.");
        
        return requiredFilled && validComment;
    }

    const handleSubmit = async function(event) {
        setError("");
        if (isValidData()) {
            try {
                let response = await service.submit(formData);
                //TODO: Finish
            } catch (e) {
                //TODO: Finish
            }
        }
    };

    const renderError = function() {
        if (error) {
            return (
                <Alert severity="error">
                    <AlertTitle>Missing data</AlertTitle>
                    {error}
                </Alert>
            );
        } else return null;
    }

    return (
        <div>
            <form className="form-survey">
                { getQuestion("satisfaction", "How satisfied are you with the whole behaviour of the page?", "Not satisfied", "Totally satisfied") }
                { getQuestion("description", "The description and the picture of the products were usefull?", "Not usefull", "Really usefull") }
                { getQuestion("quality", "The quality of the product was the expected", "Strongly disagree", "Strongly agree") }
                { getQuestion("size", "The size of the product corresponds to the description", "Strongly disagree", "Strongly agree") }
                { getQuestion("repeat", "Are you willing to buy again with us?", "Absolutely not", "Absolutely yes")}
            
                <TextField
                    name="comment"
                    label="Any other comment"
                    placeholder="The checkout process is great!"
                    variant="outlined"
                    multiline
                    />

                <Button size="large" onClick={handleSubmit}>
                    Submit
                </Button>
            </form>

            { renderError() }
        </div>
    );
}

export default App;