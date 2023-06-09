import { useDispatch, useSelector } from 'react-redux';

import { CategoryItem } from '../../components';
import { FlatList } from 'react-native';
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { selectCategory } from '../../store/actions';
import styles from './styles';

const Categories = ({ navigation }) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories);
    const onSelected = (item) => {
        dispatch(selectCategory(item.id));
        navigation.navigate('Products', {
            title: item.title,
        });
    };

    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
    const keyExtractor = (item) => item.id.toString();

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.containerList}
                data={categories}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                contentContainerStyle={styles.contentContainerList}
            />
        </SafeAreaView>
    );
};
export default Categories;
