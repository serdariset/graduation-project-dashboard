import { minLength, required, email } from "vuelidate/lib/validators";

/* const mustBeText = (value) => {
  const numbers = /^[0-9]+$/;
  const result = value.match(numbers);
  return result;
}; */

export const vuelidate = {
  validations: {
    user: {
      name: {
        required,
        minLength: minLength(8),
        
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
      },
    },
  },
};
