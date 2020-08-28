import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  SafeAreaView,
  ActivityIndicator
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Service from '../Service/Service';
import { connect } from 'react-redux';

class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checkOrder: true,
      search: '',
      userList: null,
      originalList: null
    };
  }
  componentDidUpdate() {
    this.abc()
  }
 
  componentDidMount() {

    Service.getApi().then(res => {
      res.data.sort((a, b) =>
        a.firstname.localeCompare(b.firstname))
      
      this.setState({
        userList: res.data,
        originalList: res.data
      })
    })

  }
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        this.props.navigation.navigate('UserDetail', { item })
      }}>
        <View style={styles.row}>
          <Image source={{ uri: item.picture }} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.firstname}</Text>
              <Text style={styles.mblTxt}>{item.age}</Text>
            </View>
            <View style={styles.emailContainer}>
              <Text style={styles.emailTxt}>{item.email}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  filterByValue(array, value) {
    if (value) {
      return array.filter((data) => JSON.stringify(data).toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }
    return this.state.calls
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#eeeaea" }}>
        <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <EvilIcons name="search" size={24} color="black" />
            <TextInput style={styles.inputs}
              placeholder="Search"
              underlineColorAndroid='transparent'
              onChangeText={(search) => {
                if (search) {
                  var data = this.filterByValue(this.state.userList, search)
                  this.setState({ userList: data })
                }
                else {
                  this.setState({
                    userList: this.state.originalList
                  })
                }

              }} />
            <TouchableOpacity onPress={() => {
              this.setState({ checkOrder: !this.state.checkOrder }, () => {
                if (this.state.checkOrder) {
                  this.state.userList.sort((a, b) =>
                    a.firstname.localeCompare(b.firstname)
                  )
                  this.setState({ userList: this.state.userList })
                }
                else {
                  this.state.userList.sort((a, b) => a - b).reverse()
                  this.setState({ userList: this.state.userList })

                }
              })
            }}>
              {
                this.state.checkOrder ? <MaterialCommunityIcons name="sort-ascending" size={30} color="black" /> : <FontAwesome name="sort-amount-desc" size={22} color="black" />
              }
            </TouchableOpacity>
          </View>
        </View>
        <SafeAreaView style={{ flex: 10, marginTop: 20 }}>
          {
            this.state.userList ? <ScrollView >
              <FlatList
                extraData={this.state}
                data={this.state.userList}
                keyExtractor={(item) => {
                  return item.index.toString();
                }}
                renderItem={this.renderItem} />
            </ScrollView> : <ActivityIndicator size="large" />
          }
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  formContent: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 30

  },
  inputContainer: {
    borderRadius: 30,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconBtnSearch: {
    alignSelf: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
    width: 170,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emailTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
});
const mapStateToProps = (state) => {
  return { user: state };
};
export default connect(mapStateToProps, null)(
  UserList
);
