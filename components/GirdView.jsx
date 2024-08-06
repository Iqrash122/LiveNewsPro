// import React from 'react';
// import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
// import HomeOptions from '../../livenewspro/components/home_options';

// const groupItems = (items) => {
//   const grouped = [];
//   let rowIndex = 0;

//   while (items.length) {
//     if (rowIndex % 2 === 0) {
//       grouped.push(items.splice(0, 3));
//     } else {
//       grouped.push(items.splice(0, 2));
//     }
//     rowIndex++;
//   }

//   // Log grouped items for debugging
//   console.log("Grouped Items:", grouped);

//   return grouped;
// };

// const GridView = ({ data, viewMode, onPress }) => {
//   const renderGridRow = ({ item, index }) => (
//     <View style={styles.gridRow} key={index}>
//       {item.map((gridItem, itemIndex) => {
//         if (!gridItem.id) {
//           console.warn("Missing id for item:", gridItem);
//         }

//         return (
//           <TouchableOpacity
//             key={gridItem.id ? gridItem.id.toString() : `key-${itemIndex}`}
//             style={[
//               styles.gridItem,
//               {
//                 marginLeft: itemIndex !== 0 ? 10 : 0,
//               },
//             ]}
//             onPress={() => onPress(gridItem)}
//           >
//             <HomeOptions data={gridItem} viewMode={viewMode} />
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );

//   return (
//     <FlatList
//       data={groupItems([...data])}
//       renderItem={renderGridRow}
//       keyExtractor={(item, index) => index.toString()}
//       numColumns={1}
//       contentContainerStyle={styles.scrollViewContent}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   gridRow: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   gridItem: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 5,
//     flex: 1,
//   },
//   scrollViewContent: {
//     paddingHorizontal: 10,
//   },
// });

// export default GridView;



import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import HomeOptions from '../../livenewspro/components/home_options';
const groupItems = (items) => {
  const grouped = [];
  let rowIndex = 0;

  while (items.length) {
    if (rowIndex % 2 === 0) {
      grouped.push(items.splice(0, 3));
    } else {
      grouped.push(items.splice(0, 2));
    }
    rowIndex++;
  }

  return grouped;
};

const GridView = ({ data, viewMode }) => {
  const navigation = useNavigation();

  const handlePress = (gridItem) => {
    navigation.navigate('VideoScreen', { videoUrl: gridItem.videoUrl });
  };

  const renderGridRow = ({ item, index }) => (
    <View style={styles.gridRow} key={index}>
      {item.map((gridItem, itemIndex) => (
        <TouchableOpacity
          key={gridItem.id.toString()}
          style={[
            styles.gridItem,
            {
              marginLeft: itemIndex !== 0 ? 10 : 0,
            },
          ]}
          onPress={() => handlePress(gridItem)}
        >
          <HomeOptions data={gridItem} viewMode={viewMode} />
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <FlatList
      data={groupItems([...data])}
      renderItem={renderGridRow}
      keyExtractor={(item, index) => index.toString()}
      numColumns={1}
      contentContainerStyle={styles.scrollViewContent}
    />
  );
};

const styles = StyleSheet.create({
  gridRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  gridItem: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    flex: 1,
  },
  scrollViewContent: {
    paddingHorizontal: 10,
  },
});

export default GridView;
