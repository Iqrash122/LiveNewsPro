import { Stack } from "expo-router";

import { ThemeProvider } from '../app/ThemeContext';

const AppLayout = ()=>{
    return(
        <>
         <ThemeProvider>
            
                <Stack screenOptions={{headerShown:false}}>
                    <Stack.Screen name="(tabs)" />
                    <Stack.Screen name="(video)" />
                    <Stack.Screen name = "(signup)" />
                    <Stack.Screen name = "(login)" />

                </Stack>
            </ThemeProvider>
        </>
    )
}

export default AppLayout