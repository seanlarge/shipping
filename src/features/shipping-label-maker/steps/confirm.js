import React from 'react';
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

class Confirm extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div style={{display: this.props.activeStep === 4 ? "inline" : "none"}}>
                <Typography component="h2" variant="headline" gutterBottom>
                    {this.props.getHeader}
                </Typography>
                //TODO THIS CAN BE IT'S OWN COMPONENT
                <Typography component="h2" variant="body" gutterBottom>
                    <InputLabel htmlFor="component-simple">From</InputLabel>
                    <tr>
                        <td><b>Name: </b></td>
                        <td>{this.props.wizardContext.from.name}</td>
                    </tr>
                    <tr>
                        <td><b>Street: </b></td>
                        <td>{this.props.wizardContext.from.street}</td>
                    </tr>
                    <tr>
                        <td><b>City: </b></td>
                        <td>{this.props.wizardContext.from.city}</td>
                    </tr>
                    <tr>
                        <td><b>State: </b></td>
                        <td>{this.props.wizardContext.from.state}</td>
                    </tr>
                    <tr>
                        <td><b>City: </b></td>
                        <td>{this.props.wizardContext.from.zip}</td>
                    </tr>

                    <InputLabel htmlFor="component-simple">To</InputLabel>
                    <tr>
                        <td><b>Name: </b></td>
                        <td>{this.props.wizardContext.to.name}</td>
                    </tr>
                    <tr>
                        <td><b>Street: </b></td>
                        <td>{this.props.wizardContext.to.street}</td>
                    </tr>
                    <tr>
                        <td><b>City: </b></td>
                        <td>{this.props.wizardContext.to.city}</td>
                    </tr>
                    <tr>
                        <td><b>State: </b></td>
                        <td>{this.props.wizardContext.to.state}</td>
                    </tr>
                    <tr>
                        <td><b>City: </b></td>
                        <td>{this.props.wizardContext.to.zip}</td>
                    </tr>

                    <InputLabel htmlFor="component-simple">Weight</InputLabel>
                    <tr>
                        <td><b>Weight: </b></td>
                        <td>{this.props.wizardContext.weight}</td>
                    </tr>

                    <InputLabel htmlFor="component-simple">Shipping Option</InputLabel>
                    <tr>
                        <td><b>Shipping: </b></td>
                        <td>{this.props.wizardContext.shippingOption === 1 ? "ground" : "priority"}</td>
                    </tr>

                    <InputLabel htmlFor="component-simple">Total Cost</InputLabel>
                    <tr>
                        <td><b>Cost: </b></td>
                        <td>{this.getTotal()}</td>
                    </tr>
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
                            onClick={() => this.props.onAction("Complete")}
                            className={classes.button}
                        >
                            Finish!
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