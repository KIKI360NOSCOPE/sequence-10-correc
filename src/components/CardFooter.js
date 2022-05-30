import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CardFooter = (props) => {
    const { size, likes } = props

    return (
        <View style={StyleSheet.container}>
            <Text style={styles.size}>Taille : {size}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 30,
        borderBottomWidth: 1,
    },
    size: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#707070',
    }
})

export default CardFooter