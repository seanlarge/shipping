import  React from 'react';
import PropTypes from 'prop-types';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';



export default class GetWeight extends React.Component{

    render(){
        return (
            <Step key="GetWeight" >
                <StepLabel>{"Please enter the weight of the item"}</StepLabel>
            </Step>
        );
    }
}

GetWeight.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
};