import React from 'react';
import Grid from '@material-ui/core/Grid';
import Wizard from '../../core/components/wizard';
import Typography from '@material-ui/core/Typography';

export default class ShippingLabelMaker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wizardContext: {
                from: {
                    name: "Sean Large",
                    street: "1123 hope st sw, apt 100",
                    city: "Washington",
                    state: "DC",
                    zip: "20045"
                },
                to: {
                    name: "Jenny Sweet",
                    street: "234 test street",
                    city: "Augusta",
                    state: "GA",
                    zip: "34543"
                },
                weight: null,
                shippingOption: ""
            }
        }
    }
    getHeader = (activeStep) =>{
        switch (activeStep) {
            case 0:
                return "Enter the senders address";
            case 1:
                return "Enter the receivers address";
            case 2:
                return 'Enter item weight';
            case 3:
                return 'Choose your shipping option';
            case 4:
                return 'Confirm the Details';
            default:
                return 'Unknown step';
        }
    };

    handleOnComplete = () =>{
        console.log(this.state.wizardContext);
    };

    render() {
        return (
            <div style={{display: "flex", justifyContent: "center", flexFlow: "row wrap", alignItems: "stretch", marginTop:"2%"}}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Typography component="h2" variant="display2" gutterBottom>
                           Shipping Label Maker
                        </Typography>
                        <Wizard
                            header={(activeStep) => this.getHeader(activeStep)}
                            wizardContext={this.state.wizardContext}
                            steps={["Sender Address", "Receiver Address", "Weight", "Shipping Options", "Confirmation"]}
                            onComplete={() => this.handleOnComplete()}
                        />
                    </Grid>
                </Grid>
            </div>

        );
    }
}