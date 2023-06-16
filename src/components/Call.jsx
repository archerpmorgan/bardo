// import React, { useState, useEffect, TouchableOpacity, Text, View, TextInput, Button } from 'react';
// import ContactsList from './ContactsList';

// function Call({ sessionId }) {

//     const [groups, setGroups] = useState([]);
//     const contactGroupNames = ["Normal Hours", "Extreme Hours", "Non-Member Loved Ones"]

//     useEffect(() => {
//         (
//             async () => {
//                 console.log('Getting Contacts');
//                 const { status } = await Contacts.requestPermissionsAsync();
//                 if (status === 'granted') {
//                     console.log('Status Granted');
//                     const allGroups = (await Contacts.getGroupsAsync({})).filter(
//                         group => contactGroupNames.includes(group.name));
//                     setGroups(allGroups);
//                 }
//             })();
//     }, []);

//     const makeCall = () => {
//     }

//     return (
//         <View>
//             {groups.map(item => (
//                 <View key={item.id}>
//                     <GroupDisplay group={item} />
//                 </View>
//             ))}
//             <Button style={styles.Button} title="Just Redirect Me" onPress={makeCall} />
//         </View>
//     );
// }

// function GroupDisplay({ group }) {

//     const [selected, setSelected] = useState(false);
//     const [contacts, setContacts] = useState([]);
//     const [loading, setLoading] = useState(true);


//     async function handlePress() {
//         setSelected(!selected);
//     }

//     async function handleRandom() {
//         console.log('Random');
//         listOfPhoneNumbers = contacts.data.map(item => item.phoneNumbers[0].number);
//         const randomPhoneNumber = listOfPhoneNumbers[Math.floor(Math.random() * listOfPhoneNumbers.length)];
//         const args = {
//             number: randomPhoneNumber, // String value with the number to call
//             prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
//             skipCanOpen: true // Skip the canOpenURL check
//         }
//         // call(args).catch(console.error)
//     }


//     useEffect(() => {
//         (
//             async () => {
//                 try {
//                     console.log('Getting Contacts for group:' + group.name);
//                     setLoading(true);
//                     const result = await Contacts.getContactsAsync({
//                         groupId: group.id,
//                         fields: [Contacts.Fields.ID, Contacts.Fields.Name, Contacts.Fields.PhoneNumbers, Contacts.Fields.Image],
//                     });
//                     setContacts(result);
//                 } catch (e) {
//                     setLoading(false);
//                     setError(e);
//                     console.log(e);
//                 } finally {
//                     setLoading(false);
//                 }
//             }
//         )();
//     }, []);

//     return (
//         <View>
//             <View style={{ flexDirection: 'row' }}>
//                 <TouchableOpacity style={styles.ButtonLeft} onPress={handlePress}>
//                     <Text style={styles.ButtonText}>{group.name}</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.ButtonRight} onPress={handleRandom}>
//                     {/* <Icon style={styles.icon} name={'casino'} size={40} color="#31C283" /> */}
//                 </TouchableOpacity>
//             </View>
//             {selected && !loading && <ContactsList contacts={contacts} />}
//         </View>
//     );
// }

// const styles = {
//     ButtonLeft: {
//         width: 200,
//         height: 50,
//         backgroundColor: '#007AFF',
//         marginVertical: 10,
//     },
//     ButtonRight: {
//         width: 50,
//         height: 50,
//         backgroundColor: '#CCFFFF',
//         marginVertical: 10,
//     },
//     ButtonText: {
//         color: '#FFFFFF', // Example text color
//         fontSize: 16,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginTop: 15,
//     },
//     icon: {
//         padding: 6,
//     }
// };

// export default Call;