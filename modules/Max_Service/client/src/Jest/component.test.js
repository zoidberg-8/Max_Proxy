import React from 'react'

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { configure, mount, shallow, render } from 'enzyme';


// import App from '../components/app.jsx'

// import Accordion from '../components/accordion.jsx'

import ModalAllReviews from '../components/Modal.allreviews.jsx'


describe ('Component Rendering', () => {
  it('It renders ModalAllReviews Component', () => {
    const Wrapper = shallow(<ModalAllReviews />);
    expect((Wrapper).exists()).toBe(true)
  });






});