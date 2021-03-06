import PropTypes from "prop-types";
import React, { useState } from "react";

import { Checkbox } from "./Checkbox";

export const CheckboxWrapper = ({ onToggle, label }) => {
  const [checked, setChecked] = useState(false);

  const onCheckboxChange = () => {
    setChecked(!checked);
    onToggle(!checked);
  };

  return (
    <Checkbox checked={checked} label={label} onChange={onCheckboxChange} />
  );
};

CheckboxWrapper.propTypes = {
  onToggle: PropTypes.func,
  label: PropTypes.string
};

CheckboxWrapper.defaultProps = {
  onToggle: () => {},
  label: ""
};
