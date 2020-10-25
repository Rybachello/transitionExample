import { Navigation } from 'react-native-navigation';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Main = (props) => (
  <View style={styles.root}>
    <Text>Main Screen</Text>
    <Button
      title="Push Home Screen"
      color="#710ce3"
      onPress={() =>
        Navigation.push(props.componentId, {
          component: {
            name: 'Home',
            options: {
              topBar: {
                title: {
                  text: 'Home',
                },
              },
            },
          },
        })
      }
    />
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Main;
