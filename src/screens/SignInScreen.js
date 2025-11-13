import { Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Input, { IconNames, KeyboardTypes, ReturnKeyTypes } from '../components/Input';
import SafeInputView from "../components/SafeInputView"; 
import { useState, useRef, useEffect } from "react"
import Button from "../components/Button";

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
    const [disabled, setDisabled] = useState(true);

    useEffect(()=> {
        console.log("only email: ", email, password);

        setDisabled( !email || !password);
    }, [email, password]);


    const onSubmit = () => {
        Keyboard.dismiss();
        console.log("email:", email, ", password:", password);
    };


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
                            onSubmitEditing = {onSubmit}
                        />

                        <View style={styles.buttonContainer}>
                            <Button title="로그인" onPress={onSubmit} disabled={disabled}/>
                        </View>
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
    buttonContainer:{
        width: "100%",
        marginTop: 30,
        paddingHorizontal: 20,
    },  
});

export default SignInScreen;