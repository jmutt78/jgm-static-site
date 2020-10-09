import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Purple from '../../assets/city.svg';

import {
  Root,
  Container,
  Column,
  ImageContainer,
  SVGContainer,
} from './styles';

export default () => {
  return (
    <SVGContainer>
      <Root>
        <Container>
          <Column>
            <h1>Your Trusted Partner in Software Development</h1>
            <h2>
              I build beautiful, functional websites and applications for
              businesses because I love them.
            </h2>
            <ImageContainer></ImageContainer>
          </Column>
        </Container>
      </Root>
      <Purple />
    </SVGContainer>
  );
};
