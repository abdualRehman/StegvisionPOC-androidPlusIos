import React from 'react';
import { Text, TextInput, TextStyle, ViewStyle } from 'react-native';
import { TextInput as RNInput, TextInputProps, View, StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const Input = ({ error, leftIcon, rightIcon, title, style, titleStyle, inputStyle, containerStyle, placeholderTextColor = colors.placeHolderColor, ...restProps }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
            <View>
                <View style={[styles.inputContainer, style]}>
                    {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
                    <RNInput
                        style={[styles.input, inputStyle]} placeholderTextColor={placeholderTextColor} {...restProps} />
                    {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
                </View>
                {error && <Text style={styles.error}>
                    {error}
                </Text>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 8,
    },
    title: {
        fontSize: 15,
        // color: Colors.Primary,
        // fontFamily: 'Montserrat-Regular',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#383639',
        paddingBottom: 4,
        borderRadius: 50,
        marginTop: 10,
        overflow:'hidden'
    },
    icon: {
        // paddingHorizontal: 8,
    },
    input: {
        flex: 1,
        margin: 0,
        padding: 0,
        fontFamily: fonts.Regular,
        fontSize: 16,
        backgroundColor:'#181818'
    },
    error: {
        color: 'red',
        fontSize: 11,
        fontWeight: '400'
    },
});

export default Input;
