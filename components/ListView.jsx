// import React from 'react';
// import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
// import HomeOptions from '../../livenewspro/components/home_options';

// const ListView = ({ data, viewMode, onPress }) => (
//   <FlatList
//     data={data}
//     renderItem={({ item }) => (
//       <TouchableOpacity style={styles.listItem} onPress={() => onPress(item)}>
//         <HomeOptions data={item} viewMode={viewMode} />
//       </TouchableOpacity>
//     )}
//     keyExtractor={(item) => item.id.toString()}
//     contentContainerStyle={styles.scrollViewContent}
//   />
// );

// const styles = StyleSheet.create({
//   listItem: {
//     marginBottom: 10,
//   },
//   scrollViewContent: {
//     paddingHorizontal: 10,
//   },
// });

// export default ListView;




import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import HomeOptions from '../../livenewspro/components/home_options';

const ListView = ({ data, viewMode }) => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate('VideoScreen', { videoUrl: item.videoUrl });
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.listItem} onPress={() => handlePress(item)}>
          <HomeOptions data={item} viewMode={viewMode} />
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
      contentContainerStyle={styles.scrollViewContent}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginBottom: 10,
  },
  scrollViewContent: {
    paddingHorizontal: 10,
  },
});

export default ListView;

