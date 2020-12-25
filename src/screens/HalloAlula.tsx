import React, {useEffect} from 'react';
import {Alert, TouchableNativeFeedback, View} from 'react-native';

import Illustration from '../components/common/Illustration';
import LayoutScreen from '../components/common/LayoutScreen';
import Spacer from '../components/common/Spacer';
import Text from '../components/common/Text';
import {
   HalloAlulaNavigationProp, HalloAlulaProp,
} from './ScreenProps';
import Button from "../components/common/Button";
import IconArrowRightWhite from "../assets/IconArrowRightWhite.svg";

type Props = {
    route: HalloAlulaProp;
    navigation: HalloAlulaNavigationProp;
};

const HalloAlula: React.FC<Props> = ({navigation}) => {

    const [age, setAge] = React.useState(0);

    useEffect(() => {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        const birthDate: Date = new Date("2020-12-20");
        const currentDate: Date = new Date();

        console.log(currentDate);
        console.log(birthDate);

        // @ts-ignore
        setAge(Math.round(Math.abs((currentDate - birthDate) / oneDay)))

    }, []);

    return (
        <LayoutScreen>
            <Illustration.Welcome/>
            <Spacer h={28}/>
            <View style={{display: 'flex', alignItems: 'center'}}>
                <Text
                    value="Halo Alula"
                    variant="title"
                    color="primary"
                />
                <Spacer h={20}/>
                <Text value="Today, your age is"/>
                <Spacer h={10}/>
                <Text value={age.toString()}
                      color="dark"
                      style={{fontSize: 20}}
                />
                <Spacer h={10}/>
                <Text value="days"/>

                <Spacer h={20}/>
                <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
                    <View style={{flex: 1}}>
                        <Button
                            value="ASI"
                            variant="primary-soft"
                            style={{minWidth: 0}}
                            full={true}
                            onPress={() => Alert.alert('coming soon')}
                        />
                    </View>
                    <Spacer w={10} />
                    <View style={{flex: 1}}>
                        <Button
                            value="SUFOR"
                            variant="secondary"
                            style={{minWidth: 0}}
                            full={true}
                            onPress={() => Alert.alert('coming soon')}
                        />
                    </View>
                </View>
            </View>
        </LayoutScreen>
    );
};

export default HalloAlula;
