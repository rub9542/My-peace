import React from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ValidationText } from "../../styles/homePageStyle";

export default function PhoneNumberInput({ value, onChange }) {
  return (
    <>
      <PhoneInput
        placeholder="Enter your phone number"
        onChange={(e) => onChange(e)}
        value={value}
        isValidPhoneNumber={isValidPhoneNumber}
        error={
          value
            ? isValidPhoneNumber(value)
              ? undefined
              : "Invalid phone number"
            : "Phone number required"
        }
      />
      {value && isValidPhoneNumber(value) ? (
        ""
      ) : (
        <>
          {value ? (
            <ValidationText>
              <p>Please enter a valid mobile number</p>
            </ValidationText>
          ) : null}
          {value === undefined ? (
            <ValidationText>
              <p>This field is required</p>
            </ValidationText>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
}
