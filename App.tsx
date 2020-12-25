import React, {useEffect} from 'react';
import RootScreen from './src/screens/RootScreen';
import {Alert, Platform, StyleSheet} from "react-native";
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import handler from "./notification-handler";

declare const global: { HermesInternal: null | {} };

const App = () => {

    useEffect(() => {
        createDefaultChannels();
        handler.attachRegister((token: any) => {
            console.log(token)
            // Alert.alert(token)
        });
        handler.attachNotification((notif: any) => {
            console.log(notif.data)
            // Alert.alert(notif.data);
            // PushNotification.localNotification({
            //     channelId: 'reminder',
            //     /* iOS and Android properties */
            //     title: 'Go feed me', // (optional)
            //     message: `Feed me now! last feed at ${notif.data['lastFeed']} with ${notif.data['feedType']}`, // (required)
            //     number: 1, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
            //     vibrate: true, // (optional) default: true
            //     vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
            //     soundName: `default`,
            //     priority:"max",
            //     importance:"max",
            //     allowWhileIdle: true,
            // });
        });
        messaging().onMessage(onMessageReceived);
        messaging().setBackgroundMessageHandler(onMessageReceived);
    }, []);

    async function onMessageReceived(message: any) {
        console.log(`message coming`);
        console.log(message);
        // Alert.alert(message);
        PushNotification.localNotification({
            channelId: 'reminder',
            /* iOS and Android properties */
            title: 'Go feed me', // (optional)
            message: `Feed me now! last feed at  ${message.data.lastFeed} with  ${message.data.feedType}`, // (required)
            number: 1, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
            vibrate: true, // (optional) default: true
            vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
            soundName: `default`,
            priority:"max",
            importance:"max",
            allowWhileIdle: true,
        });
    }

    const createDefaultChannels = () => {
        PushNotification.createChannel(
            {
                channelId: "reminder", // (required)
                channelName: `Reminder channel`, // (required)
                channelDescription: "A reminder channel", // (optional) default: undefined.
                soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
                importance: 1, // (optional) default: 4. Int value of the Android notification importance
                vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
            },
            (created: any) => console.log(`createChannel 'default-channel-id' returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
        );
    }

    return (
        <>
            <RootScreen/>
        </>
    );
};

export default App;
