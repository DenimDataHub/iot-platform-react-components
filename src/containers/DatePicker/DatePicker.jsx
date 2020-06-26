import "react-datepicker/dist/react-datepicker.css";

import enGb from "date-fns/locale/en-GB";
import PropTypes from "prop-types";
import React, { useState } from "react";
import DatePickerWrapper, { registerLocale } from "react-datepicker";
import styled from "styled-components";

import { DatePickerCustomInput } from "./DatePickerCustomInput";
import { DatePickerStyles } from "./datePickerStyles";

registerLocale("en-gb", enGb);

const Container = styled.div`
  ${DatePickerStyles}
`;

export const DatePicker = ({ dateFormat }) => {
  const [startDate, setStartDate] = useState(new Date());
  const ref = React.createRef();

  return (
    <Container>
      <DatePickerWrapper
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat={dateFormat}
        formatWeekDay={day => day.substring(0, 1)}
        customInput={<DatePickerCustomInput />}
        locale="en-gb"
        ref={ref}
      />
    </Container>
  );
};

DatePicker.propTypes = {
  /** How the date should be displayed */
  dateFormat: PropTypes.string
};

DatePicker.defaultProps = {
  dateFormat: "dd.MM.yyyy"
};