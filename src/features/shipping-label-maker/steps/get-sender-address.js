import React from 'react';
import PropTypes from 'prop-types';
import StepContent from '@material-ui/core/StepContent';
import AddressForm from "../../../core/components/form/index";
import Button from "@material-ui/core/Button";
import {withStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
    button: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});


class GetSenderAddress extends React.Component {

    render() {
        const {classes} = this.props;
        return (

               <div style={{display: this.props.activeStep === 0 ? "inline" : "none"}} >
                   <Typography component="h2" variant="headline" gutterBottom>
                       {this.props.getHeader}
                   </Typography>
                   <AddressForm wizardContext={this.props.wizardContext}/>
                   <div>
                       <div>
                           <Button
                               disabled={this.props.activeStep === 0}
                               onClick={() => this.props.onAction("back")}
                               className={classes.button}
                           >
                               Back
                           </Button>
                           <Button
                               variant="contained"
                               color="primary"
                               onClick={() => this.props.onAction("next")}
                               className={classes.button}
                           >
                               {this.props.activeStep === 4 ? 'Finish' : 'Next'}
                           </Button>
                       </div>
                   </div>

               </div>
        );
    }
}

GetSenderAddress.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired,
    activeStep: PropTypes.int,
    getHeader: PropTypes.func.isRequired
};

export default withStyles(styles)(GetSenderAddress);