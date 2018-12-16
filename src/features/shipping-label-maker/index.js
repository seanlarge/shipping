import React from 'react';
import Wizard from '../../core/components/wizard';

export default class ShippingLabelMaker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wizardContext: {
                from: {
                    name: "John Smith",
                    street: "131 Dartmouth St",
                    city: "Boston",
                    state: "MA",
                    zip: "02116"
                },
                to: {
                    name: "Linda Jackson",
                    street: "40 Fulton St",
                    city: "New York",
                    state: "NY",
                    zip: "10038"
                },
                weight: 2,
                shippingOption: 1
            },
            activeStep: 0
        }
    }

    handleNext = () => {
        this.setState({
            activeStep: this.state.activeStep + 1
        });
    };

    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1
        });

    };

    reset = () => {
        this.setState({
            activeStep: 0
        });
    };

    render() {
        //wizard propTypes
        // propTypes = {
        //     header: PropTypes.func.isRequired,
        //     steps: PropTypes.array.isRequired,
        //     wizardContext: PropTypes.object.isRequired,
        //     onComplete: PropTypes.func.isRequired
        // };
        return (
            <Wizard wizardContext={this.state.wizardContext}
                    steps={["Your Address", "Receivers Address", "Weight", "Shipping Options", "Confirm"]}
                    activeStep={this.state.activeStep}
                    next={() => this.handleNext()}
                    back={() => this.handleBack()}
                    reset={() => this.reset()}
            />
        );
    }
}