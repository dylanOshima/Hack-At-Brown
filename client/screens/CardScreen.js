import React from 'react';
import { Button, View, ActivityIndicator, Text, TouchableWithoutFeedback, Animated } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../styles';
import { URL } from '../api';

const overlayStyle = {
  left: {
    title: 'Difficult',
    style: {
      label: {
        backgroundColor: 'red',
        borderColor: 'black',
        color: 'white',
        borderWidth: 1
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginLeft: -30,
      }
    }
  },
  right: {
    title: 'Easy',
    style: {
      label: {
        backgroundColor: 'green',
        borderColor: 'black',
        color: 'white',
        borderWidth: 1
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginLeft: 30
      }
    }
  }
};

function Card({ index, question, answer }) {
  const [ showAnswer, setShowAnswer ] = React.useState(false);

  return (
    <TouchableWithoutFeedback 
      onPress={() => setShowAnswer(!showAnswer)}>
        <View style={styles.card}>
          { showAnswer 
              ? <Text style={{...styles.cardText, fontStyle: 'italic'}}>{answer}</Text>
             : <Text style={styles.cardText}>{question}</Text>}
        </View>
    </TouchableWithoutFeedback>
  )
}

export default class CardScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      cards: [],
      current_index: 0,
      easy: [],
      hard: [],
      finished: false,
    }
  }

  static navigationOptions = {
    title: 'Study',
  };

  componentDidMount() {
    let subject = this.props.navigation.state.params.item;
    return fetch(URL + "/study?" + new URLSearchParams({name: subject}).toString())
      .then(response => response.json())
      .then(response_JSON => JSON.parse(response_JSON))
      .then(resp => {
        this.setState({
          isLoading: false,
          cards: resp.cards
        });
      }).catch(err => console.log(err));
  }

  swipedRight = cardIndex => {
    // console.log('Card ', cardIndex, ' was easy');
    this.setState({easy: [...this.state.easy, cardIndex]});
  }

  swipedLeft = cardIndex => {
    // console.log('Card ', cardIndex, ' was difficult');
    this.setState({hard: [...this.state.hard, cardIndex]});
  }

  render() {
    const { current_index } = this.state;
        
    if(this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>    
      )
    }

    const completion = (
      <View style={{...styles.title, ...styles.resultsCard}}>
        <Text style={{fontSize: 40, marginBottom: 10}}> Finished! </Text>
        <Text style={{fontSize: 20, color: 'magenta'}}> 
          Review in 1 day: {this.state.hard.length}/{this.state.cards.length}
        </Text>
        <Text style={{fontSize: 20, color: 'green'}}> 
          Review in 1 week {this.state.easy.length}/{this.state.cards.length}
        </Text>
        <View style={{marginTop: 30}}>
          <Text style={{fontSize: 20}}>People also studying this:</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.userProfile}>
              <MaterialCommunityIcons name="face-profile" size={30} />
              <Text>Shin-Ji</Text>
            </View>
            <View style={styles.userProfile}>
              <MaterialCommunityIcons name="face-profile" size={30} />
              <Text>Dylan</Text>
            </View>
            <View style={styles.userProfile}>
              <MaterialCommunityIcons name="face-profile" size={30} />
              <Text>Naoki</Text>
            </View>
          </View>
        </View>
      </View>
    )

    return (
      <View style={styles.container}>
        <Swiper
            cards={this.state.cards}
            renderCard={(card, index) => {
                return (
                  <Card index={index} question={card.question} answer={card.answer} />
                )
            }}
            verticalSwipe={false}
            onSwiped={_ => {
              this.setState({current_index: current_index + 1});
            }}
            onSwipedRight={this.swipedRight}
            onSwipedLeft={this.swipedLeft}
            onSwipedAll={_ => this.setState({finished: true})}
            cardIndex={current_index}
            backgroundColor={'#4FD0E9'}
            stackSize={3}
            animateOverlayLabelsOpacity
            overlayLabels={overlayStyle}>
              {!this.state.finished ? 
                (<Text style={styles.title}>
                    Finished: {current_index}/{this.state.cards.length}
                </Text>) : completion
              }
        </Swiper>
      </View>
    )
  }
}