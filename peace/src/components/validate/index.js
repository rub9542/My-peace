let checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let checkName = /^[a-zA-Z\s]+$/;

export const validatedataObj = (values) => {
  let errors = {};
  let errorMsg = "This field is required";
  let dataObject = Object.keys(values);
  let removeItem = dataObject.indexOf("information");

  if (removeItem > -1) {
    dataObject.splice(removeItem, 1);
  }
  dataObject.forEach((x) => {
    let fieldArray = {};
    switch (x) {
      case "name":
        fieldArray =
          values[x].length === 0
            ? (errors[x] = errorMsg)
            : !checkName.test(values[x]) ||
              values[x].replace(/\s/g, "").length === 0
            ? (errors[x] = "Please enter a valid name")
            : "";
        break;
      case "email":
        fieldArray =
          values[x].length === 0
            ? (errors[x] = errorMsg)
            : !checkEmail.test(values[x])
            ? (errors[x] = "Please enter a valid email")
            : "";
        break;

      default:
        fieldArray = values[x].length === 0 ? (errors[x] = errorMsg) : "";
        break;
    }
  });
  return errors;
};

// fieldArray.map((x) => {
//   switch (dataObject) {
//     case "name":
//       if (
//         !checkName.test(values[x]) ||
//         values[x].replace(/\s/g, "").length === 0
//       ) {
//         errors[x] = "Please enter a valid name";
//       }
//       break;
//     default:
//       switch (x) {
//         case "email":
//           if (!checkEmail.test(values[x])) {
//             errors[x] = "Please enter a valid email";
//           }
//           break;
//       }
//   }

//   if (values[x].length === 0) {
//     errors[x] = errorMsg;
//     return false;
//   } else {
//     return true;
//   }

//   // if (
//   //   (x === "name" && !checkName.test(values[x])) ||
//   //   values[x].replace(/\s/g, "").length === 0
//   // ) {
//   //   errors[x] = "Please enter a valid name";
//   //   error = true;
//   // } else if (x === "email" && !checkEmail.test(values[x])) {
//   //   errors[x] = "Please enter a valid email";
//   //   error = true;
//   // } else {
//   //   return "";
//   // }
//   // if (values[x].length === 0) {
//   //   errors[x] = errorMsg;
//   // } else {
//   //   return true;
//   // }
// });
// values[x].length === 0:
//       errors[x] = errorMsg;
//       break;
