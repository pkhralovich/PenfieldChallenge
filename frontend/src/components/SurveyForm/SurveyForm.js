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

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

/*Services*/
import SurveyService from '../../services/SurveyService';

/* Styles */
import "./SurveyForm.css";

function App(props) {
    const [error, setError] = useState("");
    const [showDialog, setShowDialog] = useState(false);
    const [dialogMessage, setDialogMessage] = useState("");
    const [dialogTitle, setDialogTitle] = useState("");
    const [voucherCode, setVoucherCode] = useState("");
    const [formData, setFormData] = useState(
        {
            satisfaction : "",
            description : "",
            quality : "",
            size : "",
            repeat : "",
            comment : "",
            sale : props.sale
        }
    );

    const service = new SurveyService();

    //const formData = 

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

    const handleSubmit = function(event) {
        setError("");
        if (isValidData())
            service.submit(formData, onSuccess, onError); 
    };

    const onSuccess = function(response) {
        switch (response.status) {
            case (200): {
                showSuccess("Your answers were successfuly saved. Here is your code, enjoy it!", response.data.code);
                break;
            }
            case (400): {
                showError("Some submited value was invalid. Please, check your answers!");
                break;
            }
            case (404): {
                showError("It seems that we are unable to find this purchase. Please, check your email!");
                break;
            }
            case (409): {
                showError("The survey associated to the current purchase was already submited. Please, check your email!");
                break;
            }
            default: onError();
        }
    }

    const onError = function(e) {
        showError("Ups... Something strange happened!")
    }

    const showError = function(error) {
        setDialogTitle("Something went wrong!");
        setDialogMessage(error);
        setShowDialog(true);
    }

    const showSuccess = function(success, voucher) {
        setDialogTitle("Thank you for your time!");
        setDialogMessage(success);
        setVoucherCode(voucher);
        setShowDialog(true);
    }

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

    const onClose = function() {
        if (voucherCode) window.location.href="https://www.nike.com";
        else setShowDialog(false);
    }

    let renderDialogContent = () => {
        if (!voucherCode) {
            return (
                <div>
                    {dialogMessage}
                </div>
            );
        } else {
            return (
                <div>
                    {dialogMessage}
                    <br/> 
                    <p className="voucher-code"> {voucherCode} </p>
                </div>
            );
        }
    };

    const renderDialog = function() {
        return (
            <Dialog
                open={showDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    { renderDialogContent() }
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button color="primary" autoFocus onClick={onClose}>
                    { voucherCode ? "Visit Nike" : "Try again"}
                </Button>
                </DialogActions>
            </Dialog>
        );
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
            { renderDialog() }
        </div>
    );
}

export default App;