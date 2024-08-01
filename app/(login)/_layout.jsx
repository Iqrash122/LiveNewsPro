
import { Stack } from "expo-router";


const Login = ()=>{
    return(
        <>
            <Stack>
                <Stack.Screen name="index" options={{headerTitle:"Login Screen", headerShown:false}} />
            </Stack>
        </>
    )
}

export default Login;