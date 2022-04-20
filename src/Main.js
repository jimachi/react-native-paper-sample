import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Avatar, Button, Card, Paragraph, Subheading } from 'react-native-paper';

export const Main = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Subheading>Card</Subheading>
        <Card>
          <Card.Cover source={require('../assets/ramen.jpeg')} />
            <Card.Title
              title="ラーメン紀行 ２日目"
              subtitle="炎のラーメンちゃんねる"
              left={props => <Avatar.Text {...props} label="YN" />}
            />
            <Card.Content>
              <Paragraph>
                とうとうこの伝説のお店にやってきました。
              </Paragraph>
            </Card.Content>
            <Card.Actions style={{ justifyContent: 'flex-end' }}>
              <Button>みない</Button>
              <Button mode="contained">見る</Button>
            </Card.Actions>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
