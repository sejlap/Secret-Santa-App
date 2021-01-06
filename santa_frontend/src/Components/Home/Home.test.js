import React from 'react';
import {shallow} from 'enzyme';
import Home from './Home';

describe('<AddSynonym />', () => {
  it('Provjera da li renderuje pocetnu formu ', () => {
    const wrapper = shallow(<Home/>)
    expect(wrapper.find('#div').exists()).toBe(true)
  })
  it('Provjera da li ima button za spajanje uposlenika', () => {
    const wrapper = shallow(<Home/>)
    expect(wrapper.find('#match').exists()).toBe(true)
  })
  it('Provjera da li ima button za dodavanje novih uposlenika', () => {
    const wrapper = shallow(<Home/>)
    expect(wrapper.find('#add').exists()).toBe(true)
  })

})