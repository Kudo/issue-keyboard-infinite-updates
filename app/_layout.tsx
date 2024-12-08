import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#035d64',
          },
          headerTintColor: '#ffffff',
        }}
      />
    </>
  );
}
