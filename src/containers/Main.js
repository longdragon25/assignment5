import React, {useState, useEffect} from 'react';
import {View, FlatList, Button, Text} from 'react-native';
import {MainStyles as styles} from '../styles/Styles';
import Header from './Header';
import {API_KEY, PAGE_SIZE} from '../constants/Constants';
import ListFooter from './ListFooter';
import NewsCard from './NewsCard';
//https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&pageSize=${PAGE_SIZE}&page=${page}
export default function Main() {
  const [listNews, setListNews] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasNewsRemaining, setHasNewsRemaining] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function getNews(page) {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&pageSize=${PAGE_SIZE}&page=${page}`,
      );
      const result = await response.json();
      if (result.status === 'ok') {
        if (result.articles.length === 0) {
          setHasNewsRemaining(false);
        } else {
          setListNews((prevState) => [...prevState, ...result.articles]);
          setHasNewsRemaining(true);
        }
        setHasError(false);
      } else {
        setHasError(true);
      }
    } catch (error) {
      setHasError(true);
    }
    setIsLoading(false);
  }
  async function onRefreshing() {
    setRefreshing(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&pageSize=${PAGE_SIZE}&page=1`,
      );
      const result = await response.json();
      if (result.status === 'ok') {
        setListNews([...result.articles]);
        setHasNewsRemaining(true);
        setPageNumber(1);
        setHasError(false);
      } else {
        setHasError(true);
      }
    } catch (error) {
      setHasError(true);
    }
    setRefreshing(false);
  }
  useEffect(() => {
    if (!refreshing) getNews(pageNumber);
  }, [pageNumber]);

  return (
    <View style={styles.container}>
      <Header articleCount={hasError ? 0 : listNews.length} />
      {hasError ? (
        <View>
          <Text>There is some errors happened</Text>
          <Button title="TRY AGAIN" onPress={onRefreshing} />
        </View>
      ) : (
        <FlatList
          ListFooterComponent={
            <ListFooter
              isLoading={isLoading}
              hasNewsRemaining={hasNewsRemaining}
            />
          }
          data={listNews}
          renderItem={({item}) => <NewsCard item={item} />}
          keyExtractor={(item) => item.title + 'key'}
          initialNumToRender={PAGE_SIZE}
          onEndReached={({distanceFromEnd}) => {
            if (hasNewsRemaining) {
              setPageNumber((prevState) => prevState + 1);
              console.log(distanceFromEnd);
            }
          }}
          onEndReachedThreshold={0.1}
          refreshing={refreshing}
          onRefresh={onRefreshing}
        />
      )}
    </View>
  );
}
