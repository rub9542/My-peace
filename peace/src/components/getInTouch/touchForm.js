import React, { useMemo, useState, useEffect } from "react";

import { FormContainer } from "./getInTouchStyle";
import Select from "react-select";
import {
  FormField,
  FormInput,
  FormLabel,
  FormtextArea,
  FormError,
} from "../form/formStyle";
import { SuccessModalContentWrapper } from "../bookAppointmentModal/bookAppointmentStyle";
import { PrimaryLargeButton } from "../button";
import countryList from "react-select-country-list";
import { postMethod } from "../../api";
import { validatedataObj } from "./validate";

function TouchForm(props) {
  const [getIntouchForm, setgetIntouchForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    information: "",
  });
  const options = useMemo(() => countryList().getData(), []);
  const [errorObj, setErrorObj] = useState({});
  const [formSuccess, setformSuccess] = useState(false);
  const [countryListArr, setcountryListArr] = useState([]);

  const handleChanges = (val, name) => {
    setgetIntouchForm({ ...getIntouchForm, [name]: val });
    if (Object.keys(errorObj).length !== 0) {
      delete errorObj[name];
    }
  };
  useEffect(() => {
    convertCountry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  const convertCountry = () => {
    let tempArr = [];
    options.length > 0 &&
      options.map((x) => {
        let obj = {
          label: x.label,
          value: x.label,
        };
        tempArr.push(obj);
        return "";
      });
    setcountryListArr(tempArr);
  };

  const handlesubmit = async () => {
    const err = validatedataObj(getIntouchForm);
    if (Object.keys(err).length === 0) {
      let url = props.frompath || "get-in-touches";
      let payloaddata = {
        data: getIntouchForm,
      };
      const newDataObj = await postMethod(url, payloaddata);
      const { status } = newDataObj;
      if (status === 200) {
        setgetIntouchForm({
          name: "",
          email: "",
          phone: "",
          country: "",
          information: "",
        });
        setformSuccess(true);
      } else {
        setformSuccess(false);
      }
    } else {
      setErrorObj({ ...errorObj, ...err });
    }
  };
  return (
    <FormContainer
      padding={props.frompath === "virtual-consultations" ? "0" : "1.5rem"}
    >
      {!formSuccess ? (
        <>
          <FormField>
            <FormLabel>Name</FormLabel>
            <FormInput
              placeholder="Enter your name"
              name="name"
              onChange={(e) => handleChanges(e.target.value, "name")}
              value={getIntouchForm.name}
            />
            {errorObj.name && <FormError>{errorObj.name}</FormError>}
          </FormField>
          <FormField>
            <FormLabel>Email </FormLabel>
            <FormInput
              placeholder="Enter your email"
              name="email"
              type="email"
              onChange={(e) => handleChanges(e.target.value, "email")}
              value={getIntouchForm.email}
            />
            {errorObj.email && <FormError>{errorObj.email}</FormError>}
          </FormField>
          <FormField>
            <FormLabel>Phone number</FormLabel>
            <FormInput
              placeholder="Enter your phone number"
              name="phoneNumber"
              type="text"
              pattern="[1-9]{1}[0-9]{9}"
              value={getIntouchForm.phone}
              onChange={(e) => handleChanges(e.target.value, "phone")}
            />
            {errorObj.phone && <FormError>{errorObj.phone}</FormError>}
          </FormField>
          <FormField>
            <FormLabel>Country</FormLabel>
            <Select
              options={countryListArr}
              name="type"
              placeholder="Select country"
              defaultValue={getIntouchForm.country}
              onChange={(e) => handleChanges(e.label, "country")}
            />
            {errorObj.country && <FormError>{errorObj.country}</FormError>}
          </FormField>
          <FormField>
            <FormLabel>Additional information</FormLabel>
            <FormtextArea
              placeholder="Enter any additional information"
              value={getIntouchForm.information}
              onChange={(e) => handleChanges(e.target.value, "information")}
              rows="5"
              cols="50"
            />
            {errorObj.information && (
              <FormError>{errorObj.information}</FormError>
            )}
          </FormField>
          <PrimaryLargeButton name="Submit" onClick={handlesubmit} />
        </>
      ) : (
        <SuccessModalContentWrapper>
          <p>Your Request Has Been Submitted Successfully </p>
        </SuccessModalContentWrapper>
      )}
    </FormContainer>
  );
}

export default TouchForm;
