/**
 * Author : Ryan
 * Date : 2022-08-30
 * Desc : complete
 */

import React, { useEffect } from 'react';
import { Dimensions, Platform, View, Text } from 'react-native';
import styled from 'styled-components/native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { useSignUpStore } from '@libs/zustand';
import Icons from '@components/Common/Icons';

export default function SignUpComplete({ navigation, route }) {
  // Root State
  const { initSignUpStore } = useSignUpStore();
  // Value
  const screenHeight = Dimensions.get('window').height;

  useEffect(() => {
    initSignUpStore();
  }, []);

  return (
    <Wrapper style={{ height: Platform.OS === 'ios' ? screenHeight : screenHeight - 24 }}>
      <CountDownBlock>
        <CountdownCircleTimer
          isPlaying
          size={30}
          strokeWidth={3}
          duration={4}
          colors={['#222222', '#eeeeee']}
          colorsTime={[4, 0]}
          onComplete={() => navigation.reset({ routes: [{ name: 'signIn' }] })}
        >
          {({ remainingTime }) => <CountDownText>{remainingTime}</CountDownText>}
        </CountdownCircleTimer>
      </CountDownBlock>
      <ContentBlock>
        <EmoticonBox>
          <Emoticon>ππ»</Emoticon>
        </EmoticonBox>
        <TitleBox>
          <TitleText>
            <TitleBoldText>{`${route.params ? route.params : 'ννΈλ'}λ`}</TitleBoldText>
            {`\nνμν΄μ!`}
          </TitleText>
        </TitleBox>
        <DesctiptionBox>
          <Icons icon={'estimatePreviewCheck'} size={18} />
          <DescriptionText>μ§μ  μΈμ¦μ 2~3μΌμ΄ μμλ©λλ€.</DescriptionText>
        </DesctiptionBox>
      </ContentBlock>
    </Wrapper>
  );
}

const Wrapper = styled(View)`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
`;

const CountDownBlock = styled(View)`
  position: absolute;
  top: 60px;
  left: 25px;
`;

const CountDownText = styled(Text)`
  ${({ theme }) => theme.fontSet(10, 300, 15)};
`;

const ContentBlock = styled(View)`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
`;

const EmoticonBox = styled(View)`
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
`;
const Emoticon = styled(Text)`
  ${({ theme }) => theme.fontSet(100, 400, 130)};
`;

const TitleBox = styled(View)`
  margin-top: 20px;
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
`;
const TitleText = styled(Text)`
  ${({ theme }) => theme.fontSet(35, 100, 50)};
  text-align: center;
`;

const TitleBoldText = styled(Text)`
  ${({ theme }) => theme.fontSet(35, 700, 50)};
`;

const DesctiptionBox = styled(View)`
  margin-top: 20px;
  margin-bottom: 20px;
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
`;

const DescriptionText = styled(Text)`
  margin-left: 7px;
  ${({ theme }) => theme.fontSet(20, 100, 29)};
`;
