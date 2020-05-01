import React from "react";
import PropTypes from "prop-types";
import {View, StyleSheet} from "react-native";
import {Zodiac} from "../../svgs";
import {Caption, Subheading, TouchableRipple, useTheme} from "react-native-paper";
import i18n from "i18n-js";

const _signs = {
    Aquarius: Zodiac.Aquarius,
    Aries: Zodiac.Aries,
    Cancer: Zodiac.Cancer,
    Capricorn: Zodiac.Capricorn,
    Gemini: Zodiac.Gemini,
    Leo: Zodiac.Leo,
    Libra: Zodiac.Libra,
    Pisces: Zodiac.Pisces,
    Sagittarius: Zodiac.Sagittarius,
    Scorpio: Zodiac.Scorpio,
    Taurus: Zodiac.Taurus,
    Virgo: Zodiac.Virgo
}

/**
 * @param sign {string}
 * @param title {string}
 * @param showTitle {boolean}
 * @param subtitle {string}
 * @param onPress {function}
 * @param style {object}
 * @param signHeight {string|number}
 * @param signWidth {string|number}
 * @param styleTitle {object}
 * @param styleSubtitle {object}
 * @returns {*}
 * @constructor
 */
function Sign({sign, title, showTitle, subtitle, onPress, style, signHeight, signWidth, styleTitle, styleSubtitle}) {
    const ParsedSign = _signs[sign];
    const {colors} = useTheme();
    return (
        <TouchableRipple onPress={() => onPress(sign)}
                         style={[{alignItems: 'center', justifyContent: 'center'}, style]}>
            <React.Fragment>
                <View style={[{
                    shadowColor: colors.shadow,
                    width: signWidth,
                    height: signHeight
                }, styles.signContainer, styles.signShadow]}>
                    <ParsedSign width={signHeight} height={signWidth}/>
                </View>
                {showTitle && <Subheading style={styleTitle}>{title ?? i18n.t(sign)}</Subheading>}
                {subtitle && <Caption style={styleSubtitle}>{subtitle}</Caption>}
            </React.Fragment>
        </TouchableRipple>
    )
}

const styles = StyleSheet.create({
    signShadow: {
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
    },
    signContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    }
})

Sign.defaultProps = {
    height: 120,
    width: 120,
    showTitle: true,
};

Sign.propTypes = {
    sign: PropTypes.string.isRequired,
    title: PropTypes.string,
    showTitle: PropTypes.bool,
    subtitle: PropTypes.string,
    onPress: PropTypes.func,
    style: PropTypes.object,
    styleTitle: PropTypes.object,
    styleSubtitle: PropTypes.object,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Sign;