export type AddressFormProps = {
  addressType: 'Primary' | 'Alternative';
  onSubmit: (values: SaveClientAddressForm) => void;
};

export type SaveClientAddressForm = {
  city: { id: string; description: string };
  postalCode: string;
  province: { id: string; description: string };
  streetName: string;
  streetNumber: string;
  type: string;
  comments?: string;
  department?: string;
  floor?: string;
  addressHasNoNumber: boolean;
};
