import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/SignInScreen";
import { WHITE } from "../colors";

// import ListScreen from "../screens/ListScreen";
// import { PRIMARY, WHITE } from "../colors";
// import HeaderLeftButton from "../components/HeaderLeftButton";
// import HeaderRightButton from "../components/HeaderRightButton";
// import SettingsScreen from "../screens/SettingScreen";


const Stack = createNativeStackNavigator();

const AuthStack = (props) => {
    return (
        <Stack.Navigator 
            initialRouteName="SignIn"           // 초기 화면 설정
             screenOptions={{                   // 공통 옵션 설정
                 contentStyle: {backgroundColor: WHITE},
                 headerShown: false,            // 헤더 숨기기
             }}
            >
            <Stack.Screen name= "SignIn">
                {(screenProps) => <SignInScreen {...screenProps} {...props} />}
            </Stack.Screen>
        </Stack.Navigator>    
    );
}

export default AuthStack;