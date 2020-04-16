import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { currentTheme } from '../../utils/Theme';

const Component = styled.a`
  text-decoration: ${currentTheme.linkDecorations};
`;

const Link = ({ to, children, ...props }) => (
  <Component href={to} {...props}>
    {children}
  </Component>
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Link;
