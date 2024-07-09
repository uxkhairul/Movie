import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDatailsScreen from './src/screens/MovieDetailsScreen';
import SeatBookingScreen from './src/screens/SeatBookingScreen';
import TabNavigator from './src/navigators/tabNavigator';
import SplashScreen from './src/screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name='Splash'
                    component={SplashScreen}
                    options={{ animation: 'slide_from_right' }}
                />
                <Stack.Screen
                    name='Tab'
                    component={TabNavigator}
                    options={{ animation: 'default' }}
                />
                <Stack.Screen
                    name='MovieDetails'
                    component={MovieDatailsScreen}
                    options={{ animation: 'slide_from_right' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 50,
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF',
    },
});
