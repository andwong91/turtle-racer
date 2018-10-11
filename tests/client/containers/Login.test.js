import React from 'react';
import { shallow } from '../../enzyme';

import { Login } from '../../../src/client/containers/Login';

// mock the redux store to test mapDispatchToProps and mapStateToProps
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

describe('<Login/>', () => {
  const mockFn = jest.fn(Boolean);

  test('signup button should call a function', () => {
    const wrapper = shallow(<Login setLoginSignupToggle={mockFn} />);
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
    wrapper = shallow(<Login store={store}/>);
  });

  test('contains a login form', () => {
    expect(wrapper.find('#login-form')).toHaveLength(1);
  });
  
  test('contains an h1 header with Login as text', () => {
    expect(wrapper.contains(<h1>Login</h1>)).toBeTruthy();
  });

  test('contains four input fields', () => {
    expect(wrapper.find('input')).toHaveLength(4);
  });

  test('should show current login status', () => {
    expect(wrapper.props().isLoggedIn).toBeFalsy();
  });
});