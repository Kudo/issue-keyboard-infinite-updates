import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ButtonSimple from '@/components/ButtonSimple';
import InputCustom from '@/components/InputCustom';

export default function SignUp() {
  const [userName, setUserName] = useState('');
  const [userValidators, setUserValidators] = useState('');
  const [userValid, setUserValid] = useState(false);
  const nextHandler = () => {};
  const onChangeValue = (val: string) => {
    let newVal = val.trim();
    if (newVal.includes(' ')) return;
    userValidatorsFunction(newVal);
    setUserName(newVal);
  };

  const userValidatorsFunction = (val: string) => {
    if (val.length < 4 || val.length > 20) {
      setUserValidators('Enter character between 5 and 20 characters!');
      setUserValid(false);
    } else {
      setUserValid(true);
    }
  };
  return (
    <View style={styles.root}>
      <View style={styles.signUpTextContainer}>
        <Text style={styles.signUpText}>Create User Name</Text>
      </View>
      <View style={styles.main}>
        <InputCustom
          placeholder={'UserName'}
          onChangeText={onChangeValue}
          style={styles.input}
          value={userName}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonSimple
          disabled={!userValid}
          style={styles.button}
          title={'Next'}
          onPress={nextHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 40,
    paddingBottom: 40,
  },
  label: {
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    paddingLeft: 20,
    height: 50,
    borderRadius: 10,
  },
  signUpTextContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 30,
    fontWeight: '200',
  },
  main: {
    flex: 5,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    alignItems: 'center',
    borderRadius: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    margin: 4,
  },
});
