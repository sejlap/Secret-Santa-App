import React from 'react';
import {shallow} from 'enzyme';
import AddEmployee from './AddEmployee';

describe('<AddEmployee />', () => {
  it('Provjera da li renderuje formu za unos uposlenika', () => {
    const wrapper = shallow(<AddEmployee/>)
    expect(wrapper.find('#div').exists()).toBe(true)
  })

  it('Provjera da li ima input za unos imena uposlenika', () => {
    const wrapper = shallow(<AddEmployee/>)
    expect(wrapper.find('#input1').exists()).toBe(true)
  })
  it('Provjera da li ima input za unos prezimena uposlenika', () => {
    const wrapper = shallow(<AddEmployee/>)
    expect(wrapper.find('#input2').exists()).toBe(true)
  })

  it('Provjera da li ima button za spremanje ', () => {
    const wrapper = shallow(<AddEmployee/>)
    expect(wrapper.find('#save').exists()).toBe(true)
  })
  

})