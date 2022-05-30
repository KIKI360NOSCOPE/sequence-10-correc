import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const CardBody = (props) => {
    const { photo, title, brand, desc } = props

    return (
        <View>
            <Image source={photo} style={styles.image} />
            <Text style={styles.title}>{brand} {title}</Text>
            <ScrollView>
                <Text numberOfLines={3}>{desc}</Text>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#707070',
    }
})

export default CardBody