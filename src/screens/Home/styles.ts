import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: 'space-between',
  },
  showsVerticalScrollIndicator: false,
})`
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Expand = styled.View`
  padding: ${RFValue(46)}px ${RFValue(15)}px 0px;

  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const List = styled.View``;

export const Option = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text_tertiary};
  font-size: ${RFValue(17)}px;
`;

export const Order = styled.View`
  border: 1px solid black;
  border-radius: ${RFValue(10)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.background_secondary};
  font-size: ${RFValue(22)}px;
  text-align: center;
`;

export const SeeMore = styled.TouchableOpacity`
  width: ${RFValue(95)}px;
  height: ${RFValue(22)}px;

  flex-direction: row;
`;

export const Icon = styled.View`
  width: ${RFValue(24)}px;
  height: ${RFValue(26)}px;

  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  padding: ${RFValue(28)}px ${RFValue(17)}px;
`;

export const Card = styled.TouchableOpacity`
  width: ${RFValue(235)}px;
  height: ${RFValue(325)}px;

  flex-direction: column;

  elevation: 2;
  border-radius: ${RFValue(12)}px;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Picture = styled.Image`
  width: 100%;
  height: ${RFValue(103)}px;

  border-top-right-radius: ${RFValue(12)}px;
  border-top-left-radius: ${RFValue(12)}px;
`;

export const SubTitle = styled.Text`
  padding: ${RFValue(15)}px ${RFValue(9)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Description = styled.Text`
  padding: ${RFValue(16)}px ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text_primary};
  font-size: ${RFValue(15)}px;
`;

export const ReadMoreView = styled.View`
  bottom: 0px;
  position: absolute;
`;

export const ReadMore = styled.Text`
  padding: ${RFValue(15)}px ${RFValue(10)}px ${RFValue(35)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(16)}px;
`;
