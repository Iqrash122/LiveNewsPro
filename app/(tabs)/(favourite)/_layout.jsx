// import { Stack } from "expo-router";


// const FavouriteLayout = ()=>{
//     return(
//         <>
//             <Stack>
//                 <Stack.Screen name="index" options={{headerTitle:"Favourite", headerShown:false}}  />
//             </Stack>
//         </>
//     )
// }

// export default FavouriteLayout;



import { Stack } from 'expo-router';
import React from 'react';

const FavouriteLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Favourite", headerShown: false }} />
    </Stack>
  );
}

export default FavouriteLayout;
