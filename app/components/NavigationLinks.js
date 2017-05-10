import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';

export const NavigationLinks = () => (
<nav id="nav">
  <LinkContainer to="/"><a id="navigation">Home</a></LinkContainer>
  <LinkContainer to="/about"><a id="navigation">About Us</a></LinkContainer>
  <LinkContainer to="/services"><a id="navigation">Services</a></LinkContainer>
  <LinkContainer to="/contact"><a id="navigation">Contact</a></LinkContainer>
</nav>
)
