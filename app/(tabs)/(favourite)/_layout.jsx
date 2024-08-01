import { Stack } from "expo-router";


const FavouriteLayout = ()=>{
    return(
        <>
            <Stack>
                <Stack.Screen name="index" options={{headerTitle:"Favourite", headerShown:false}}  />
            </Stack>
        </>
    )
}

export default FavouriteLayout;