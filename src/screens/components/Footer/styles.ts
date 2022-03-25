import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(222)}px;

  align-items: center;
  justify-content: center;
  /* position: absolute; */
  /* bottom: 0; */
  /* margin-top: 50%; */
  align-self: flex-end;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Logo = styled.Image`
  width: ${RFValue(172)}px;
  height: ${RFValue(45)}px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text_secondary};
  font-size: ${RFValue(12)}px;
  margin-top: ${RFValue(11)}px;
  /* padding: ${RFValue(11)}px ${RFValue(39)}px 0px; */
  text-align: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text_secondary};
  font-size: ${RFValue(12)}px;
`;

export const Button = styled.TouchableOpacity`
  width: ${RFValue(216)}px;
  height: ${RFValue(44)}px;

  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(28)}px;

  border-radius: ${RFValue(60)}px;
  background-color: ${({ theme }) => theme.colors.background_tertiary};
`;
