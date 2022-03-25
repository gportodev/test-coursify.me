import React, { useCallback } from 'react';
import { Alert, Linking } from 'react-native';
import { Container, Logo, Description, Title, Button } from './styles';

import img from '../../../assets/logo-footer.png';

interface Link {
  url: string;
}

export function Footer({ url }: Link) {
  const handleLink = useCallback(async () => {
    const l = await Linking.canOpenURL(url);

    if (l) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Não foi possóvel abrir o link');
    }
  }, [url]);

  return (
    <Container>
      <Logo source={img} />

      <Description>
        O Coursify.me é uma plataforma de ensino a distância,
        {'\n'}onde qualquer pessoa ou empresa pode construir seu
        {'\n'}EAD e vender cursos pela internet
      </Description>

      <Button onPress={handleLink}>
        <Title>Quero conhecer a plataforma!</Title>
      </Button>
    </Container>
  );
}
