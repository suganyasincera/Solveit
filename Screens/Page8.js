import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TouchableOpacity } from "react-native";

const Page8 = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
      <TouchableOpacity
        style={{
          width: "50%",
          height: 50,
          borderWidth: 1,
          borderColor: "#c1c1c1",
          backgroundColor: "#d7c9",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }} onPress = {()=>{showDatePicker();}}
      >
        <Text>show date</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default Page8;
