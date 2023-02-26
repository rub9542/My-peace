import React, { useState } from "react";

import { PrimaryLargeButton } from "../button";
import {
  FormField,
  FormInput,
  FormLabel,
  FormError,
} from "../form/formStyle";
import {
  ModalContentSection,
  SuccessModalContentWrapper,
} from "./bookAppointmentStyle";
import Dropdown from "../dropdown";
import PhoneNumberInput from "../phoneNumberInut";
import { postMethod } from "../../api";
import { validatedataObj } from "./validate";
const appointmentOptions = [
  {
    label: "In Person",
    value: "in-progress",
  },
  {
    label: "Online",
    value: "online",
  },
];

export default function ModalContent(props) {
  const { displayMsg, setDisplayMsg } = props;
  const [appointmentObj, setAppointmentObj] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
  });
  const [errorObj, setErrorObj] = useState({});
  // const [displayMsg, setDisplayMsg] = useState(false);

  const handleChangeAppointment = (e) => {
    const { name, value } = e.target;
    setAppointmentObj({ ...appointmentObj, [name]: value });
    if (Object.keys(errorObj).length !== 0) {
      delete errorObj[name];
    }
  };

  const handlePhoneNumber = (number) => {
    setAppointmentObj({ ...appointmentObj, phone: number });
    if (Object.keys(errorObj).length !== 0) {
      delete errorObj["phone"];
    }
  };

  const handleDropOption = (e) => {
    const { value } = e;
    setAppointmentObj({ ...appointmentObj, type: value });
    if (Object.keys(errorObj).length !== 0) {
      delete errorObj["type"];
    }
  };

  const bookAppointmentButton = async () => {
    const err = validatedataObj(appointmentObj);
    if (Object.keys(err).length === 0) {
      let url = `bookings`;
      let payloaddata = {
        data: appointmentObj,
      };
      const newDataObj = await postMethod(url, payloaddata);
      const { status } = newDataObj;
      if (status === 200) {
        setDisplayMsg(true);
      } else {
        setDisplayMsg(false);
      }
    } else {
      setErrorObj({ ...errorObj, ...err });
    }
  };


  return (
    <>
      {!displayMsg ? (
        <ModalContentSection>
          <FormField>
            <FormLabel>Name</FormLabel>
            <FormInput
              placeholder="Enter your name"
              name="name"
              value={appointmentObj.name}
              onChange={handleChangeAppointment}
            />
            {errorObj.name && <FormError>{errorObj.name}</FormError>}
          </FormField>
          <FormField>
            <FormLabel>Email</FormLabel>
            <FormInput
              placeholder="Enter your email"
              name="email"
              value={appointmentObj.email}
              onChange={handleChangeAppointment}
            />
            {errorObj.email && <FormError>{errorObj.email}</FormError>}
          </FormField>
          <FormField>
            <FormLabel>Phone number</FormLabel>
            <PhoneNumberInput
              value={appointmentObj.phone}
              name="phone"
              onChange={handlePhoneNumber}
            />
            {errorObj.phone && <FormError>{errorObj.phone}</FormError>}
          </FormField>

          <FormField>
            <FormLabel>Appointment type</FormLabel>
            <Dropdown
              options={appointmentOptions}
              value={appointmentObj.type}
              name="type"
              onChange={handleDropOption}
            />
            {errorObj.type && <FormError>{errorObj.type}</FormError>}
          </FormField>
          <PrimaryLargeButton
            name="Book an Appointment"
            onClick={bookAppointmentButton}
          />
        </ModalContentSection>
      ) : (
        <SuccessModalContentWrapper>
          <p>Your appointment has been booked</p>
        </SuccessModalContentWrapper>
      )}
    </>
  );
}
