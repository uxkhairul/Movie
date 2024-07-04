import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    StatusBar,
    FlatList,
} from 'react-native';
import { COLORS, SPACING } from '../theme/theme';
import { baseImagePath, searchMovies } from '../api/apicalls';
import InputHeader from '../components/InputHeader';
import SubMovieCard from '../components/SubMovieCard';

const { width, height } = Dimensions.get('screen');

const SearchScreen = ({ navigation }: any) => {
    const [searchList, setSearchList] = useState([]);

    const searchMoviesFunction = async (name: string) => {
        try {
            let response = await fetch(searchMovies(name));
            let json = await response.json();
            setSearchList(json.results);
        } catch (error) {
            console.error(
                'Something went wrong in searchMoviesFunction ',
                error
            );
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputHeaderContainer}>
                <InputHeader searchFunction={searchMoviesFunction} />
            </View>
            <StatusBar hidden />
            <View>
                <FlatList
                    data={searchList}
                    keyExtractor={(item: any) => item.id}
                    bounces={false}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.centerContainer}
                    renderItem={({ item, index }) => (
                        <SubMovieCard
                            shoudlMarginatedAtEnd={false}
                            shouldMarginatedAround={true}
                            cardFunction={() => {
                                navigation.push('MovieDetails', {
                                    movieid: item.id,
                                });
                            }}
                            cardWidth={width / 2 - SPACING.space_12 * 2}
                            title={item.original_title}
                            imagePath={baseImagePath('w342', item.poster_path)}
                        />
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        width,
        backgroundColor: COLORS.Black,
    },
    inputHeaderContainer: {
        paddingHorizontal: SPACING.space_36,
        paddingTop: SPACING.space_28,
        backgroundColor: COLORS.Black,
    },
    centerContainer: {
        alignItems: 'center',
    },
});

export default SearchScreen;