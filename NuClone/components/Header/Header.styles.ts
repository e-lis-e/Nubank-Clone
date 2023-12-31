import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const {width} = Dimensions.get('window')

export const Container = styled.View`
  width: 100%;
  height: 20%;

  padding: 40px 24px 8px 24px;
  background-color: #820ad1;
  justify-content: space-around;
`

export const UpperView = styled.View`
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
`
export const OptionsIcon = styled.View`
  flex-direction: row;
`

export const UserIconView = styled.View`
  height: 40px;
  width: 40px;
  
  align-items: center;
  justify-content: center;

  border-radius: 99px;
  background-color: #A75dd9;
`
export const TextWelcome = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;

`
export const TotalAccount = styled.View`
  padding: 24px;
`
export const AccView = styled.View`
  flex-direction: row;
  justify-content:space-between;

`
export const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: 600;

  margin-bottom: 8px;
`
export const AccTotal = styled.Text`
font-size: 20px;
font-weight: 700;

margin-top: 8px;
`

export const AccTotalNotVisible = styled.View`
  margin-top: 8px;
  height: 30px;
  width: 70px;

  background-color: #c1bec2;

  border-radius: 2px;

`

export const OptionView = styled.TouchableOpacity`
align-items: center;
margin-right: 8px;

`
export const OptionIcon = styled.View`
  height: ${width * 0.18}px;
  width: ${width * 0.18}px;

  background-color: #e6e6e6;

  border-radius: 99px;
  align-items: center;
  justify-content: center;
`
export const OptionText = styled.Text`
  font-weight: 700;
  font-size: 14px;

`
;