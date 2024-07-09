import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import AppHeader from '../components/AppHeader';
import SettingComponent from '../components/SettingComponent';

const UserAccountScreen = ({ navigation }: any) => {
    const subtitleTmdb =
        "The Movie Database (TMDB) is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDB's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what makes us different.";

    const subtitleMovieCafe =
        "Trusted platform. Every single day our service is used by millions of people while we process over 3 billion requests. We've proven for years that this is a service that can be trusted and relied on.";
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.appHeaderContainer}>
                <AppHeader
                    name='close'
                    header={'Credit'}
                    action={() => navigation.goBack()}
                />
            </View>

            <View style={styles.profileContainer}>
                <Image
                    source={require('../assets/image/tmdb-logo.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.avatarText}>www.themoviedb.org</Text>
            </View>

            <View style={styles.profileContainer}>
                <SettingComponent
                    icon='user'
                    heading='About TMDB'
                    subheading=''
                    subtitle={subtitleTmdb}
                />
                <SettingComponent
                    icon='user'
                    heading='About MovieCafe'
                    subheading=''
                    subtitle={subtitleMovieCafe}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: COLORS.Black,
    },
    appHeaderContainer: {
        marginHorizontal: SPACING.space_36,
        marginTop: SPACING.space_20 * 2,
    },
    profileContainer: {
        alignItems: 'center',
        padding: SPACING.space_36,
    },
    logoImage: {
        height: 80,
        width: 190,
        borderRadius: 0,
    },
    avatarText: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_16,
        marginTop: SPACING.space_16,
        color: COLORS.White,
    },
});

export default UserAccountScreen;
