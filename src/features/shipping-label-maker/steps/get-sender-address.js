import React from 'react';
import PropTypes from 'prop-types';
import AddressForm from "../../../core/components/form/index";
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


class GetSenderAddress extends React.Component {

    // future implementation to disable progress if form is empty
    // disabledButton = () => {
    //     let validate = [];
    //     Object.entries(this.props.wizardContext.from).map(value => {
    //         validate.push(value[1]);
    //     });
    //     return validate.includes("");
    // };

    render() {
        const {classes} = this.props;
        return (

            <div style={{display: this.props.activeStep === 0 ? "inline" : "none"}}>
                <Typography component="h2" variant="headline" gutterBottom>
                    {this.props.getHeader}
                </Typography>
                <AddressForm wizardContext={this.props.wizardContext.from} />
                <div>
                    <div>
                        <Button
                            disabled={this.props.activeStep === 0}
                            onClick={() => this.props.onAction("back")}
                            className={classes.button}
                        >
                            Back
                        </Button>
                        {/*// TODO disable form based on function above*/}
                        <Button
                            variant="contained"
                            color="primary"
                            // disabled
                            onClick={() => this.props.onAction("next")}
                            className={classes.button}
                        >
                            Next
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
    activeStep: PropTypes.number,
    getHeader: PropTypes.string.isRequired
};

export default withStyles(styles)(GetSenderAddress);