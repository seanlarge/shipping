import  React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    button: {
        marginRight: theme.spacing.unit,
    },
    buttonContainer: {
        marginTop: "2%"
    }
});

 class Confirm extends React.Component{
     render(){
         const {classes} = this.props;
         return (
            <div style={{display: this.props.activeStep === 4 ? "inline" : "none"}}>
                <Typography component="h2" variant="headline" gutterBottom>
                    {this.props.getHeader}
                </Typography>
                <Typography component="h2" variant="body" gutterBottom>
                    {JSON.stringify(this.props.wizardContext)}
                </Typography>
                <div className={classes.buttonContainer}>
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

Confirm.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
};

export default withStyles(styles)(Confirm);