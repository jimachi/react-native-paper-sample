import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Button, Caption, Headline, Paragraph, Subheading, Title } from 'react-native-paper';

export const Main = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Headline>Paper紹介</Headline>
        <Title>タイトル</Title>
        <Paragraph>これが段落です。</Paragraph>
        <Paragraph>じゅげむじゅげむ　ごこうのすりきれ</Paragraph>
        <Caption>キャプションもかけますと。</Caption>
        <Subheading>Button</Subheading>
        <Subheading>Card</Subheading>
        <Button>普通のボタン(mode: text)</Button>
        <Button mode="contained">containedなボタン</Button>
        <Button mode="outlined">outlinedなボタン</Button>
      </ScrollView>
    </SafeAreaView>
  );
}
