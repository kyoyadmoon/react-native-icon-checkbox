import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CheckBox(props) {
  const iconName = props.checked ? props.checkedIconName : props.uncheckedIconName;
  const styles = StyleSheet.create({
    label: {
      fontSize: 16,
    },
    icon: {
      marginLeft: -10,
    },
  });

  function onPress() {
    props.onPress(!props.checked);
  }

  return (
    <Icon.Button
      {...props}
      name={iconName}
      size={props.size}
      backgroundColor={props.backgroundColor}
      color={props.color}
      iconStyle={[styles.icon, props.iconStyle, props.checked && props.checkedIconStyle]}
      onPress={onPress}
      activeOpacity={props.activeOpacity}
      underlayColor={props.underlayColor}
      borderRadius={props.borderRadius}
    >
      <Text
        style={[styles.label, props.labelStyle]}
      >
        {props.label}
      </Text>
    </Icon.Button>
  );
}

CheckBox.propTypes = {
  size: PropTypes.number,
  checked: PropTypes.bool,
  label: PropTypes.string,
  labelStyle: Text.propTypes.style,
  iconStyle: Text.propTypes.style,
  checkedIconStyle: Text.propTypes.style,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func,
  underlayColor: PropTypes.string,
  activeOpacity: PropTypes.number,
  borderRadius: PropTypes.number,
  uncheckedIconName: PropTypes.string,
  checkedIconName: PropTypes.string,
};

CheckBox.defaultProps = {
  size: 30,
  checked: false,
  labelStyle: {},
  iconStyle: {},
  checkedIconStyle: {},
  color: '#000',
  backgroundColor: 'rgba(0,0,0,0)',
  underlayColor: 'rgba(0,0,0,0)',
  activeOpacity: 1,
  borderRadius: 5,
  uncheckedIconName: 'check-box-outline-blank',
  checkedIconName: 'check-box',
};
