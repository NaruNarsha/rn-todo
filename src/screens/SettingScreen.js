import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import SafeInputView from '../components/SafeInputView';

const SettingsScreen = () => {
    
    return (
        <SafeInputView>
            <SafeAreaView style={styles.container}>
                <Text style = {{fontSize: 30}}>Settings Screen</Text>
            </SafeAreaView>
        </SafeInputView>
    );
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },  
});


export default SettingsScreen;