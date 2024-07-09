import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Button,
    Image,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import { COLORS, FONTSIZE, SPACING } from '../theme/theme';
import { AntDesign } from '@expo/vector-icons';

const SplashScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden />
            <View style={styles.container}>
                <Image
                    source={require('../assets/image/moviecafe-logo-text.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.headline}>Discover. Watch. Enjoy.</Text>
                <Text style={styles.subtitle}>
                    Your personal guide to the Best Films.
                </Text>
                <Image
                    source={require('../assets/image/3d-popcorn.png')}
                    style={styles.modelImage}
                />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('Tab')}
                >
                    <View style={styles.buttonNext}>
                        <Text style={styles.buttonText}>Let's get started</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.Pink,
    },
    buttonNext: {
        borderWidth: FONTSIZE.size_8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 99,
        backgroundColor: COLORS.Black,
        paddingVertical: SPACING.space_4 * 2,
    },
    buttonContainer: {
        paddingTop: SPACING.space_10 * 2,
        paddingHorizontal: SPACING.space_15 * 2,
    },
    buttonText: {
        color: COLORS.WhiteRGBA75,
        fontSize: FONTSIZE.size_20,
        paddingHorizontal: SPACING.space_20,
        fontWeight: 'bold',
    },
    modelImage: {
        width: '100%',
        height: '60%',
        borderRadius: 0,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: SPACING.space_36 * 1,
    },
    headline: {
        color: COLORS.White,
        fontSize: FONTSIZE.size_30,
        textAlign: 'center',
        marginHorizontal: SPACING.space_36,
        marginVertical: SPACING.space_4,
        fontWeight: 'bold',
        marginTop: SPACING.space_36,
    },
    subtitle: {
        color: COLORS.White,
        fontSize: FONTSIZE.size_16,
        textAlign: 'center',
        marginHorizontal: SPACING.space_18,
        marginVertical: SPACING.space_2,
    },
    logoImage: {
        width: '35%',
        height: 38,
        borderRadius: 0,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: SPACING.space_36,
    },
});
