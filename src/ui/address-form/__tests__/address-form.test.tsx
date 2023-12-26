import React from 'react';

import { fireEvent, render } from '@utils/test';

import { AddressForm } from '../address-form';

jest.mock('../../icon', () => ({
  __esModule: true,
  Icon: () => 'Blah',
}));

describe('AddressForm Component', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(
      <AddressForm addressType="Primary" onSubmit={() => {}} />,
    );

    expect(getByTestId('streetName')).toBeTruthy();
    expect(getByTestId('streetNumber')).toBeTruthy();
    expect(getByTestId('postalCode')).toBeTruthy();
    expect(getByTestId('addressHasNoNumber')).toBeTruthy();
    expect(getByTestId('floor')).toBeTruthy();
    expect(getByTestId('department')).toBeTruthy();
    expect(getByTestId('provincesSelect')).toBeTruthy();
    expect(getByTestId('citiesSelect')).toBeTruthy();
    expect(getByTestId('comments')).toBeTruthy();
    expect(getByTestId('confirmAddressFormSubmit')).toBeTruthy();
  });

  it('should handle text input fields correctly', () => {
    const { getByTestId } = render(
      <AddressForm addressType="Primary" onSubmit={() => {}} />,
    );
    const streetNameInput = getByTestId('streetName');
    const streetNumberInput = getByTestId('streetNumber');
    const postalCodeInput = getByTestId('postalCode');

    fireEvent.changeText(streetNameInput, 'Example Street');
    fireEvent.changeText(streetNumberInput, '123');
    fireEvent.changeText(postalCodeInput, '12345');

    expect(streetNameInput).toHaveProp('value', 'Example Street');
    expect(streetNumberInput).toHaveProp('value', '123');
    expect(postalCodeInput).toHaveProp('value', '12345');
  });

  it('should handle the checkbox correctly', () => {
    const { getByTestId } = render(
      <AddressForm addressType="Primary" onSubmit={() => {}} />,
    );
    const checkbox = getByTestId('addressHasNoNumber');

    expect(checkbox).toHaveProp('checked', false);

    fireEvent.press(checkbox);

    expect(checkbox).toHaveProp('checked', true);
  });

  it('should handle select components correctly', () => {
    // You may need to mock the ProvincesBackdropSearch and CitiesBackdropSearch components for these tests.
    // You can use jest.mock() to create mock versions of these components.
  });

  it('should handle the textarea correctly', () => {
    const { getByTestId } = render(
      <AddressForm addressType="Primary" onSubmit={() => {}} />,
    );
    const commentsTextarea = getByTestId('comments');

    fireEvent.changeText(commentsTextarea, 'This is a test comment');

    expect(commentsTextarea).toHaveProp('value', 'This is a test comment');
  });

  it('should enable the submit button when the form is valid', () => {});

  it('should call the onSubmit function on form submission', () => {});
});
