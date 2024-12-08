import { Link, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import ButtonSimple from '@/components/ButtonSimple';
import InputCustom from '@/components/InputCustom';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userError, setUserError] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const onChangePassword = (val: string) => {
    if (password.length < 4) {
      setPasswordError('password should be greater than 4');
    } else {
      setPasswordError('');
    }
    setPassword(val);
  };

  const onChangeUseName = (val: string) => {
    if (userName.length < 4) {
      setPasswordError('username should be greater than 4');
    } else {
      setPasswordError('');
    }
    setUserName(val);
  };
  const loginHandler = async () => {};
  const disabledCondition = () => {
    if (!passwordError && !userError && userName && password) {
      return false;
    }
    return true;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.form}>
          <View style={styles.loginImage}></View>
          <Text style={styles.title}>Login</Text>
          <InputCustom
            value={userName}
            onChangeText={onChangeUseName}
            style={styles.input}
            placeholder={'Username or Email Address'}
          />
          <InputCustom
            value={password}
            onChangeText={onChangePassword}
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry={true}
          />
          <ButtonSimple
            title="Login"
            onPress={loginHandler}
            style={styles.button}
            disabled={disabledCondition()}
          />
        </View>
        <Link href="/signup" asChild>
          <Pressable style={styles.signUpTextContainer}>
            <Text style={styles.signUpText}>New user? Sign up now</Text>
          </Pressable>
        </Link>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#035d64',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 40,
  },
  form: {
    backgroundColor: '#ffffff',
    position: 'relative',
    padding: 30,
    width: '90%',
    alignItems: 'center',
    borderRadius: 10,
  },
  loginImage: {
    position: 'absolute',
    top: -40,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: Platform.select({ ios: '50%', android: '40' }),
  },
  input: {
    borderBottomWidth: 1,
    color: '#035d64',
    borderBottomColor: '#cccccc',
  },
  button: {
    borderRadius: 3,
    marginTop: 30,
  },
  signUpTextContainer: {
    padding: 10,
  },
  signUpText: {
    color: '#ffffff',
    fontSize: 15,
  },
});
