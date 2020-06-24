import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { CheckboxWrapper } from "../Checkbox/CheckboxWrapper";
import { Icon } from "../Icon/Icon";

const Container = styled.div`
  width: 300px;
  position: relative;
`;

const DropdownContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  border: 1px solid #0f181c;
  background: #0f181c;
  border-radius: 4px;
  padding: 1.25em;
  cursor: pointer;
`;

const ItemList = styled.ul`
  width: 100%;
  padding: 0;
  background: #0f181c;
  position: absolute;
  top: 22px;
  border-radius: 0 0 4px 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
`;

const DropdownItem = styled.li`
  padding-top: 1em;
  padding-left: 0.5em;
`;

const DropdownText = styled.span`
  color: ${({ color }) => color || "#999"};
  font-size: 1.25em;
  font-weight: bold;
`;

export const Dropdown = ({ isOpen, label, onClick, items, amountSelected }) => {
  const generateList = listItems =>
    listItems.map(item => (
      <DropdownItem key={item.label}>
        <CheckboxWrapper label={item.label} />
      </DropdownItem>
    ));

  return (
    <Container>
      <DropdownContainer onClick={onClick}>
        <DropdownText>{label}</DropdownText>
        {isOpen && (
          <DropdownText color="#90ee7e">{`${amountSelected} selected`}</DropdownText>
        )}
        <Icon name={isOpen ? "chevron-up" : "chevron-down"} as={DropdownText} />
      </DropdownContainer>
      {isOpen && <ItemList>{generateList(items)}</ItemList>}
    </Container>
  );
};

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ),
  amountSelected: PropTypes.number
};

Dropdown.defaultProps = {
  isOpen: false,
  label: "",
  onClick: () => {},
  items: [],
  amountSelected: 0
};