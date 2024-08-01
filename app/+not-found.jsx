import { StyleSheet, Text, View } from "react-native"


const NotFoundLayout = ()=>{
    return(
        <>
            <View style={style.container}>
                <Text>
                    Not Found   
                </Text>
            </View>
        </>
    )
}

export default NotFoundLayout

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})