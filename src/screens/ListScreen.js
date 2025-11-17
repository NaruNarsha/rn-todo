import { Button, StyleSheet, Text, View } from "react-native";


const ListScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30}}>List Screen</Text>
            <Button title="push" onPress={()=> navigation.push('List')} />
                <Button title="navigate" onPress={()=> navigation.navigate('List')} />
        </View>
    );
};



const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ListScreen;