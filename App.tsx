import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {Provider} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import StackNavigation from './src/navigation/stackNavigation';
import {store} from './src/redux/store';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const container = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={container}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={container.backgroundColor}
        />
        <StackNavigation />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
