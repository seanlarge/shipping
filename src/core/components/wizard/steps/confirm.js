import  React from 'react';
import PropTypes from 'prop-types';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';



export default class Confirm extends React.Component{

     render(){
         return (
             <Step key="Confirm" >
                 <StepLabel >{"Confirm Details"}</StepLabel>
             </Step>
         );
     }
}

Confirm.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
};