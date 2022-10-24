import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  FlatList,

} from 'react-native';
import {ListItem} from 'react-native-elements';
import { connect } from 'react-redux';
import { deleteAlarm } from "../actions/alarms";
import DateTimePicker from '@react-native-community/datetimepicker';



const ListAlarms=(props)=>{
    const KeyExtractor =(item,index) => index.toString();
    const renderItem =  ({item}) => {
        return(
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title style ={styles.titleStyle}>{item.time.toString()}</ListItem.Title>
                    <ListItem.Subtitle>{item.date.toString()}</ListItem.Subtitle>
                </ListItem.Content>
                <Button
                    title = "Remove"
                    color = "red"
                    onPress = {() => {
                        props.delete(item.value);
                    }}
                >
                    
                </Button>
            </ListItem>
        );
    }
    return (
        <FlatList>
            KeyExtractor={KeyExtractor}
            data={props.alarms}
            renderItem={renderItem}
        </FlatList>
    );
}


const styles = StyleSheet.create({
    titleStyle: { fontWeight: "bold", fontSize: 30 },
});





const mapStateToProps= state =>{
    return {
        alarms:state.alarms.alarms,
    };
};

const mapDispatchToProps= dispatch =>{
    return {
        delete:value=>{
            dispatch(deleteAlarm(value));
        },
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(ListAlarms);
