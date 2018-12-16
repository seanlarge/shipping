import  React from 'react';
import PropTypes from 'prop-types';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import AddressForm from "../../form";


export default class GetSenderAddress extends React.Component{

    render(){
        return (
            <Step key="GetSenderAddress" >
                <StepLabel>{"Enter the Senders Address"}</StepLabel>
                <AddressForm/>
            </Step>
        );
    }
}

GetSenderAddress.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
};