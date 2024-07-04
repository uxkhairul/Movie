import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
    BORDERRADIUS,
    COLORS,
    FONTFAMILY,
    FONTSIZE,
    SPACING,
} from '../theme/theme';

const InputHeader = (props: any) => {
    const [searchText, setSearchText] = useState<string>();
    return (
        <SafeAreaView>
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(textInput) => {
                        setSearchText(textInput);
                    }}
                    value={searchText}
                    placeholder='Search your movies...'
                    placeholderTextColor={COLORS.White}
                    autoCorrect={false}
                />
                <TouchableOpacity
                    style={styles.searchIcon}
                    onPress={() => {
                        props.searchFunction(searchText);
                    }}
                >
                    <Ionicons
                        name='search-outline'
                        size={FONTSIZE.size_20}
                        color={COLORS.Orange}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default InputHeader;

const styles = StyleSheet.create({
    inputBox: {
        display: 'flex',
        paddingVertical: SPACING.space_2,
        paddingHorizontal: SPACING.space_20,
        borderWidth: 3,
        borderColor: COLORS.WhiteRGBA15,
        borderRadius: BORDERRADIUS.radius_25,
        flexDirection: 'row',
        marginBottom: SPACING.space_10,
    },
    textInput: {
        width: '90%',
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_14,
        color: COLORS.White,
    },
    searchIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: SPACING.space_10,
    },
});
