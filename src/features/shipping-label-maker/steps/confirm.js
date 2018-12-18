import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    button: {
        marginRight: theme.spacing.unit,
    },
    buttonContainer: {
        marginTop: "2%"
    }
});

class Confirm extends React.Component {

    getTotal =() =>{
        const shippingRate = 0.40;
       let shippingCost = this.props.wizardContext.weight * shippingRate *
            (this.props.wizardContext.shippingOption === 1 ? 1 : 1.5);
       return parseFloat(shippingCost.toString()).toFixed(2)
    };

    render() {
        const {classes} = this.props;
        return (
            <div style={{display: this.props.activeStep === 4 ? "inline" : "none"}}>
                <Typography component="h2" variant="display1" gutterBottom>
                    {this.props.getHeader}
                </Typography>
                {/*TODO this label display should be it's own component, leaving in for sake of time*/}
                <Typography variant="title" gutterBottom>
                    From
                </Typography>
                <Divider variant="middle" />
                <Typography variant="body1" gutterBottom align="left" >
                        <p>
                            <span><i>Name: </i></span> <b style={{marginLeft: "2%"}}>{this.props.wizardContext.from.name}</b>
                        </p>
                        <p>
                            <span><i>Street: </i></span> <b style={{marginLeft: "2%"}}>{this.props.wizardContext.from.street}</b>
                        </p>
                        <p>
                            <span><i>City: </i></span> <b style={{marginLeft: "2%"}}>{this.props.wizardContext.from.city}</b>
                        </p>
                        <p>
                            <span><i>State: </i></span> <b style={{marginLeft: "2%"}}>{this.props.wizardContext.from.state}</b>
                        </p>
                        <p>
                            <span><i>City: </i></span> <b style={{marginLeft: "2%"}}>{this.props.wizardContext.from.zip}</b>
                        </p>
                </Typography>
                <Typography variant="title" gutterBottom>
                    To
                </Typography>
                <Divider variant="middle" />
                <Typography variant="body1" gutterBottom align="left">
                    <p>
                        <span><i>Name: </i></span> <b style={{marginLeft: "2%"}}>{this.props.wizardContext.to.name}</b>
                    </p>
                    <p>
                        <span><i>Street: </i></span> <b style={{marginLeft: "2%"}}>{this.props.wizardContext.to.street}</b>
                    </p>
                    <p>
                        <span><i>City: </i></span> <b style={{marginLeft: "2%"}}>{this.props.wizardContext.to.city}</b>
                    </p>
                    <p>
                        <span><i>State: </i></span> <b style={{marginLeft: "2%"}}>{this.props.wizardContext.to.state}</b>
                    </p>
                    <p>
                        <span><i>City: </i></span> <b style={{marginLeft: "2%"}}>{this.props.wizardContext.to.zip}</b>
                    </p>
                </Typography>
                <Typography variant="title" gutterBottom>
                    Weight
                </Typography>
                <Divider variant="middle" />
                <Typography variant="body1" gutterBottom align="left">
                    <p>
                        <span><i>Weight: </i></span> <b style={{marginLeft: "2%"}}>{this.props.wizardContext.weight}</b>
                    </p>

                </Typography>
                <Typography variant="title" gutterBottom>
                    Shipping Option
                </Typography>
                <Divider variant="middle" />
                   <Typography variant="body1" gutterBottom align="left">
                       <p>
                           <span><i>Shipping: </i></span> <b style={{marginLeft: "2%"}}>{this.props.wizardContext.shippingOption === 1 ? "ground" : "priority"}</b>
                       </p>
                   </Typography>
                <Typography variant="title" gutterBottom>
                    Total Cost
                </Typography>
                <Divider variant="middle" />
                <Typography variant="body1" gutterBottom align="center">
                    <p>
                        <span><i>Cost: </i></span> <b style={{marginLeft: "2%"}}>{`$ ${this.getTotal()}`}</b>
                    </p>
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
                            onClick={() => this.props.onAction("complete")}
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