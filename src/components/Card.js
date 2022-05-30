import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'

const Card = ({item}) => {

  const {
    photo,
    title,
    brand,
    desc,
    price,
    size,
    likes
  } = item

  return (
    <View>
      <CardHeader price={price} />
      <CardBody photo={photo} title={title} brand={brand} desc={desc} />
      <CardFooter size={size} likes={likes} />
    </View>
  )
}

export default Card