export const signupInputs = [
  {
    label: 'First name',
    type: 'text',
    id: 'firstname',
    name: 'firstname',
    autoComplete: 'given-name',
    required: true,
    errorMessage: 'First name is required.',
  },
  {
    label: 'Last name',
    type: 'text',
    id: 'lastname',
    name: 'lastname',
    autoComplete: 'family-name',
  },
  {
    label: 'Email address',
    type: 'email',
    id: 'email',
    name: 'email',
    autoComplete: 'email',
    required: true,
    errorMessage: 'Please enter a valid email address.',
  },
  {
    label: 'Phone',
    type: 'tel',
    id: 'phoneNo',
    name: 'phoneNo',
    autoComplete: 'tel',
    required: true,
    pattern: '(0|91)?[6-9][0-9]{9}',
    errorMessage:
      'Please enter a valid phone number so we can call if there are any issues with delivery.',
  },
  {
    label: 'Password',
    type: 'password',
    id: 'password',
    name: 'password',
    autoComplete: 'new-password',
    required: true,
    pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$',
    errorMessage:
      'Password must be 6-20 characters long and should contain atleast one digit, one letter and one special character.',
  },
  {
    label: 'Confirm password',
    type: 'password',
    id: 'confirm-password',
    name: 'confirmPassword',
    autoComplete: 'new-password',
    required: true,
    errorMessage: "Passwords don't match.",
  },
];

export const loginInputs = [
  {
    label: 'Email address',
    type: 'email',
    id: 'email',
    name: 'email',
    autoComplete: 'email',
    required: true,
    errorMessage: 'Please enter a valid email address.',
  },
  {
    label: 'Password',
    type: 'password',
    id: 'password',
    name: 'password',
    autoComplete: 'current-password',
    required: true,
    pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$',
    errorMessage:
      'Password must be 6-20 characters long and should contain atleast one digit, one letter and one special character.',
    isLogin: true,
  },
];

export const forgotPasswordInput = {
  label: 'Email address',
  type: 'email',
  id: 'email',
  name: 'email',
  autoComplete: 'email',
  required: true,
  errorMessage: 'Please enter a valid email address.',
};

export const addressInputs = [
  {
    label: 'Full name',
    type: 'text',
    id: 'fullname',
    name: 'fullname',
    autoComplete: 'name',
    required: true,
    errorMessage: 'Please enter a name.',
  },
  {
    label: 'Phone',
    type: 'tel',
    id: 'phoneNo',
    name: 'phoneNo',
    autoComplete: 'tel',
    required: true,
    pattern: '(0|91)?[6-9][0-9]{9}',
    errorMessage:
      'Please enter a valid phone number so we can call if there are any issues with delivery.',
  },
  {
    label: 'Flat, building, apartment',
    type: 'text',
    id: 'line1',
    name: 'line1',
    autoComplete: 'address-line1',
    required: true,
    errorMessage: 'Please enter an address.',
  },
  {
    label: 'Area, street, sector',
    type: 'text',
    id: 'line2',
    name: 'line2',
    autoComplete: 'address-line2',
  },
  {
    label: 'Landmark',
    type: 'text',
    id: 'landmark',
    name: 'landmark',
    placeholder: 'E.g. near apollo hospital',
  },
  {
    label: 'Country',
    id: 'country',
    name: 'country',
    autoComplete: 'country-name',
    required: true,
    errorMessage: 'Please enter a country.',
  },
  {
    label: 'State',
    id: 'state',
    name: 'state',
    required: true,
    errorMessage: 'Please enter a state, region or province.',
  },
  {
    label: 'City',
    id: 'city',
    name: 'city',
    required: true,
    errorMessage: 'Please enter a city name.',
  },
  {
    label: 'Postal code',
    type: 'text',
    id: 'postal-code',
    name: 'postalCode',
    autoComplete: 'postal-code',
    required: true,
    pattern: '^[1-9]{1}[0-9]{2}s{0,1}[0-9]{3}$',
    errorMessage: 'Please enter a valid ZIP or postal code.',
  },
];
