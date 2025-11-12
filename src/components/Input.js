import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { BLACK, GRAY, PRIMARY } from "../colors";
import { forwardRef, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";


export const KeyboardTypes ={
    DEFAULT: 'default',
    EMAIL: 'email-address',
}

export const ReturnKeyTypes = {
    DONE: 'done',
    NEXT: 'next',
}

export const IconNames = {
    EMAIL: "email",
    PASSWORD: "lock",
}

 
const Input = forwardRef(
    ({title, placeholder, value, iconName, ...props}, ref) => {

        const [isFocused, setIsFocused] = useState(false);

        return (
            <View style ={styles.container}>
                <Text style={[
                    styles.title, 
                    value && styles.hasValueTitle,
                    isFocused && styles.focusedTitle
                    ]}
                >
                    {title}
                </Text>
                
                <View>
                    <TextInput 
                        {...props}
                        ref= {ref}
                        value={value}
                        style={[
                            styles.input,
                            value && styles.hasValueInput,
                            isFocused && styles.focusedInput
                        ]}
                        placeholder={placeholder ?? title} 
                        placeholderTextColor={GRAY.DEFAULT}
                        autoCapitalize="none"
                        autoCorrect={false}
                        textContentType = "none"
                        keyboardAppearance='light'
                        onFocus={()=> setIsFocused(true)}
                        onBlur={()=> setIsFocused(false)}
                    />

                    <View styles={styles.icon}>
                        <MaterialCommunityIcons 
                            name= {iconName}
                            size= {20}
                            color= {(()=> {
                                switch(true)
                                {
                                    case isFocused:
                                        return PRIMARY.DEFAULT;
                                    case !!value:
                                        return BLACK;
                                    default:
                                        return GRAY.DEFAULT;
                                }
                            })()} // () : 즉시 실행 함수 표현(IIFE)
                        />
                    </View>
                </View>
            </View>
        );
    }
);


Input.defaultProps = {
    keyboardType: KeyboardTypes.DEFAULT,
    returnKeyType: ReturnKeyTypes.DONE,
}

Input.propTypes ={
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    // keyboardType: PropTypes.oneOf(Object.values(KeyboardTypes)),
    // returnKeyType: PropTypes.oneOf(Object.values(ReturnKeyTypes)),
    // secureTextEntry: PropTypes.bool,
    iconName: PropTypes.oneOf(Object.values(IconNames)),
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        paddingHorizontal: 20,
        marginVertical:10,
    },
    title:{
        marginBottom: 4,
        COLOR: GRAY.DEFAULT,
    },
    hasValueTitle: {
        color: BLACK,
    },
    focusedTitle: {
        fontWeight: "600",
        color: PRIMARY.DEFAULT,
    },
    input:{
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 42,
        borderColor: GRAY.DEFAULT,
        paddingLeft: 30,
    },
    focusedInput: {
        borderWidth: 2,
        borderColor: PRIMARY.DEFAULT,
        color: PRIMARY.DEFAULT,
    },
    hasValueInput: {
        borderColor: BLACK,
        color: BLACK,
    },
    icon: {
        position: "absolute",
        left: 8,
        height: "100%",
        justifyContent: "center",
    },
});

export default Input;

/**
 *  position: "absolute"는 React Native(또는 웹 CSS)에서 요소의 위치를 잡는 방식을 근본적으로 바꾸는 매우 중요한 스타일 속성입니다.

    이 한 줄이 icon에 적용되면 다음과 같은 일이 발생합니다.

    1. 🌊 "흐름"에서 빠져나옵니다.

        일반적으로 React Native의 요소들은 (Flexbox 규칙에 따라) 순서대로 차곡차곡 쌓입니다. 텍스트 아래에 입력창이 오고, 그 아래에 버튼이 오는 식이죠.

        하지만 position: "absolute"가 적용된 icon은 이 정상적인 흐름(Normal Flow)에서 완전히 빠져나옵니다.

        다른 요소들은 이 icon을 없는 존재로 취급합니다. icon이 차지하던 공간이 사라지고, 뒤에 있던 요소들이 그 자리를 채우게 됩니다.

        마치 유령처럼 공중에 붕 뜨게 되어 다른 요소들 위로 겹쳐질 수 있습니다.


    2. 📍 기준점이 부모 요소로 바뀝니다.

        흐름에서 빠져나온 icon은 이제 "어디에 위치해야 할지"에 대한 새로운 기준이 필요합니다.

        position: "absolute"가 적용되면, 이 icon은 자신을 감싸고 있는 가장 가까운 부모 컴포넌트(View)의 영역을 기준으로 자신의 위치를 잡게 됩니다.


    3. 🕹️ 위치 조종이 필요합니다. (중요)

        position: "absolute" 자체는 '어떻게' 위치를 잡을지만 결정할 뿐, '어디에' 위치할지 알려주지는 않습니다.

        icon: { position: "absolute" }

        이 코드만으로는 icon을 원하는 위치에 둘 수 없습니다. 이 속성은 항상 다음과 같은 오프셋(offset) 속성들과 함께 사용됩니다.

        top: 부모의 윗쪽 경계로부터 얼마나 떨어질지

        bottom: 부모의 아랫쪽 경계로부터 얼마나 떨어질지

        left: 부모의 왼쪽 경계로부터 얼마나 떨어질지

        right: 부모의 오른쪽 경계로부터 얼마나 떨어질지
 * 
 * 
 */