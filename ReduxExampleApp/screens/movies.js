import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../store/actions/movies';
import MovieItem from '../components/movieItem';

const Movies = () => {
    const movies = useSelector(state => state.moviesReducer.movies);
    const dispatch = useDispatch();
    const fetchMovies = () => dispatch(getMovies());
    useEffect(() => {
        fetchMovies();
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Popular Movies</Text>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={movies}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => {
                        const IMAGE_SERVER =
                            'https://image.tmdb.org/t/p/w185';
                        return (
                            <MovieItem item={item} IMAGE_SERVER={IMAGE_SERVER} />
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 22
    },
    flatListContainer: {
        flex: 1,
        marginTop: 12
    }
});
export default Movies;