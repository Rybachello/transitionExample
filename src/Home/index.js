import { Navigation } from 'react-native-navigation';
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const Home = (props) => (
  <View style={styles.root}>
    <Text>Home Screen</Text>
    <Button
      title="Push Home Screen"
      color="#710ce3"
      onPress={() =>
        Navigation.push(props.componentId, {
          component: {
            name: 'Main',
            options: {
              topBar: {
                title: {
                  text: 'Main',
                },
              },
            },
          },
        })
      }
    />
  </View>
);

Home.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default Home;
