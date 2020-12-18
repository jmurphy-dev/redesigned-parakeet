// import { StatusBar } from 'expo-status-bar';
// import * as React from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';
// import { Audio } from 'expo-av';
// // import {Button} from "react-native-web";
//
// export default function App() {
//   const [sound, setSound] = React.useState();
//
//   async function playSound() {
//     console.log('Loading Sound');
//     const { sound } = await Audio.Sound.createAsync(
//         require('./assests/ambient_01.mp3')
//     );
//     setSound(sound);
//
//     console.log('Playing Sound');
//     await sound.playAsync();
//   }
//
//   React.useEffect(() => {
//     return sound
//     ? () => {
//       console.log('Unloading Sound');
//       sound.unloadAsync(); }
//       : undefined;
//   }, [sound]);
//   return (
//     <View style={styles.container}>
//       <Button title="Play Sound" onPress{playSound} />
//       {/*<StatusBar style="auto" />*/}
//     </View>
//   );
// }
import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
        require('./assets/ambient_01.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
        ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
        : undefined;
  }, [sound]);

  return (
      <View style={styles.container}>
        <Button title="Play Sound" onPress={playSound} />
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
