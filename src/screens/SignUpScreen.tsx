import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

type SignUpScreenProps = {
  navigate: (screen: 'Start' | 'Login' | 'SignUp') => void;
};

const SignUpScreen = ({ navigate }: SignUpScreenProps): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <Button title="Go Back to Start" onPress={() => navigate('Start')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SignUpScreen;