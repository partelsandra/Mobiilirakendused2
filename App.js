import react from "react";
import { SafeAreaView } from "react-native";
import Splash from "./src/screens/auth/Splash";
import Button from "./src/components/Button";
import AuthHeader from "./src/components/AuthHeader"
import Signup from "./src/screens/Signup"
import Signin from "./src/screens/Signin"

const App = () => {
  return (
    <SafeAreaView>
      <Signup/>
    </SafeAreaView>
  );
};

export default App