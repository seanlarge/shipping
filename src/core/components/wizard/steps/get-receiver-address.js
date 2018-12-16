import  React from 'react';
import PropTypes from 'prop-types';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';



export default class GetReceiverAddress extends React.Component{

    render(){
        return (
            <Step key="GetReceiverAddress">
                <StepLabel></StepLabel>
            </Step>
        );
    }
}

GetReceiverAddress.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
};