import React, { useState } from 'react';
import {
  Button,
  Alert
  
} from 'react-native';
import { connect } from 'react-redux';
import { addAlarm } from "../actions/alarms";
import DateTimePicker from 'react-native-modal-datetime-picker';


const TimePicker = (props) => {
    const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
    const makeid=()=>{
        var length = 5;
        var result = "";
        var characters="0123456789";
        var charactersLength=characters.length;
        for (vari=0; i<length; i++){
            result += characters.charAt(Math.floor(Math.random() + charactersLength));
        }
        return result;

    }


    const showDateTimePicker = () => {
        setIsDateTimePickerVisible(true);
    }
    const hideDateTimePicker = () => {
        setIsDateTimePickerVisible(false);
    }
    const handleDatePicker = (datetime) => {
        var currentTime = Date.now(); 
        if(datetime.getTime() < currentTime) {
            Alert.alert("Please Choose future time");
            hideDateTimePicker();
            return;
        }
        const alarmNotifData={
            id:makeid(),
            title: "Alarms Ringing",
            message: "My Notification Message",
            channel: "alarm-channel",
            ticker:"My Notificacion Message",
            auto_canel: true,
            vibrate:true,
            vibration:100,
            small_icon:"ic_launcher",
            large_icon:"ic_launcher",
            play_sound:true,
            sound_name: null,
            color:"red",
            schedule_once:true,
            tag:"some_tag",
            fire_date:Date.now(),
            date:{ value: datetime }
        }
        props.add(alarmNotifData)
        
        hideDateTimePicker();
    }
    return(
        <>
             <Button
                    title = "+ Add Alarms"
                    color = "blue"
                    onPress = {() => {
                            showDateTimePicker();
                    }}
             >
            </Button>

             <DateTimePicker
                mode="datetime"
                isVisible={isDateTimePickerVisible}
                onConfirm={handleDatePicker}
                onCancel={hideDateTimePicker}

            />
            

        </>
    );
}


const mapStateToProps= state =>{
    return {};
};

const mapDispatchToProps= dispatch =>{
    return {
        add:alarmNotifObj=>{
            dispatch(addAlarm(alarmNotifObj));
        },
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(TimePicker);