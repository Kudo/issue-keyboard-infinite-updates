import { StyleSheet, TextInput, View, type TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  placeholderTextColor?: string;
  keyboardType?: TextInputProps['keyboardType'];
}

export default function InputCustom({
  placeholder,
  style,
  value,
  onChangeText,
  secureTextEntry = false,
  placeholderTextColor = '#cccccc',
  keyboardType,
}: Props) {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={[styles.input, style]}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    padding: 10,
    marginVertical: 20,
    width: '100%',
  },
  input: {
    paddingHorizontal: 4,
    paddingVertical: 5,
    fontSize: 20,
    color: 'black',
  },
});
