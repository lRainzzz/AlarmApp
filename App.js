import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import ListAlarms from './src/components/ListAlarms';

import TimePicker from './src/components/TimePicker';

const App = () => {


    return (
      <View style = {styles.mainContainer}>
          <Text style={styles.heading}>Alarm App</Text>
          <SafeAreaView style={styles.ListAlarms}>
            <ListAlarms />
          </SafeAreaView>
          <View style={styles.TimePicker}>
            <TimePicker />
          </View>
         </View>
    );
};


const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    alignItems: "center",
  },
  heading:{
    fontSize:25,
    padding: 20,
  },
  TimePicker:{
    paddingTop:"10%",
    width:"50%",
    bottom: 20,
  },
  ListAlarms: {
    flex: 1,
    width:"100%",
  }
});
export default App;
