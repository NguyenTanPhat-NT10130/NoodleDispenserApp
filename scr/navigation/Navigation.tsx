import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen.view';
import InformationScreen from '../screens/Information/InformationScreen.view';
import DoneScreen from '../screens/Done/DoneScreen.view';
import EmptyScreen from '../screens/Empty/EmptyScreen.view';
import ErrorScreen from '../screens/Error/ErrorScreen.view';
export type RootStackParamList = {
    Home: undefined;
    Information: { phoneNumber: string; userData?: any };
    Done: undefined;
    Empty: undefined;
    Error: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Error">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Information" component={InformationScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Done" component={DoneScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Empty" component={EmptyScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Error" component={ErrorScreen} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;