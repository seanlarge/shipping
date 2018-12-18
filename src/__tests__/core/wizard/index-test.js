import React from 'react';
import ReactDOM from 'react-dom';
import Wizard from '../../../core/components/wizard/index';
import sinon from 'sinon';
import chai from 'chai';
const expect = chai.expect;

//TODO enzyme setup should be in setup file

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


import {shallow, mount, render} from 'enzyme';
import GetSenderAddress from "../../../features/shipping-label-maker/steps/get-sender-address";


describe("Wizard: ", () =>{
    let handleOnComplete;
    let wizardContext;
    beforeEach(() =>{
        handleOnComplete = sinon.spy();
         wizardContext = {
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
    });

    it('renders without crashing', (done) => {

        const div = document.createElement('div');
        ReactDOM.render(<Wizard header={() => {return "some type of header"}}
                                wizardContext={wizardContext}
                                steps={["Sender Address", "Receiver Address", "Weight", "Shipping Options", "Confirmation"]}
                                onComplete={() => handleOnComplete()}/>, div);
        expect(wizardContext.from.name).to.equal("Sean Large");
        ReactDOM.unmountComponentAtNode(div);
        done();
    });

    it('calls componentDidMount', (done) => {
        sinon.spy(Wizard.prototype, 'componentDidMount');
        const wrapper = mount(<Wizard header={() => {return "some type of header"}}
                                      wizardContext={wizardContext}
                                      steps={["Sender Address", "Receiver Address", "Weight", "Shipping Options", "Confirmation"]}
                                      onComplete={() => handleOnComplete()}/>);
        expect(Wizard.prototype.componentDidMount).to.have.property('callCount', 1);
        done();
    });

    it('allows us to set wizardContext', (done) => {
        const wrapper = mount(<Wizard header={() => {return "some type of header"}}
                                      wizardContext={wizardContext}
                                      steps={["Sender Address", "Receiver Address", "Weight", "Shipping Options", "Confirmation"]}
                                      onComplete={() => handleOnComplete()}/>);
        let newWizardContext ={
            from: {
                name: "Sean Large",
                street: "",
                city: "",
                state: "",
                zip: ""
            },
            to: {
                name: "James",
                street: "123 st",
                city: "Washington",
                state: "DC",
                zip: "20003"
            },
            weight: null,
            shippingOption: ""
        };
        expect(wrapper.props().wizardContext).to.equal(wizardContext);
        wrapper.setProps({ wizardContext: newWizardContext });
        expect(wrapper.props().wizardContext).to.equal(newWizardContext);
        done();
    });

   

});
