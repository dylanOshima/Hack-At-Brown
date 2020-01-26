import React from 'react';
import { View, Button, Text, TouchableWithoutFeedback } from 'react-native';
import styles from '../styles';
import { Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-deck-swiper';

const DATA = {
  "name": "Bio",
  "cards": [
      {
        id: "1",
        question: "What is a heart?",
        answer: "A thing",
      }, {
        id: "2",
        question: "How many lungs do you have?",
        answer:  "2",
      }, {
        id: "3",
        question: "How many legs do you have?",
        answer:  "4"
      }, {
        id: "4",
        question: "Do you like to move it, move it?",
        answer:  "MOVE IT!"
      },
  ]
}

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
      current_index: 0,
      easy: [],
      hard: [], 
    }
  }

  static navigationOptions = {
    title: 'Study',
    // headerLeft: (e) => (
    //   <TouchableOpacity
    //     style={{marginLeft: 5}}
    //     onPress={(f) => console.log(e, f)}>
    //     <Ionicons name="ios-arrow-back" size={24} color="black" />
    //   </TouchableOpacity>),
  };

  swipedRight = cardIndex => {
    console.log('Card ', cardIndex, ' was easy');
    this.setState({easy: [...this.state.easy, cardIndex]});
  }

  swipedLeft = cardIndex => {
    console.log('Card ', cardIndex, ' was difficult');
    this.setState({hard: [...this.state.hard, cardIndex]});
  }

  render() {
    const { current_index } = this.state;
    return (
      <View style={styles.container}>
        <Swiper
            cards={DATA.cards}
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
            onSwipedAll={_ => {console.log(this.state)}}
            cardIndex={current_index}
            backgroundColor={'#4FD0E9'}
            stackSize={3}
            animateOverlayLabelsOpacity
            overlayLabels={overlayStyle}>
              <Text style={styles.title}>Finished: {current_index}/{DATA.cards.length}</Text>
            {/* <Button
                onPress={() => {console.log('oulala')}}
                title="Press me">
                You can press me
            </Button> */}
        </Swiper>
      </View>
    )
  }
}