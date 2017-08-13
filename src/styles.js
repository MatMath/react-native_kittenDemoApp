import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    justifyContent: 'center',
  },
  topSection: {
    flex: 1,
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'blue',
  },
  coreSection: {
    flex: 8,
    backgroundColor: 'grey',
  },
  bottomSection: {
    flex: 0.5,
    backgroundColor: 'pink',
  },
});

module.exports.styles = styles;
