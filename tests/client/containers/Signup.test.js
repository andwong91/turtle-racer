import React from 'react';
import { shallow } from '../../enzyme';

import { Signup } from '../../../src/client/containers/Signup';

// mock the redux store to test mapDispatchToProps and mapStateToProps
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

describe('<Signup/>', () => {
  const mockFn = jest.fn(Boolean);

  test('back to signup button should call a function', () => {
    const wrapper = shallow(<Signup setLoginSignupToggle={mockFn} />);
    wrapper.find('.button').simulate('click', { preventDefault() {}});
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  let wrapper;
  let store;

  beforeEach(() => {
    const initialState = {
      isLoggedIn: false,
      loginSignupToggle: true
    };

    store = mockStore(initialState);
    wrapper = shallow(<Signup store={store}/>);
  });

  test('contains a signup form', () => {
    expect(wrapper.find('#signup-form')).toHaveLength(1);
  });
  
  test('contains an h1 header with signup as text', () => {
    expect(wrapper.contains(<h1>Signup</h1>)).toBeTruthy();
  });

  test('contains four input fields', () => {
    expect(wrapper.find('input')).toHaveLength(4);
  });

  test('should show current login status', () => {
    expect(wrapper.props().isLoggedIn).toBeFalsy();
  });
});