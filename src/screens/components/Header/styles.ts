import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(80)}px;

  padding-top: ${StatusBar.currentHeight}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.background_primary};
  elevation: 10;
`;

export const Image = styled.Image`
  left: ${RFValue(10)}px;
`;

export const Icon = styled.View`
  width: ${RFValue(37)}px;
  height: ${RFValue(37)}px;

  right: ${RFValue(10)}px;

  align-items: center;
  justify-content: center;

  border-radius: ${RFValue(70)}px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;
