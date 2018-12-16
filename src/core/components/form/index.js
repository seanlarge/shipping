import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

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

const AddressForm = (props) => (
        <form action="">
            <TextField
                required
                label="Name"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                variant="filled"
            />
            <TextField
                required
                label="Street"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                variant="filled"
            />
            <TextField
                required
                label="City"
                className={props.classes.textField}
                //value={this.state.name}
                //onChange={this.handleChange('name')}
                margin="normal"
            />
            <TextField
                required
                label="State"
                className={props.classes.textField}
                margin="normal"
            />
            <TextField
                required
                label="Zip"
                className={props.classes.textField}
                margin="normal"
            />
        </form>
);

AddressForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddressForm);