import React, {useEffect} from "react";
import { Image } from "react-native";

import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/Signup";
import Signin from "./src/screens/Signin";

import Home from "./src/screens/app/Home";
import Profile from "./src/screens/app/Profile";
import Favorites from "./src/screens/app/Favorites";
import Settings from "./src/screens/app/Settings";
import CreateListing from "./src/screens/app/CreateListing";
import ProductDetails from "./src/screens/app/ProductDetails";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors } from "./src/utils/colors";



const Stack=createNativeStackNavigator();

const Tab =createBottomTabNavigator()

import Config from "react-native-config";
import { colors } from "./src/utils/colors";

const ProfileStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
      <Stack.Screen name="Settings" component={Settings} options={{headerShown: false}} />
      <Stack.Screen name="CreateListing" component={CreateListing} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={({route}) =>({
      tabBarIcon: ({ focused, color, size}) => {
        let icon;

        if (route.name === 'Home') {
          icon = focused
          ? require('./src/assets/tabs/clarity_home-solid.png')
          : require('./src/assets/tabs/clarity_home-grey.png');
        } else if (route.name === 'Favorites') {
          icon = focused
          ? require('./src/assets/tabs/marker_solid.png')
          : require('./src/assets/tabs/marker_grey.png');
        } else if (route.name === 'Profile') {
          icon = focused
          ? require('./src/assets/tabs/group-solid.png')
          :require('./src/assets/tabs/group-grey.png');
        }
        return <Image style={{width:24, height:24}} source={icon} />
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {borderTopColor: colors.lightGrey}
    })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator> 
  )
}

const App = () => {
  const isSignedIn = true

  const theme = {
    colors: {
      background: colors.white
    },
  };

return (
<SafeAreaProvider>
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {
          isSignedIn ? (
            <>
            <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown:false}} />
            </>
          ) : (
            <>
              <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
              <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
              <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);
};

export default React.memo(App)