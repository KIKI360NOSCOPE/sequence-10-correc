import React, { useState, useEffect } from 'react';
import { FlatList, View, StatusBar, TextInput } from 'react-native';
import PRODUITS from '../props/src/datas/data'

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <View>
        <TextInput placeholder='Rechercher' />
      </View>
      <FlatList
        numColumns={2}
        data={PRODUITS}
        keyExtractor={PRODUITS.id}
        renderItem={Card}
      />
    </View>
  );
}