import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import CheckBox from 'react-native-icon-checkbox';

const styles = StyleSheet.create({
  checkedIconStyle: {
    color: 'red',
  },
});

export default class Example extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      isRadioSelected: true,
    };
  }

  handlePressCheckedBox = (checked) => {
    this.setState({
      isChecked: checked,
    });
  }

  handleSelectedRadionButton = (checked) => {
    this.setState({
      isRadioSelected: checked,
    });
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <CheckBox
          label="Checkbox"
          size={30}
          checked={this.state.isChecked}
          onPress={this.handlePressCheckedBox}
          checkedIconStyle={styles.checkedIconStyle}
        />
        {/* You can use other Icon */}
        {/* Here is the example of Radio Icon */}
        <CheckBox
          label="RadioButton"
          size={30}
          checked={this.state.isRadioSelected}
          onPress={this.handleSelectedRadionButton}
          uncheckedIconName="radio-button-unchecked"
          checkedIconName="radio-button-checked"
        />
      </View>
    );
  }
}
