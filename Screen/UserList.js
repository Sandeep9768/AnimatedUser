import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  TextInput,

} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checkOrder: true,
      search:'',
      calls: [
        { id: 1, name: "Mark Doe", status: "active", image: "https://bootdey.com/img/Content/avatar/avatar7.png" },
        { id: 2, name: "Clark Man", status: "active", image: "https://bootdey.com/img/Content/avatar/avatar6.png" },
        { id: 3, name: "Jaden Boor", status: "active", image: "https://bootdey.com/img/Content/avatar/avatar5.png" },
        { id: 4, name: "Srick Tree", status: "active", image: "https://bootdey.com/img/Content/avatar/avatar4.png" },
        { id: 5, name: "Erick Doe", status: "active", image: "https://bootdey.com/img/Content/avatar/avatar3.png" },
        { id: 6, name: "Francis Doe", status: "active", image: "https://bootdey.com/img/Content/avatar/avatar2.png" },
        { id: 8, name: "Matilde Doe", status: "active", image: "https://bootdey.com/img/Content/avatar/avatar1.png" },
        { id: 9, name: "John Doe", status: "active", image: "https://bootdey.com/img/Content/avatar/avatar4.png" },
        { id: 10, name: "Fermod Doe", status: "active", image: "https://bootdey.com/img/Content/avatar/avatar7.png" },
        { id: 11, name: "Danny Doe", status: "active", image: "https://bootdey.com/img/Content/avatar/avatar1.png" },
      ]
    };
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={styles.row}>
          <Image source={{ uri: item.image }} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
              <Text style={styles.mblTxt}>Mobile</Text>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.status}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View >
        <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <EvilIcons name="search" size={24} color="black" />
            <TextInput style={styles.inputs}
              ref={'txtSearch'}
              placeholder="Search"
              underlineColorAndroid='transparent'
              onChangeText={(search) => this.setState({ search:search },()=>{
                console.log(this.state);
              })} />
            <TouchableOpacity onPress={()=>{
              // let checkType=this.state.checkOrder ? false : true
              // console.log(checkType);
              this.setState({checkOrder:!this.state.checkOrder},()=>{
                console.log(this.state);
              })
            }}>
              {
                this.state.checkOrder ? <MaterialCommunityIcons name="sort-ascending" size={24} color="black" /> : <FontAwesome name="sort-amount-desc" size={24} color="black" />
              }
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          extraData={this.state}
          data={this.state.calls}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },


  formContent: {
    flexDirection: 'row',

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
}); 