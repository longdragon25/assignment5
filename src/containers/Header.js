import React from 'react';
import {Text} from 'react-native';
import {NewsCardStyles, HeaderStyles as styles} from '../styles/Styles';

export default function Header({articleCount = 0}) {
  return (
    <Text style={styles.title}>
      Articles Count: <Text style={NewsCardStyles.source}>{articleCount}</Text>
    </Text>
  );
}
