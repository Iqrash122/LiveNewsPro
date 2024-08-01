// // import React from 'react';
// // import { FlatList, StyleSheet, View } from 'react-native';
// // import HomeOptions from '../../livenewspro/components/home_options';

// // const groupItems = (items) => {
// //   const grouped = [];
// //   let rowIndex = 0;

// //   while (items.length) {
// //     if (rowIndex % 2 === 0) {
// //       // First and every odd row (3 items)
// //       grouped.push(items.splice(0, 3));
// //     } else {
// //       // Second and every even row (2 items)
// //       grouped.push(items.splice(0, 2));
// //     }
// //     rowIndex++;
// //   }

// //   return grouped;
// // };

// // const GridView = ({ data, viewMode }) => {
// //   const renderGridRow = ({ item, index }) => (
// //     <View style={styles.gridRow} key={index}>
// //       {item.map((gridItem, itemIndex) => (
// //         <View
// //           key={gridItem.id.toString()}
// //           style={[
// //             styles.gridItem,
// //             {
// //               marginLeft: itemIndex !== 0 ? 10 : 0,
// //             },
// //           ]}
// //         >
// //           <HomeOptions data={gridItem} viewMode={viewMode} />
// //         </View>
// //       ))}
// //     </View>
// //   );

// //   return (
// //     <FlatList
// //       data={groupItems([...data])}
// //       renderItem={renderGridRow}
// //       keyExtractor={(item, index) => index.toString()}
// //       numColumns={1}
// //       contentContainerStyle={styles.scrollViewContent}
// //     />
// //   );
// // };



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

//   return grouped;
// };

// const GridView = ({ data, viewMode, onPress }) => {
//   const renderGridRow = ({ item, index }) => (
//     <View style={styles.gridRow} key={index}>
//       {item.map((gridItem, itemIndex) => (
//         <TouchableOpacity
//           key={gridItem.id.toString()}
//           style={[
//             styles.gridItem,
//             {
//               marginLeft: itemIndex !== 0 ? 10 : 0,
//             },
//           ]}
//           onPress={() => onPress(gridItem)}
//         >
//           <HomeOptions data={gridItem} viewMode={viewMode} />
//         </TouchableOpacity>
//       ))}
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
//     // backgroundColor: '#ccc',
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

const GridView = ({ data, viewMode, onPress }) => {
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
          onPress={() => onPress(gridItem)}
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
