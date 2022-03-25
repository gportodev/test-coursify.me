import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import sanitizeHtml from 'sanitize-html';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Footer } from '../components/Footer';

import {
  Container,
  Header,
  Image,
  Icon,
  GoBack,
  Title,
  Description,
  Picture,
  Card,
} from './styles';

import Logo from '../../assets/logo.png';

const link = 'https://coursify.me/.';

export function InternArticle() {
  const route = useRoute();
  const theme = useTheme();
  const navigation = useNavigation();

  const { item } = route.params;

  return (
    <Container>
      <Header>
        <GoBack onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} />
        </GoBack>
        <Image source={Logo} />
        <Icon>
          <Feather
            name="align-justify"
            size={24}
            color={theme.colors.background_primary}
          />
        </Icon>
      </Header>

      <Card>
        <Title>
          {sanitizeHtml(item.title, {
            allowedTags: [],
          })}
        </Title>

        <Picture source={{ uri: item.source }} />

        <Description>
          {sanitizeHtml(item.content, {
            allowedTags: [],
          })}
        </Description>
      </Card>

      <Footer url={link} />
    </Container>
  );
}
