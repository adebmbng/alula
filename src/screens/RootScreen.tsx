import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import {Colors} from '../configs/theme_config';
import AuthLoginScreen from './AuthLoginScreen';
import AuthMainScreen from './AuthMainScreen';
import AuthRegisterScreen from './AuthRegisterScreen';
import ChatScreen from './ChatScreen';
import HomeScreen from './HomeScreen';
import MerchantListScreen from './MerchantListScreen';
import OnboardingScreen from './OnboardingScreen';
import OrderListScreen from './OrderListScreen';
import OrderSummaryScreen from './OrderSummaryScreen';
import PaymentScreen from './PaymentScreen';
import ProductDetailScreen from './ProductDetailScreen';
import ProductListScreen from './ProductListScreen';
import ProfileEditScreen from './ProfileEditScreen';
import ProfileScreen from './ProfileScreen';
import {useEffect} from "react";
import {Alert} from "react-native";
import messaging from '@react-native-firebase/messaging';
import HalloAlula from "./HalloAlula";

const Stack = createStackNavigator();

export default function RootScreen() {

    useEffect(() => {
        messaging()
            .subscribeToTopic('alula')
            .then(() => {
                    console.log('Subscribed to topic!');
                    Alert.alert(`subs to alula topic`);
                }
            );

        registerDevice();
    }, []);

    const registerDevice = async () => {
        // Register the device with FCM
        await messaging().registerDeviceForRemoteMessages();

        // Get the token
        const token = await messaging().getToken();
        console.log(token);
        // Alert.alert(token);
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="HalloAlula"
                    component={HalloAlula}
                    options={{
                        header: () => null,
                    }}
                />
                <Stack.Screen
                    name="AuthRegister"
                    component={AuthRegisterScreen}
                    options={{
                        title: 'Daftar',
                        headerTintColor: Colors.Primary,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
