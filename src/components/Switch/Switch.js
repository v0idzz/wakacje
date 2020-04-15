import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { currentTheme } from '../../utils/Theme';
import { darken } from 'polished';

const Label = styled.label`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  opacity: 0;
`;

const darkerBgColor = darken(0.1, currentTheme.backgroundColor);

const Slide = styled.div`
  background-color: ${darkerBgColor};
  border: 2px solid ${darkerBgColor};
  border-radius: 45px;
  display: inline-block;
  height: 40px;
  margin: 0 0.5em;
  padding: 0 1px;
  width: 75px;

  ${Input}:checked ~ & {
    background-color: ${currentTheme.textColor};
    border-color: ${currentTheme.textColor};
  }
`;

const Thumb = styled.div`
  background-color: ${currentTheme.textColor};
  border-radius: 50%;
  display: block;
  height: 40px;
  transition: .2s margin-left linear;
  width: 40px;

  ${Input}:checked ~ ${Slide} > & {
    background-color: ${darkerBgColor};
    margin-left: calc(50% - 3px);
  }
`;

const Switch = ({ children, className, ...props }) => {
  return (
    <Label className={className}>
      <Input type="checkbox" {...props}/>
      {children}
      <Slide>
        <Thumb/>
      </Slide>
    </Label>
  );
};

Switch.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Switch;
