import  React from 'react';
import PropTypes from 'prop-types';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';



export default class GetShippingOption extends React.Component{

    render(){
        return (
            <Step key="GetShippingOption">
                <StepLabel>{"Choose a shipping option"}</StepLabel>
            </Step>
        );
    }
}

GetShippingOption.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
};