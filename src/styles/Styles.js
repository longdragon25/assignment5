import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../constants/Constants';
import Constants from 'expo-constants'
export const MainStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop:Constants.statusBarHeight
  },
});

export const HeaderStyles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export const ListFooterStyles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: 'center',
    height: 40,
  },
  availableText: {
    fontSize: 17,
  },
});

export const NewsCardStyles = StyleSheet.create({
  container: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    marginTop: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
  image: {
    width: SCREEN_WIDTH - 20,
    height: 250,
  },
  detailContainer: {
    padding: 10,
  },
  sourceContainer: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  source: {
    fontWeight: 'normal',
    color: '#757575',
  },
  content: {
    fontSize: 15,
  },
  buttonContainer: {
    backgroundColor: '#64b5f6',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
  },
});
