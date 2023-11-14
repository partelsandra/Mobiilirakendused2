import React, {useEffect} from "react";
import { Image } from "react-native";

import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/Signup";
import Signin from "./src/screens/Signin";

import Home from "./src/screens/app/Home/index";
import Profile from "./src/screens/app/Profile/index";
import Favorites from "./src/screens/app/Favorites/index";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors } from "./src/utils/colors";


const Stack=createNativeStackNavigator();

const Tab =createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={({route}) =>({
      tabBarIcon: ({ focused, color, size}) => {
        let icon;

        if (route.name === 'Home') {
          icon = focused
          ? require('./src/assets/home_active.png')
          : require('./src/assets/home.png');
        } else if (route.name === 'Favorites') {
          icon = focused
          ? require('./src/assets/bookmark_active.png')
          : require('./src/assets/bookmark.png');
        } else if (route.name === 'Profile') {
          icon = focused
          ? require('./src/assets/user_active.png')
          :require('./src/assets/user.png');
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
      <Tab.Screen name="Profile" component={Profile} />
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
            </>
          ) : (
            <>
              <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
              <Stack.Screen name="Signup" component={SignUp} options={{headerShown: false}}/>
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