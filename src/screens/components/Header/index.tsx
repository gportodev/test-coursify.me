import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Container, Image, Icon } from './styles';

import Logo from '../../../assets/logo.png';

export function Header() {
  const theme = useTheme();

  return (
    <Container>
      <Image source={Logo} />
      <Icon>
        <Feather
          name="align-justify"
          size={24}
          color={theme.colors.background_primary}
        />
      </Icon>
    </Container>
  );
}
