import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class AddressForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            errorText: ''
        }
    }

    handleChange = (e, key) => {
        //TODO Validate if Zip is actually a number
        this.props.wizardContext[key] = e.target.value;
        if (e.target.value === "") {

            this.setState({ errorText: 'This field is required' })
        } else {
            this.setState({ errorText: '' })
        }

    };

    render() {
        const {classes} = this.props;
        return (
            <form action="">
                <TextField
                    required
                    helperText={this.state.errorText}
                    error ={this.state.errorText.length === 0 ? false : true }
                    label="Name"
                    onChange={(e) => this.handleChange(e, 'name')}
                    defaultValue={this.props.wizardContext.name}
                    style={{margin: 8}}
                    fullWidth
                    margin="normal"
                    variant="filled"
                />
                <TextField
                    required
                    helperText={this.state.errorText}
                    error ={this.state.errorText.length === 0 ? false : true }
                    label="Street"
                    onChange={(e) => this.handleChange(e, 'street')}
                    defaultValue={this.props.wizardContext.street}
                    style={{margin: 8}}
                    fullWidth
                    margin="normal"
                    variant="filled"
                />
                <TextField
                    required
                    helperText={this.state.errorText}
                    error ={this.state.errorText.length === 0 ? false : true }
                    label="City"
                    className={classes.textField}
                    defaultValue={this.props.wizardContext.city}
                    onChange={(e) => this.handleChange(e, 'city')}
                    margin="normal"
                />
                <TextField
                    required
                    helperText={this.state.errorText}
                    error ={this.state.errorText.length === 0 ? false : true }
                    label="State"
                    onChange={(e) => this.handleChange(e,'state')}
                    defaultValue={this.props.wizardContext.state}
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    required
                    helperText={this.state.errorText}
                    error ={this.state.errorText.length === 0 ? false : true }
                    label="Zip"
                    onChange={(e) => this.handleChange(e,'zip')}
                    defaultValue={this.props.wizardContext.zip}
                    className={classes.textField}
                    margin="normal"
                />
            </form>
        );
    }
}


AddressForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddressForm);