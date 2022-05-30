import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CardHeader = (props) => {

    const { price } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{price} €</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 30,
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#707070',
    }
})

export default CardHeader