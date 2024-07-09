import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView,
    StatusBar,
    FlatList,
    Image,
    Pressable,
} from 'react-native';
import { COLORS, SPACING } from '../theme/theme';
import {
    upcomingMovies,
    nowPlayingMovies,
    popularMovies,
    baseImagePath,
} from '../api/apicalls';
import CategoryHeader from '../components/CategoryHeader';
import SubMovieCard from '../components/SubMovieCard';
import MovieCard from '../components/MovieCard';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const getNowPlayingMoviesList = async () => {
    try {
        let response = await fetch(nowPlayingMovies);
        let json = await response.json();
        return json;
    } catch (error) {
        console.error(
            ' Something went wrong in getNowPlayingMoviesList Function',
            error
        );
    }
};

const getUpcomingMoviesList = async () => {
    try {
        let response = await fetch(upcomingMovies);
        let json = await response.json();
        return json;
    } catch (error) {
        console.error(
            ' Something went wrong in getUpcomingMoviesList Function',
            error
        );
    }
};

const getPopularMoviesList = async () => {
    try {
        let response = await fetch(popularMovies);
        let json = await response.json();
        return json;
    } catch (error) {
        console.error(
            ' Something went wrong in getPopularMoviesList Function',
            error
        );
    }
};

const HomeScreen = ({ navigation }: any) => {
    const [nowPlayingMoviesList, setNowPlayingMoviesList] =
        useState<any>(undefined);
    const [popularMoviesList, setPopularMoviesList] = useState<any>(undefined);
    const [upcomingMoviesList, setUpcomingMoviesList] =
        useState<any>(undefined);

    useEffect(() => {
        (async () => {
            let tempNowPlaying = await getNowPlayingMoviesList();
            setNowPlayingMoviesList([
                { id: 'dummy1' },
                ...tempNowPlaying.results,
                { id: 'dummy2' },
            ]);

            let tempPopular = await getPopularMoviesList();
            setPopularMoviesList(tempPopular.results);

            let tempUpcoming = await getUpcomingMoviesList();
            setUpcomingMoviesList(tempUpcoming.results);
        })();
    }, []);

    if (
        nowPlayingMoviesList == undefined &&
        nowPlayingMoviesList == null &&
        popularMoviesList == undefined &&
        popularMoviesList == null &&
        upcomingMoviesList == undefined &&
        upcomingMoviesList == null
    ) {
        return (
            <>
                <View style={styles.inputHeaderContainer}></View>
                <ScrollView
                    style={styles.container}
                    bounces={false}
                    contentContainerStyle={styles.scrollViewContainer}
                >
                    <StatusBar hidden />

                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size={'large'} color={COLORS.Pink} />
                    </View>
                </ScrollView>
            </>
        );
    }

    return (
        <>
            <View style={styles.inputHeaderContainer}>
                <LinearGradient
                    colors={[COLORS.Pink, COLORS.Black]}
                    style={styles.linearGradient}
                >
                    <Pressable onPress={() => navigation.navigate('Splash')}>
                        <Image
                            source={require('../assets/image/moviecafe-logo-text.png')}
                            style={styles.logoImage}
                        />
                    </Pressable>
                </LinearGradient>
            </View>
            <ScrollView
                style={styles.container}
                bounces={true}
                showsVerticalScrollIndicator={false}
            >
                <StatusBar hidden />

                <CategoryHeader title={'New Release'} />
                <FlatList
                    data={nowPlayingMoviesList}
                    keyExtractor={(item: any) => item.id}
                    bounces={false}
                    snapToInterval={width * 0.7 + SPACING.space_36}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    decelerationRate={0}
                    contentContainerStyle={styles.containerGap36}
                    renderItem={({ item, index }) => {
                        if (!item.original_title) {
                            return (
                                <View
                                    style={{
                                        width:
                                            (width -
                                                (width * 0.7 +
                                                    SPACING.space_36 * 2)) /
                                            2,
                                    }}
                                ></View>
                            );
                        }
                        return (
                            <MovieCard
                                shoudlMarginatedAtEnd={true}
                                cardFunction={() => {
                                    navigation.push('MovieDetails', {
                                        movieid: item.id,
                                    });
                                }}
                                cardWidth={width * 0.7}
                                isFirst={index == 0 ? true : false}
                                isLast={
                                    index == upcomingMoviesList?.length - 1
                                        ? true
                                        : false
                                }
                                title={item.original_title}
                                imagePath={baseImagePath(
                                    'w780',
                                    item.poster_path
                                )}
                                genre={item.genre_ids.slice(1, 4)}
                                vote_average={item.vote_average}
                                vote_count={item.vote_count}
                            />
                        );
                    }}
                />
                <CategoryHeader title={'Popular'} />
                <FlatList
                    data={popularMoviesList}
                    keyExtractor={(item: any) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    contentContainerStyle={styles.containerGap36}
                    renderItem={({ item, index }) => (
                        <SubMovieCard
                            shoudlMarginatedAtEnd={true}
                            cardFunction={() => {
                                navigation.push('MovieDetails', {
                                    movieid: item.id,
                                });
                            }}
                            cardWidth={width / 3}
                            isFirst={index == 0 ? true : false}
                            isLast={
                                index == upcomingMoviesList?.length - 1
                                    ? true
                                    : false
                            }
                            title={item.original_title}
                            imagePath={baseImagePath('w342', item.poster_path)}
                        />
                    )}
                />
                <CategoryHeader title={'Upcoming'} />
                <FlatList
                    data={upcomingMoviesList}
                    keyExtractor={(item: any) => item.id}
                    horizontal
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.containerGap36}
                    renderItem={({ item, index }) => (
                        <SubMovieCard
                            shoudlMarginatedAtEnd={true}
                            cardFunction={() => {
                                navigation.push('MovieDetails', {
                                    movieid: item.id,
                                });
                            }}
                            cardWidth={width / 3}
                            isFirst={index == 0 ? true : false}
                            isLast={
                                index == upcomingMoviesList?.length - 1
                                    ? true
                                    : false
                            }
                            title={item.original_title}
                            imagePath={baseImagePath('w342', item.poster_path)}
                        />
                    )}
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: COLORS.Black,
        marginTop: 130,
    },
    scrollViewContainer: {
        flex: 1,
    },
    linearGradient: {
        height: '100%',
    },
    loadingContainer: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    inputHeaderContainer: {
        backgroundColor: COLORS.Black,
        height: 130,
        position: 'absolute',
        top: 0,
        width: '100%',
    },
    containerGap36: {
        gap: SPACING.space_36,
    },
    logoImage: {
        width: '35%',
        height: 38,
        borderRadius: 0,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 65,
    },
});

export default HomeScreen;
