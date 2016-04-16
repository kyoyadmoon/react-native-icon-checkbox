# react-native-icon-checkbox

react native checkbox implement with  [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

![Gif](http://i.imgur.com/c9bXQ69.gif)

## **Installation**

1. need to Install [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) first 
2. `npm install react-native-icon-checkbox  --save`

## **Usage**

```javascript
import React, {
  View,
  Component,
} from 'react-native';
import CheckBox from 'react-native-icon-checkbox';

export default class Example extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  handlePress = (checked) => {
    this.setState({
      isChecked: checked,
    });
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <CheckBox
          label="Check"
          size={30}
          checked={this.state.isChecked}
          onPress={this.handlePress}
        />
      </View>
    );
  }
}
```

## **Options**

| Prop             | PropType | Default Value     | Description                              |
| ---------------- | -------- | ----------------- | ---------------------------------------- |
| size             | number   | 30                | icon size                                |
| checked          | bool     | false             | checked state                            |
| label            | string   | {fontSize: 16}    | label of button                          |
| labelStyle       | object   |                   | style of label                           |
| iconStyle        | object   | {marginLeft: -10} | color of the icon                        |
| checkedIconStyle | object   |                   | icon style when checked                  |
| color            | string   | '#000'            | icon color                               |
| backgroundColor  | string   | 'rgba(0,0,0,0)'   | background color of the button           |
| onPress          | func     |                   | A function called when the button is pressed. |
| underlayColor    | string   | 'reba(0,0,0,0)'   | [prop of TouchableHighlight](https://facebook.github.io/react-native/docs/touchablehighlight.html#underlaycolor) |
| activeOpacity    | number   | 1                 | [prop of TouchableHighlight](https://facebook.github.io/react-native/docs/touchablehighlight.html#activeopacity) |
| borderRadius     | number   | 5                 | borderRadius of button                   |

### 

[TouchableHighlight's Props](https://facebook.github.io/react-native/docs/touchablehighlight.html#touchablehighlight)

https://github.com/oblador/react-native-vector-icons#properties-1
