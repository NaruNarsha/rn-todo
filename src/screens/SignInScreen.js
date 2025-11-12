import { Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Input, { IconNames, KeyboardTypes, ReturnKeyTypes } from '../components/Input';
import SafeInputView from "../components/SafeInputView"; 
import { useState, useRef } from "react"

// const SignInScreen = () => {
//     return (
//         <SafeInputView>
//             <View style ={styles.container}>
//                 <Image
//                     source = {require('../../assets/main.png')}
//                     style={styles.image}
//                 />
//                 <Input title='이메일' placeholder='your@email.com' keyboardType={KeyboardTypes.EMAIL} returnKeyType={ReturnKeyTypes.NEXT}/>
//                 <Input title='비밀번호' returnKeyType={ReturnKeyTypes.DONE} secureTextEntry />
//             </View>
//         </SafeInputView>
//     );
// };



const SignInScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const passwordRef = useRef(null);


    console.log(email, password);


    return (
        <KeyboardAvoidingView
            style = {{flex: 1}}
            behavior={Platform.select({ios: "padding"})}
        >
            <Pressable 
                style ={{flex: 1}} 
                onPress = {() => Keyboard.dismiss()}>
                    <View style ={styles.container}>
                        <Image
                            source = {require('../../assets/main.png')}
                            style={styles.image}
                        />
                        <Input 
                            title='이메일' 
                            placeholder='your@email.com' 
                            keyboardType={KeyboardTypes.EMAIL} 
                            returnKeyType={ReturnKeyTypes.NEXT}
                            value = {email}
                            onChangeText = {(email) => setEmail(email)}
                            iconName = {IconNames.EMAIL}
                            onSubmitEditing={()=> passwordRef.current.focus()}
                        />

                        <Input 
                            ref = {passwordRef}
                            title='비밀번호' 
                            returnKeyType={ReturnKeyTypes.DONE} 
                            secureTextEntry
                            value = {password}
                            onChangeText = {(password) => setPassword(password.trim())} 
                            iconName = {IconNames.PASSWORD}
                        />
                    </View>
            </Pressable>
        </KeyboardAvoidingView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
});

export default SignInScreen;