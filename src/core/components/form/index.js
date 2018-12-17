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
    constructor(props) {
        super(props)
    }

    handleChange = (e, key) => {
        this.props.wizardContext[key] = e.target.value;

    };

    render() {
        const {classes} = this.props;
        return (
            <form action="">
                <TextField
                    required
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
                    label="City"
                    className={classes.textField}
                    defaultValue={this.props.wizardContext.city}
                    onChange={(e) => this.handleChange(e, 'city')}
                    margin="normal"
                />
                <TextField
                    required
                    label="State"
                    onChange={(e) => this.handleChange(e,'state')}
                    defaultValue={this.props.wizardContext.state}
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    required
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