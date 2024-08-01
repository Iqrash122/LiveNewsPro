// // VideoLayout.js
// import { Drawer } from "expo-router/drawer";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

// const VideoLayout = () => {
//   return (
//     <GestureHandlerRootView>
//       <Drawer name="index" component={{headerShown:false}} />
//     </GestureHandlerRootView>
//   );
// };

// export default VideoLayout;


import { Stack } from "expo-router";


const VideoLayout = ()=>{
    return(
        <>
            <Stack>
                <Stack.Screen name="index" options={{headerTitle:"VideoScreen", headerShown:false}} />
            </Stack>
        </>
    )
}

export default VideoLayout;