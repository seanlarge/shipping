import React from 'react';
import PropTypes from 'prop-types';
import AddressForm from "../../../core/components/form";
import Button from "@material-ui/core/Button";
import {withStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";


const styles = theme => ({
    button: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});


class GetReceiverAddress extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <div style={{display: this.props.activeStep === 1 ? "inline" : "none"}}>
                <Typography component="h2" variant="headline" gutterBottom>
                    {this.props.getHeader}
                </Typography>
                <AddressForm wizardContext={this.props.wizardContext.to}/>
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

GetReceiverAddress.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
};

export default withStyles(styles)(GetReceiverAddress);