import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const MainScreen = () => {
  const [text, setText] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Search for a country..."
        value={text}
        mode="outlined"
        onChangeText={(value) => setText(value)}
        selectionColor="#4F4F4F"
        style={styles.textInput}
        left={<TextInput.Icon name="magnify" />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 20,
  },

  textInput: {
    backgroundColor: 'white',
    color: '#4F4F4F',
  },
});

export default MainScreen;
