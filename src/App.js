import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './screens/SignInScreen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TestAvoid from './screens/TestAvoid';
import { WHITE } from './colors';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigations/AuthStack';
import MainStack from './navigations/MainStack';
import { useState } from 'react';

const App = () => {
    {/* 💡 
        SafeAreaView에 flex: 1과 backgroundColor를 가진 styles.container 적용 
        SafeAreaProvider가 안전 영역 정보를 설정합니다.

        SafeAreaView가 그 정보를 받아 상태 표시줄과 홈 인디케이터 영역을 제외한 곳에 콘텐츠를 배치하며, 
        여기에 styles.container에 정의된 흰색 배경이 화면 전체에 걸쳐 적용될 것입니다.
    */}
    
    const [user, setUser] = useState(null);

    return (
       <SafeAreaProvider>
          <NavigationContainer>
              <StatusBar style="dark" />
              {user ? (
                <MainStack user={user} setUser={setUser} />
              ) : (
                <AuthStack user={user} setUser={setUser} />
              )}          
          </NavigationContainer>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
});

export default App;