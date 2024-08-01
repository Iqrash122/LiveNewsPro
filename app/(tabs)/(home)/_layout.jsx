import { Stack } from "expo-router";
const HomeLayout = ()=>{
    return(
        <>  
            
            <Stack screenOptions={{headerShown:false}}>
                <Stack.Screen name="index" />
                {/* <Stack.Screen name="Video" component={VideoScreen} /> */}
                {/* <Stack.Screen name="video" component={video} /> */}


                

            </Stack>
        </>
    )
}

export default HomeLayout;