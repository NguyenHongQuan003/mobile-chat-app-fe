import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type StartScreenProps = {
  navigate: (screen: 'Start' | 'Login' | 'SignUp') => void;
};

const StartScreen = ({ navigate }: StartScreenProps): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gửi ảnh nhanh chóng</Text>
      <Text style={styles.subtitle}>
        Chia sẻ hình ảnh chất lượng cao với bạn bè và người{'\n'}thân nhanh chóng và dễ dàng
      </Text>

      <View style={styles.pagination}>
        <View style={styles.activeDot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigate('Login')}>
        <Text style={styles.loginText}>ĐĂNG NHẬP</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupButton} onPress={() => navigate('SignUp')}>
        <Text style={styles.signupText}>ĐĂNG KÝ</Text>
      </TouchableOpacity>

      <View style={styles.languageOptions}>
        <Text style={styles.lang}>Tiếng Việt</Text>
        <Text style={styles.lang}>English</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  pagination: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007AFF',
    marginHorizontal: 4,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 60,
    marginBottom: 16,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupButton: {
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 70,
    width: 210,
  },
  signupText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  languageOptions: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    gap: 20,
  },
  lang: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#007AFF',
  },
});

export default StartScreen;
