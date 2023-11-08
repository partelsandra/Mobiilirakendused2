import React from "react";
import { SafeAreaView } from "react-native";
import Splash from "./src/screens/auth/Splash";
import AuthHeader from "./src/components/AuthHeader";
import Signup from "./src/screens/Signup";
import Input from "./src/components/Input";
import Signin from "./src/screens/Signin";

const App = () => {
  return (
    <SafeAreaView>
      <Signin />
    </SafeAreaView>
  );
};

export default App