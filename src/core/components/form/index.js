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
            name:{
                errorText: ''
            },
            city: {
                errorText: ''
            },
            state: {
                errorText: ''
            },
            street: {
                errorText: ''
            },
            zip: {
                errorText: ''
            }
        }
    }

    handleChange = (e, key) => {
        //TODO Validate if Zip is actually a number
        this.props.wizardContext[key] = e.target.value;
        if (e.target.value === "") {
            this.setState({[key]: {errorText: 'This field is required'}});

        } else {
            this.setState({key: {errorText: ''}});
        }

    };

    render() {
        const {classes} = this.props;
        return (
            <form action="">
                <TextField
                    required
                    helperText={this.state.name.errorText}
                    error ={this.state.name.errorText.length !== 0 }
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
                    helperText={this.state.street.errorText}
                    error ={this.state.street.errorText.length !== 0 }
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
                    helperText={this.state.city.errorText}
                    error ={this.state.city.errorText.length !== 0 }
                    label="City"
                    className={classes.textField}
                    defaultValue={this.props.wizardContext.city}
                    onChange={(e) => this.handleChange(e, 'city')}
                    margin="normal"
                />
                <TextField
                    required
                    helperText={this.state.state.errorText}
                    error ={this.state.state.errorText.length !== 0 }
                    label="State"
                    onChange={(e) => this.handleChange(e,'state')}
                    defaultValue={this.props.wizardContext.state}
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    required
                    helperText={this.state.zip.errorText}
                    error ={this.state.zip.errorText.length !== 0 }
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