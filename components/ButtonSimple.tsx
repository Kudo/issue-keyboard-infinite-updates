import { Pressable, StyleSheet, Text, type ViewStyle } from 'react-native';

interface Props {
  onPress: () => void;
  title: string;
  color?: string;
  style?: ViewStyle;
  disabled?: boolean;
}

export default function ButtonSimple({
  onPress,
  title,
  color,
  style,
  disabled,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
      disabled={disabled}
    >
      <Text style={[styles.text, { color: color }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#035d64',
    paddingVertical: 12,
    paddingHorizontal: 34,
  },
  disabled: {
    backgroundColor: '#cccccc',
  },
  text: {
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  pressed: {
    opacity: 0.5,
  },
});
