import { useLocalSearchParams } from 'expo-router';
import { Text, View } from "react-native";


const VideoId=()=>{
    const { id, title } = useLocalSearchParams()
    console.log({id, title})
    return (
        <>
        <View>
            <Text>{title}</Text>

        </View>
        
        </>
    );
};

export default VideoId;