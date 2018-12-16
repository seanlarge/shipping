import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import GetSenderAddress from './steps/get-sender-address';
import GetReceiverAddress from './steps/get-receiver-address';
import GetWeight from './steps/get-weight';
import GetShippingOption from './steps/get-shipping-option';
import Confirm from './steps/confirm';

const styles = theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});





class HorizontalLinearStepper extends React.Component {



handleNext = () => {
    this.props.next();
};

handleBack = () => {
    this.props.back();

};


handleReset = () => {
    this.props.reset();
};


render()
{
    const {classes} = this.props;

    return (
        <div className={classes.root}>
            <Stepper activeStep={this.props.activeStep}>
               <GetSenderAddress wizardContext={{test:"test"}} onAction={() => this.handleNext()} />
                <GetReceiverAddress wizardContext={{test:"test"}} onAction={() => this.handleNext()} />
                <GetWeight wizardContext={{test:"test"}} onAction={() => this.handleNext()} />
                <GetShippingOption wizardContext={{test:"test"}} onAction={() => this.handleNext()} />
                <Confirm wizardContext={{test:"test"}} onAction={() => this.handleNext()} />
            </Stepper>
            <div>
                {this.props.activeStep === this.props.steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            Shipping Label Created - you&apos;re finished
                        </Typography>
                        <Button onClick={this.handleReset} className={classes.button}>
                            Reset
                        </Button>
                    </div>
                ) : (
                    <div>
                        <div>
                            <Button
                                disabled={this.props.activeStep === 0}
                                onClick={this.handleBack}
                                className={classes.button}
                            >
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.handleNext}
                                className={classes.button}
                            >
                                {this.props.activeStep === this.props.steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
}

HorizontalLinearStepper.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(HorizontalLinearStepper);

//TODO we pass an array of steps via props but don't map them
// TODO Steps can be dynamically created like so below
{/*<Stepper activeStep={this.props.activeStep}>*/}
    {/*{this.props.steps.map((label, index) => {*/}
        {/*const props = {};*/}
        {/*const labelProps = {};*/}
        {/*return (*/}
            {/*<Step key={label} {...props}>*/}
                {/*<StepLabel {...labelProps}>{label}</StepLabel>*/}
            {/*</Step>*/}
        {/*);*/}
    {/*})}*/}
{/*</Stepper>*/}