import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    fontFamily: 'Futura',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 20,
    borderRadius: 8,
    textAlign: 'center'
  },
  title: {
    alignSelf: 'center',
    fontSize: 28,
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  },
  cardText: {
    textAlign: 'center',
    fontSize: 30,
    paddingHorizontal: 10,
  },
  resultsCard: {
    marginTop: 60, 
    backgroundColor: 'white',
    padding: 15
  }
  // card: {
  //   backgroundColor: 'purple',
  //   position: 'absolute',
  //   padding: 20,
  //   // marginVertical: 8,
  //   marginHorizontal: 16,
  //   fontSize: 16,
  //   justifyContent: 'center',
  //   width: "90%",
  //   height: 150,
  //   shadowOffset: { width: 1.5, height: 1.5 },
  //   shadowRadius: 6,
  //   shadowColor: "#000",
  //   shadowOpacity: 0.75
  // }
  
});
