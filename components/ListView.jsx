// // import React from 'react';
// // import { FlatList, StyleSheet, View } from 'react-native';
// // import HomeOptions from '../../livenewspro/components/home_options';

// // const ListView = ({ data, viewMode }) => (
// //   <FlatList
// //     data={data}
// //     renderItem={({ item }) => (
// //       <View style={styles.listItem}>
// //         <HomeOptions data={item} viewMode={viewMode} />
// //       </View>
// //     )}
// //     keyExtractor={(item) => item.id.toString()}
// //     contentContainerStyle={styles.scrollViewContent}
// //   />
// // );


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






import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import HomeOptions from '../../livenewspro/components/home_options';

const ListView = ({ data, viewMode, onPress }) => (
  <FlatList
    data={data}
    renderItem={({ item }) => (
      <TouchableOpacity style={styles.listItem} onPress={() => onPress(item)}>
        <HomeOptions data={item} viewMode={viewMode} />
      </TouchableOpacity>
    )}
    keyExtractor={(item) => item.id.toString()}
    contentContainerStyle={styles.scrollViewContent}
  />
);

const styles = StyleSheet.create({
  listItem: {
    marginBottom: 10,
  },
  scrollViewContent: {
    paddingHorizontal: 10,
  },
});

export default ListView;
