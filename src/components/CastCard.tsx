import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {
    BORDERRADIUS,
    COLORS,
    FONTFAMILY,
    FONTSIZE,
    SPACING,
} from '../theme/theme';

const CastCard = (props: any) => {
    return (
        <View
            style={[
                styles.container,
                props.shouldMarginatedAtEnd
                    ? props.isFirst
                        ? { marginLeft: SPACING.space_24 }
                        : props.isLast
                        ? { marginRight: SPACING.space_24 }
                        : {}
                    : {},
                { maxWidth: props.cardWidth },
            ]}
        >
            <Image
                source={{ uri: props.imagePath }}
                style={[styles.cardImage, { width: props.cardWidth }]}
            />
            <Text style={styles.title} numberOfLines={2}>
                {props.title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    cardImage: {
        aspectRatio: 1920 / 2880,
        borderRadius: BORDERRADIUS.radius_25 * 4,
        borderWidth: 2,
        borderColor: COLORS.WhiteRGBA50,
    },
    title: {
        alignSelf: 'stretch',
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_12,
        color: COLORS.White,
        marginTop: SPACING.space_10,
        textAlign: 'center',
    },
});

export default CastCard;
