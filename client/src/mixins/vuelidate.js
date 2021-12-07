import { minLength, required, email } from "vuelidate/lib/validators";

const mustBeText = (value) => {
  const number = /[1-9]/g;
  const result = value.match(number);
  if (result !== null) {
    return false;
  } else {
    return true;
  }
};

const numeric = (value) => {
  const number = /[1-9]/g;
  const result = value.match(number);
  if (result == null) {
    return false;
  } else {
    return true;
  }
};
const uppercase = (value) => {
  const uppercase = /[A-Z]/g;
  const result = value.match(uppercase);
  if (result == null) {
    return false;
  } else {
    return true;
  }
};
const lowercase = (value) => {
  const lowercase = /[a-z]/g;
  const result = value.match(lowercase);
  if (result == null) {
    return false;
  } else {
    return true;
  }
};

export const vuelidate = {
  validations: {
    user: {
      name: {
        required,
        minLength: minLength(8),
        mustBeText,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
        numeric,
        uppercase,
        lowercase
      },
    },
  },
};
