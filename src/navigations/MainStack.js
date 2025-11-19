import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PRIMARY } from "../colors";
import HeaderLeftButton from "../components/HeaderLeftButton";
import HeaderRightButton from "../components/HeaderRightButton";
import ListScreen from "../screens/ListScreen";
import SettingsScreen from "../screens/SettingScreen";

const Stack = createNativeStackNavigator();


const MainStack = () => {
    return (
        <Stack.Navigator
            screenOption = {{
                contentStyle: { backgroundColor: 'white' },
                headerTitleAlign: 'center',
                headerTintColor: PRIMARY.DEFAULT,
                headerTitleStyle: {
                    fontWeight: '700',
                },
                headerLeft: HeaderLeftButton,
            }}
        >
            {/* MainStack의 Screen들을 여기에 추가합니다. */}
            <Stack.Screen
                name="List"
                component={ ListScreen }
                options = {{
                    title: 'To Do List',
                    headerRight: HeaderRightButton,
                }}
            />

            <Stack.Screen name="Setting" component={SettingsScreen}  />
        </Stack.Navigator>
    );
};

export default MainStack;