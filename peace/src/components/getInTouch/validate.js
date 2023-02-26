const fieldArray = ["name", "email", "phone", "country", "information"];
let checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validatedataObj = (values) => {
  let errors = {};
  let errMsg = "This Field is Required";
  fieldArray.map((x) => {
    if (x === "phone" && values[x].length !== 0) {
      if (values[x].length !== 10) {
        errors[x] = "Please check your phone number";
      }
    } else if (x === "email" && values[x].length !== 0) {
      if (!checkEmail.test(values[x])) {
        errors[x] = "Please check your email";
      }
    } else {
      if (values[x].length === 0) {
        errors[x] = errMsg;
      }
    }
    return "";
  });

  return errors;
};
