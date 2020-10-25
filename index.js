import { Navigation } from 'react-native-navigation';
import Home from './src/Home';
import Main from './src/Main';

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('Main', () => Main);

Navigation.setDefaultOptions({
  animations: {
    push: {
      waitForRender: true,
    },
  },
  layout: {
    backgroundColor: 'whitesmoke',
  },
  topBar: {
    background: {
      color: '#f9f9f9',
      translucent: true,
    },
    drawBehind: true,
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});
