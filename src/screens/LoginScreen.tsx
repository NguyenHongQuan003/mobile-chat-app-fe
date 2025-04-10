import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

type LoginScreenProps = {
  navigate: (screen: 'Start' | 'Login' | 'SignUp' | 'Main') => void;
};

const LoginScreen = ({ navigate }: LoginScreenProps): React.JSX.Element => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigate('Start')}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Đăng nhập</Text>
        <View style={{ width: 30 }} /> {/* khoảng trắng để cân bằng */}
      </View>

      <Text style={styles.subTitle}>
        Vui lòng nhập số điện thoại và mật khẩu để đăng nhập
      </Text>

      <View style={styles.inputBox}>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Số điện thoại"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
          {phone.length > 0 && (
            <TouchableOpacity onPress={() => setPhone('')}>
              <Text style={{ fontSize: 18, color: '#888' }}>x</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.toggleText}>
              {showPassword ? 'ẨN' : 'HIỆN'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotText}>Lấy lại mật khẩu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.arrowButton} onPress={() => navigate('Main')}>
        <Text style={styles.arrowText}>➜</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#007AFF',
    padding: 10,
  },
  backArrow: {
    fontSize: 24,
    color: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  subTitle: {
    textAlign: 'center',
    color: '#444',
    marginBottom: 20,
  },
  inputBox: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  toggleText: {
    color: '#007AFF',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  forgotText: {
    color: '#007AFF',
    textAlign: 'left',
    marginBottom: 30,
  },
  arrowButton: {
    backgroundColor: '#007AFF',
    alignSelf: 'flex-end',
    padding: 12,
    borderRadius: 30,
    width: 50,
    height: 50,
  },
  arrowText: {
    fontSize: 24,
    color: 'white',
    lineHeight: 25,
  },
});

export default LoginScreen;
