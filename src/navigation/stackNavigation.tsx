import {NavigationContainer} from '@react-navigation/native';
import * as stack from '@react-navigation/stack';
import { ReactElement } from 'react';
import Gallery from '../pages/gallery';
import Photo from '../pages/photo';
import React from 'react';

export type AppNavigatorParams = {
  Gallery: undefined;
  Photo: {
    imageId: string;
    name: string;
  };
};

export type AppStackScreenProp = stack.StackNavigationProp<AppNavigatorParams,'Gallery'>;

const Stack = stack.createStackNavigator();
const LoginStack = stack.createStackNavigator<AppNavigatorParams>();

function BaseStack({ children }: { children: ReactElement | ReactElement[]; }): ReactElement {
  return (
    <Stack.Navigator>
      {children}
    </Stack.Navigator>
  );
}

const AppStack = (): ReactElement => {
  return (
    <BaseStack>
      <LoginStack.Screen
        name="Gallery"
        component={Gallery}
      />
      <LoginStack.Screen
        name="Photo"
        component={Photo}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </BaseStack>
  );
};

export default function StackNavigation(): ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="AppStack">
        <Stack.Screen
          name="AppStack"
          component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
