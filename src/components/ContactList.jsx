import { React, FlatList, View } from 'react';
import ContactRow from './Contact';

const ContactsList = ({ contacts }) => {

    console.log(contacts);

    const keyExtractor = (item) => {
        return item?.id?.toString();
    };
    const renderItem = ({ item }) => {
        return <ContactRow contact={item} />;
    };
    return (
        <View>
            {<FlatList
                data={contacts?.data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />}
        </View>
    );
};

export default ContactsList;