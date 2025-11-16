import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native"
import PropTypes from "prop-types"
import { PRIMARY, WHITE, GRAY } from "../colors"

/**
 * Pressable 컴포넌트를 사용했습니다. 
 * 이는 터치 이벤트를 처리하고 다양한 상호작용 상태(pressed, focused 등)에 따라 
 * 스타일을 다르게 적용할 수 있게 해주는 React Native의 기본 컴포넌트입니다.
 * 
 * Pressable 컴포넌트의 style 속성은 일반적인 React Native 컴포넌트와 다르게 함수를 값으로 받을 수 있습니다.
 * style= {({ pressed }) => ...}의 의미
    함수 값: style에 일반적인 스타일 객체 대신 함수가 전달되었습니다.

    형식: style={ (state) => StyleObjectOrArray }

    인자 객체 ({ pressed }): 
        이 함수는 Pressable 컴포넌트가 현재 상호작용하고 있는 상태를 담고 있는 객체를 인자로 받습니다. 
        여기서 { pressed }는 객체의 속성 중 **pressed**라는 속성만 비구조화 할당(Destructuring Assignment)으로 꺼내온 것입니다.

 */
const Button = ({ title, onPress, disabled, isLoading }) => {
    return (
        <Pressable
            onPress={onPress}
            style= {({ pressed }) =>[
                    styles.container,
                    pressed && { backgroundColor: PRIMARY.DARK },
                    disabled && { backgroundColor:PRIMARY.LIGHT, opacity: 0.6 }
                ]}
                disabled = {disabled}
        >
            { isLoading ? (
                <ActivityIndicator size="small" color={GRAY.DEFAULT} />
            ) : (
                <Text style={styles.title}>{title}</Text>
            )}            
            
        </Pressable>
    );
};



Button.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
}

const styles = StyleSheet.create({
    container: {
        borderRadius:8,
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: PRIMARY.DEFAULT,
    },
    title: {
        color: WHITE,
        fontSize: 16,
        fontWeight: "700",
        lineHeight: 20,
    }
})

export default Button;