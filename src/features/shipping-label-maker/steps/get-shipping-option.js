import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import {withStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const styles = theme => ({

    button: {
        marginRight: theme.spacing.unit,
    },
    buttonContainer: {
        marginTop: "2%"
    },
    select:{
        width: "100px"
    }
});



class GetShippingOption extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ShippingOptions: {
                ground: 1,
                priority: 2
            }
        }
    }

    handleChange = (e) =>{
        console.log(e.target.value);
        this.props.wizardContext.shippingOption = e.target.value;
        this.props.selected(e.target.value);
        console.log(this.props.wizardContext);
    };

    render() {
        const {classes} = this.props;
        return (
            <div style={{display: this.props.activeStep === 3 ? "inline" : "none"}}>
                <Typography component="h2" variant="headline" gutterBottom>
                    {this.props.getHeader}
                </Typography>
                <form >
                    <FormControl>
                        <Select className={classes.select}
                                value={this.props.selected}
                                onChange={(e) => {this.handleChange(e)}}
                        >
                            {Object.entries(this.state.ShippingOptions).map((option,index) =>{
                                let optionName = option[0];
                                let optionValue = option[1];
                                return(
                                    <MenuItem key={optionName} value={optionValue}>{optionName}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </form>
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

GetShippingOption.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
};

export default withStyles(styles)(GetShippingOption);