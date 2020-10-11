import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {ListFooterStyles as styles} from '../styles/Styles';

export default function ListFooter({isLoading, hasNewsRemaining}) {
  function renderFooter(is_Loading, has_News_Remaining) {
    if (is_Loading && has_News_Remaining) {
      return <ActivityIndicator size="small" color="#ee1b22" />;
    } else if (!is_Loading && !has_News_Remaining) {
      return (
        <Text style={styles.availableText}>There are no remaining news</Text>
      );
    } else {
      return null;
    }
  }
  return (
    <View style={styles.container}>
      {renderFooter(isLoading, hasNewsRemaining)}
    </View>
  );
}
