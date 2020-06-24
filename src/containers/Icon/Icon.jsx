import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const IconStyled = styled.span`
  font-size: 4rem;
  text-align: center;
`;

export const Icon = ({ name, as }) => (
  <IconStyled className={["lni", `lni-${name}`]} as={as} />
);

export const names = [
  "home",
  "users",
  "rocket",
  "briefcase",
  "cog",
  "eye",
  "checkmark",
  "pyramids",
  "chevron-down",
  "chevron-up"
];
export const iconNameProps = PropTypes.oneOf(names);

Icon.propTypes = {
  name: PropTypes.oneOf(names),
  as: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ render: PropTypes.func.isRequired })
  ])
};

Icon.defaultProps = {
  name: "",
  as: null
};
