import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import React, { useRef } from 'react';
import { onboarding } from '../assets/images';

const { width } = Dimensions.get('window');

const onboardFlatlist = [
    {
        id: '1',
        image: onboarding,
        text: "Welcome to Connectify, a great friend to chat with you"
    },
    {
        id: '2',
        image: onboarding,
        text: "If you are confused about what to do, just open the Connectify app."
    },
    {
        id: '3',
        image: onboarding,
        text: "Connectify will be ready to chat & make you happy."
    }
];

const OnboardingScreen = () => {
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleSkip = () => {
        console.log("Skip button pressed");
        flatListRef.current.scrollToIndex({ animated: true, index: 2 });
        setCurrentIndex(2);
    };

    const handleNext = () => {
        if (currentIndex < onboardFlatlist.length - 1) {
            flatListRef.current.scrollToIndex({ animated: true, index: currentIndex + 1 });
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleGetStarted = () => {
        console.log("Get Started button pressed");
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
            <FlatList
                ref={flatListRef}
                data={onboardFlatlist}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={item.image} style={styles.itemImage} />
                        <Text style={styles.itemText}>{item.text}</Text>
                    </View>
                )}
                contentContainerStyle={styles.listContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                snapToAlignment="center"
                snapToInterval={width}
                decelerationRate="fast"
                scrollEnabled={false}
            />
            <View style={styles.buttonContainer}>
                {currentIndex < onboardFlatlist.length - 1 ? (
                    <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                        <Text style={styles.nextText}>Next</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
                        <Text style={styles.getStartedText}>Get Started</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    skipButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        borderRadius: 100,
        backgroundColor: '#36B8B8',
        width: 50,
        height: 25,
        justifyContent: 'center',
        alignItems: "center"
    },
    skipText: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
    },
    listContainer: {
        paddingVertical: 80,
    },
    itemContainer: {
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemImage: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    itemText: {
        fontSize: 25,
        color: '#333',
        textAlign: 'center',
        width: 280,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 60,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    nextButton: {
        borderRadius: 100,
        width: 300,
        height: 50,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#36B8B8',
    },
    nextText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    getStartedButton: {
        borderRadius: 100,
        width: 300,
        height: 50,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#36B8B8',
    },
    getStartedText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default OnboardingScreen;

