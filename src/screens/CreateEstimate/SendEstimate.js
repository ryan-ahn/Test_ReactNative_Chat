/**
 * Author : Ryan
 * Date : 2022-08-24
 * Desc : SendEstimate
 */

import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export default function SendEstimate() {
  return (
    <Wrapper>
      <ContentBlock>
        <IconText>đ¨</IconText>
        <DescriptionText>ę˛Ŧė ėę° ė ėĄëėėĩëë¤.</DescriptionText>
        <NoticeBox>
          <NoticeText>{'ęŗ ę°ė ė°ëŊė˛ë ëí ė§íė\nę˛Ŧė ėë´ í­ėė íė¸ ę°ëĨíŠëë¤.'}</NoticeText>
        </NoticeBox>
      </ContentBlock>
    </Wrapper>
  );
}

const Wrapper = styled(View)``;

const ContentBlock = styled(View)`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  height: 90%;
  padding: 0 25px;
`;
const IconText = styled(Text)`
  margin-bottom: 20px;
  ${({ theme }) => theme.fontSet(61, 400, 75)};
`;

const DescriptionText = styled(Text)`
  margin-bottom: 30px;
  ${({ theme }) => theme.fontSet(21, 700, 31)};
`;
const NoticeBox = styled(View)`
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  width: 100%;
  padding: 25px;
  border-radius: 13px;
  background-color: #f6f6f6;
`;

const NoticeText = styled(Text)`
  text-align: center;
`;
