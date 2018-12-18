import React from 'react';
import ReactDOM from 'react-dom';
import Wizard from '../../../core/components/wizard/index';
import sinon from 'sinon';
import {shallow, mount} from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const handleOnComplete = sinon.spy();
    const wizardContext = {
        from: {
            name: "Sean Large",
                street: "",
                city: "",
                state: "",
                zip: ""
        },
        to: {
            name: "",
                street: "",
                city: "",
                state: "",
                zip: ""
        },
        weight: null,
            shippingOption: ""
    };

    ReactDOM.render(<Wizard header={() => {return "some type of header"}}
                            wizardContext={wizardContext}
                            steps={["Sender Address", "Receiver Address", "Weight", "Shipping Options", "Confirmation"]}
                            onComplete={() => handleOnComplete()}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
