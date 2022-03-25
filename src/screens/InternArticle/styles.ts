import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: 'space-between',
  },
  showsVerticalScrollIndicator: false,
})`
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(80)}px;

  padding-top: ${StatusBar.currentHeight}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.colors.background_primary};
  elevation: 10;
`;

export const GoBack = styled.TouchableOpacity`
  width: ${RFValue(24)}px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image``;

export const Icon = styled.View`
  width: ${RFValue(37)}px;
  height: ${RFValue(37)}px;

  left: ${RFValue(10)}px;

  align-items: center;
  justify-content: center;

  border-radius: ${RFValue(70)}px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Card = styled.View`
  padding: ${RFValue(28)}px ${RFValue(17)}px;
`;

export const Title = styled.Text`
  padding: ${RFValue(15)}px ${RFValue(9)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.background_secondary};
  font-size: ${RFValue(24)}px;
`;

export const Picture = styled.Image`
  width: 100%;
  height: ${RFValue(244)}px;
`;

export const Description = styled.Text`
  padding: ${RFValue(15)}px ${RFValue(9)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text_primary};
  font-size: ${RFValue(17)}px;
`;
