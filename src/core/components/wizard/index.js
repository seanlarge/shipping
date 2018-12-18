import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Paper from "@material-ui/core/Paper";

import GetSenderAddress from '../../../features/shipping-label-maker/steps/get-sender-address';
import GetReceiverAddress from '../../../features/shipping-label-maker/steps/get-receiver-address';
import GetWeight from '../../../features/shipping-label-maker/steps/get-weight';
import GetShippingOption from '../../../features/shipping-label-maker/steps/get-shipping-option';
import Confirm from '../../../features/shipping-label-maker/steps/confirm';

const styles = theme => ({
    root: {
        width: '90%',
        flexGrow: '1'
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: "85%",
        marginLeft: "7%"
    },
});


class Wizard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0
        };

    }

    handleAction = action => {
        if(action === "complete"){
            this.props.onComplete();
        }
        if (action === "next") {
            this.setState({
                activeStep: this.state.activeStep + 1
            });
        } else {
            this.setState({
                activeStep: this.state.activeStep - 1
            });
        }
    };

    setSelected = value => {
        this.setState({
            selectedShipping: value
        })
    };

    renderSteps = (index) => {
        let steps = [
            <GetSenderAddress wizardContext={this.props.wizardContext} onAction={(action) => this.handleAction(action)}
                              activeStep={this.state.activeStep} getHeader={this.props.header(this.state.activeStep)} />,
            <GetReceiverAddress wizardContext={this.props.wizardContext}
                                onAction={(action) => this.handleAction(action)} activeStep={this.state.activeStep} getHeader={this.props.header(this.state.activeStep)}/>,
            <GetWeight wizardContext={this.props.wizardContext} onAction={(action) => this.handleAction(action)}
                       activeStep={this.state.activeStep} getHeader={this.props.header(this.state.activeStep)} />,
            <GetShippingOption wizardContext={this.props.wizardContext} onAction={(action) => this.handleAction(action)}
                               activeStep={this.state.activeStep} getHeader={this.props.header(this.state.activeStep)} />,
            <Confirm wizardContext={this.props.wizardContext} onAction={(action) => this.handleAction(action)}
                     activeStep={this.state.activeStep} getHeader={this.props.header(this.state.activeStep)} />
        ];
        return steps[index];
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Stepper activeStep={this.state.activeStep}>
                    {this.props.steps.map((label, index) => {
                        const props = {};
                        const labelProps = {};
                        return (

                            <Step key={label} {...props}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {
                    <div style={{marginTop: "2%"}}>
                        <Paper className={classes.paper}>
                            {this.renderSteps(this.state.activeStep)}
                        </Paper>
                    </div>
                }
            </div>
        );
    }
}

Wizard.propTypes = {
    header: PropTypes.func.isRequired,
    steps: PropTypes.array.isRequired,
    wizardContext: PropTypes.object.isRequired,
    onComplete: PropTypes.func.isRequired
};

export default withStyles(styles)(Wizard);
