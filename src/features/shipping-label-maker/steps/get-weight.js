import  React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import {withStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    button: {
        marginRight: theme.spacing.unit,
    },
    buttonContainer:{
        marginTop: "2%"
    }
});

 class GetWeight extends React.Component{

    handleChange = (e) => {
        console.log(e.target.value);
    };

    render(){
        const {classes} = this.props;
        return (
            <div style={{display: this.props.activeStep === 2 ? "inline" : "none"}}>
                <Typography component="h2" variant="headline" gutterBottom>
                    {this.props.getHeader}
                </Typography>
                <FormControl>
                    <Input
                        id="adornment-weight"
                        value={this.props.wizardContext.weight}
                        onChange={(e) => this.handleChange(e)}
                        endAdornment={<InputAdornment position="end">lb</InputAdornment>}
                        inputProps={{
                            'aria-label': 'Weight',
                        }}
                    />
                </FormControl>
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

GetWeight.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
};

export default withStyles(styles)(GetWeight);