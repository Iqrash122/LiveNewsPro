
import { Stack } from "expo-router";


const signUpLayout = ()=>{
    return(
        <>
            <Stack>
                <Stack.Screen name="index" options={{headerTitle:"SignUp Screen", headerShown:false}} />
            </Stack>
        </>
    )
}

export default signUpLayout;