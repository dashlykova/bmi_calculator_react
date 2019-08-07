import React from 'react';
import { mount, shallow } from 'enzyme';
import { stub } from 'sinon';
import MethodSelector from '../Components/methodSelector'

describe('<MethodSelect />', () => {
  it('has two methods to choose from', () => {
    const component = mount(<MethodSelector />);
    const selector = component.find('#method').instance()
    expect(selector.options.length).toEqual(2)
  }
  )
})
