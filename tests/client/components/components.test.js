import React from 'react';
import { shallow } from '../../enzyme';

import Prompt from '../../../src/client/components/Prompt';
// import Input from '../../../src/client/components/Input';
import ValidWords from '../../../src/client/components/ValidWords';
import ValidInput from '../../../src/client/components/ValidInput';
import CurrChar from '../../../src/client/components/CurrChar';
import NextChar from '../../../src/client/components/NextChar';
import InvalidInput from '../../../src/client/components/InvalidInput';
import RemainingChars from '../../../src/client/components/RemainingChars';
import RemainingWords from '../../../src/client/components/RemainingWords';

describe('component tests', () => {
  let wrapper;

  describe('<Prompt/>', () => {
    beforeAll(() => {
      wrapper = shallow(<Prompt/>);
    });

    test('should return a div', () => {
      expect(wrapper.find('div')).toHaveLength(1);
    });
  });

  describe('<ValidWords/>', () => {
    beforeAll(() => {
      wrapper = shallow(<ValidWords validWords='a' sendAndUpdateValidWords={() => {}}/>);
    });

    test('should have a span', () => {
      expect(wrapper.find('span')).toHaveLength(1);
    });

    test('the span should have a class of validWords', () => {
      expect(wrapper.find('.validWords')).toHaveLength(1);
    });

    test('the text in the span should match the validWords prop passed to it', () => {
      expect(wrapper.text()).toEqual('a');
    });
  });

  describe('<ValidInput/>', () => {
    beforeAll(() => {
      wrapper = shallow(<ValidInput validInput='a' sendAndUpdateValidInput={() => {}}/>);
    });

    test('should have a span', () => {
      expect(wrapper.find('span')).toHaveLength(1);
    });

    test('the span should have a class of validInput', () => {
      expect(wrapper.find('.validInput')).toHaveLength(1);
    });

    test('the text in the span should match the validInput prop passed to it', () => {
      expect(wrapper.text()).toEqual('a');
    });
  });

  describe('<CurrChar/>', () => {
    beforeAll(() => {
      wrapper = shallow(<CurrChar currChar='a' sendAndUpdateCurrChar={() => {}}/>);
    });

    test('should have a span', () => {
      expect(wrapper.find('span')).toHaveLength(1);
    });

    test('the span should have a class of currChar', () => {
      expect(wrapper.find('.currChar')).toHaveLength(1);
    });

    test('the text in the span should match the currChar prop passed to it', () => {
      expect(wrapper.text()).toEqual('a');
    });
  });

  describe('<NextChar/>', () => {
    beforeAll(() => {
      wrapper = shallow(<NextChar nextChar='a' sendAndUpdateNextChar={() => {}}/>);
    });

    test('should have a span', () => {
      expect(wrapper.find('span')).toHaveLength(1);
    });

    test('the span should have a class of nextChar', () => {
      expect(wrapper.find('.nextChar')).toHaveLength(1);
    });

    test('the text in the span should match the nextChar prop passed to it', () => {
      expect(wrapper.text()).toEqual('a');
    });
  });

  describe('<InvalidInput/>', () => {
    beforeAll(() => {
      wrapper = shallow(<InvalidInput invalidInput='a' sendAndUpdateInvalidInput={() => {}}/>);
    });

    test('should have a span', () => {
      expect(wrapper.find('span')).toHaveLength(1);
    });

    test('the span should have a class of invalidInput', () => {
      expect(wrapper.find('.invalidInput')).toHaveLength(1);
    });

    test('the text in the span should match the invalidInput prop passed to it', () => {
      expect(wrapper.text()).toEqual('a');
    });
  });

  describe('<RemainingChars/>', () => {
    beforeAll(() => {
      wrapper = shallow(<RemainingChars remainingChars='a' sendAndUpdateRemainingChars={() => {}}/>);
    });

    test('should have a span', () => {
      expect(wrapper.find('span')).toHaveLength(1);
    });

    test('the span should have a class of remainingChars', () => {
      expect(wrapper.find('.remainingChars')).toHaveLength(1);
    });

    test('the text in the span should match the remainingChars prop passed to it', () => {
      expect(wrapper.text()).toEqual('a');
    });
  });

  describe('<RemainingWords/>', () => {
    beforeAll(() => {
      wrapper = shallow(<RemainingWords remainingWords='a' sendAndUpdateRemainingWords={() => {}}/>);
    });

    test('should have a span', () => {
      expect(wrapper.find('span')).toHaveLength(1);
    });

    test('the span should have a class of remainingWords', () => {
      expect(wrapper.find('.remainingWords')).toHaveLength(1);
    });

    test('the text in the span should match the remainingWords prop passed to it', () => {
      expect(wrapper.text()).toEqual('a');
    });
  });
})