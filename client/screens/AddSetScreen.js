import React from 'react';
import { Button, View, ActivityIndicator, Text, TouchableWithoutFeedback, Animated } from 'react-native';
import styles from '../styles';

// import ImagePicker from 'react-native-image-picker';

export default class AddSetScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      name: "",
      imageLocation: "",
    }
  }

  static navigationOptions = {
    title: 'Upload Notes',
  };

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
  };
  
  render() {
    const { isLoading } = this.state;
        
    if(isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>    
      )
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Upload your notes!</Text>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
        )}
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
      </View>
      </View>
    )
  }
}