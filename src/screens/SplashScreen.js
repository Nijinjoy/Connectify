import { View, ImageBackground, Image, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { logo, wallpaper } from '../assets/images';
import { useNavigation } from '@react-navigation/native'; 

const SplashScreen = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }),
        ]).start(() => {
            navigation.navigate('Onboarding');
        });
    }, [fadeAnim, scaleAnim, navigation]);

    return (
        <ImageBackground source={wallpaper} style={{ flex: 1, backgroundColor: "#36B8B8", justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }}>
                <Image source={logo} style={{ width: 150, height: 100 }} resizeMode='contain' />
            </Animated.View>
        </ImageBackground>
    );
};

export default SplashScreen;
