import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { Text } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => {
        let iconName: keyof typeof MaterialIcons.glyphMap = 'home';

        if (route.name === 'index') {
          iconName = 'dashboard';
        } else if (route.name === 'home') {
          iconName = 'home';
        } else if (route.name === 'profile') {
          iconName = 'person';
        } else if (route.name === 'notifications') {
          iconName = 'notifications';
        } else if (route.name === 'settings') {
          iconName = 'settings';
        }

        return {
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name={iconName} size={size} color={color} />
          ),
          headerShown: true,
          tabBarActiveTintColor: '#6200ee',
          tabBarInactiveTintColor: 'gray',
        };
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'Dashboard' }}
      />
      <Tabs.Screen
        name="home"
        options={{ title: 'Home' }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: 'Profile' }}
      />
      <Tabs.Screen
        name="notifications"
        options={{ title: 'Notifications' }}
      />
      <Tabs.Screen
        name="settings"
        options={{ title: 'Settings' }}
      />
    </Tabs>
  );
}
