import React, { useState, useEffect } from 'react';
import { FlatList, View, StatusBar, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../props/src/components/Card';
import PRODUITS from './src/datas/data';

export default function App() {
  const [search, setSearch] = useState([]);
  useEffect(() => {
    setSearch(PRODUITS);
  }, []);

  return (
    <SafeAreaView>

    <View style={{ flex: 1 }}>
      <StatusBar />
      <View>
        <TextInput placeholder='Rechercher' />
      </View>
      <FlatList
        numColumns={2}
        data={search}
        keyExtractor={search.id}
        renderItem={Card}
        />
    </View>
        </SafeAreaView>
  );
}