import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';

describe('<Header/>', () => {
  it('Provjera da li renderuje pocetnu formu', () => {
    const wrapper = shallow(<Header/>)
    expect(wrapper.find('#meni').exists()).toBe(true)
  })

  it('Provjera da li ima link Home', () => {
    const wrapper = shallow(<Header/>)
    expect(wrapper.find('#home').exists()).toBe(true)
  })
  
  it('Provjera da li ima link za dodavanje uposlenika', () => {
    const wrapper = shallow(<Header/>)
    expect(wrapper.find('#addemp').exists()).toBe(true)
  })
})