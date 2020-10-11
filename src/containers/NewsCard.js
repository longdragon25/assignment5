import React, {useCallback} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import {NewsCardStyles as styles} from '../styles/Styles';
import moment from 'moment';

export default function NewsCard({item}) {
  if (!item) return null;
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(item.url);
    if (supported) {
      await Linking.openURL(item.url);
    } else {
      Alert.alert("Don't know how to open this URL: " + item.url);
    }
  }, [item.url]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Image
        source={{uri: item.urlToImage}}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.detailContainer}>
        <Text style={styles.sourceContainer}>
          Source{'  '}
          <Text style={styles.source}>{item.source.name}</Text>
        </Text>
        <Text numberOfLines={5} style={styles.content}>
          {item.content}
        </Text>
        <Text style={styles.sourceContainer}>
          Published at{'  '}
          <Text style={styles.source}>
            {moment(item.publishedAt).format('LLL')}
          </Text>
        </Text>
        <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Read more</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
