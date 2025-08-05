import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={{ marginBottom: 20 }}>
        👋 Welcome to the Home Page!
      </Text>

      <Card style={styles.card}>
        <Card.Content>
          <Title> from Expo!</Title>
          <Paragraph>This is your first custom screen.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => console.log('Pressed')}>Learn More</Button>
        </Card.Actions>
      </Card>

      <Button 
        mode="contained" 
        onPress={() => alert('You pressed the button!')} 
        style={styles.button}
      >
        Press Me
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
});
