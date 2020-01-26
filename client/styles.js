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
    padding: 15,
  },
  userProfile: {
    width: "20%",
    flexDirection: 'column',
    marginHorizontal: 10,
    alignContent: 'center'
  },
  profile: {
    padding: 25,
  },
  profilePic: {
    width: '20%',
    height: '20%'
  }
});
