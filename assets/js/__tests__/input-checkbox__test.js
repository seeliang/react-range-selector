/* eslint-disable */

jest.unmock('../src/input-checkbox');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Checkbox from '../src/input-checkbox';

describe('CheckboxWithLabel', () => {

  it('changes the text after click', () => {
    const checkbox = TestUtils.renderIntoDocument(
      <Checkbox stateClass={'is-in-range'} />
    );

    const checkboxNode = ReactDOM.findDOMNode(checkbox);

    expect(checkboxNode.className).toEqual('range-selector__item-input is-in-range');

  });

});
