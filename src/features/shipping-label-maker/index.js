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
            }
        }
    }
    getHeader = (activeStep) =>{
        switch (activeStep) {
            case 0:
                return 'Enter the sender\'\s address';
            case 1:
                return 'Enter the recevier\'\s address';
            case 2:
                return 'Enter item weight';
            case 3:
                return 'Choose your shipping option';
            case 4:
                return 'Confirm the Details';
            default:
                return 'Unknown step';
        }
    }

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