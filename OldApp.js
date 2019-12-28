import React, { Component } from 'react';
import { StyleSheet,Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headtxt}>Hommy</Text>
      </View>
    );
  }
}

class Cards extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.card}>
        <Image style={styles.image} source={{uri:this.props.link}}/>
        <Text style={styles.title}>{this.props.title} </Text>
        <Text style={styles.sub}>{this.props.sub}</Text>
        <Text style={styles.val}>{this.props.val}</Text>        
      </TouchableOpacity>
    );
  }
}

export default class tela extends Component {
  render() {
    return (
      <ScrollView style={styles.views}>
        <Header/>
        <Cards 
        link='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSacsqMJBnfMjrBLx0KFY-gm3ZJS6uhkYKGEe2CvYd1LsEmOZrj'
        title='Fulaninho'
        sub='Pedreiro'
        val='100$/h'/>
        <Cards 
        link='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVeNsl4LiomCuQZrfQDx-6pm2gy-pv886vA6xqsk6U1t24L9Ct'
        title='Beltrano'
        sub='Encanador'
        val='80$/h'/>
        <Cards 
        link='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf5gRzXf25UjizU2ifYEclqZACTfDuOZ6V5qht6PJvS0CJVrUE'
        title='Teltrano'
        sub='Eletricista'
        val='130$/h'/>
        <Cards 
        link='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxW5la15RcqyJICO7XUO5y7AU4hTIpf1ikVgetYeV8tDNf7NFq'
        title='Ciclano'
        sub='Pintor'
        val='150$/h'/>
        <Cards 
        link='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSacsqMJBnfMjrBLx0KFY-gm3ZJS6uhkYKGEe2CvYd1LsEmOZrj'
        title='Fulaninho'
        sub='Pedreiro'
        val='100$/h'/>
        <Cards 
        link='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVeNsl4LiomCuQZrfQDx-6pm2gy-pv886vA6xqsk6U1t24L9Ct'
        title='Beltrano'
        sub='Encanador'
        val='80$/h'/>
        <Cards 
        link='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf5gRzXf25UjizU2ifYEclqZACTfDuOZ6V5qht6PJvS0CJVrUE'
        title='Teltrano'
        sub='Eletricista'
        val='130$/h'/>
        <Cards 
        link='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxW5la15RcqyJICO7XUO5y7AU4hTIpf1ikVgetYeV8tDNf7NFq'
        title='Ciclano'
        sub='Pintor'
        val='150$/h'/>        
      </ScrollView>

     
    );
  }
}


const styles = StyleSheet.create({
 header:{
   flex: 1,
   height: 55,
   backgroundColor: 'blue', 
   alignItems: 'center',  
    marginBottom:  10,
    position: 'relative'
    bottom
    
 },
 headtxt:{
  fontSize:30,
  color: "#ffff",
  fontWeight: '800',
 },
 card:{
   flex:1,
   height: 150,
   alignItems: 'center', 
   elevation: 5,
   marginBottom: 10,
   shadowColor:"#000",
   backgroundColor: "#FFFFFF",
   shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.37,
  shadowRadius: 7.49,
  borderWidth:0.5,
 },
 title: {
  position: "absolute",
  right: 45,
  fontSize: 25,
  
  },
  sub:{position: "absolute",
  right: 55,
  top: 30,
  fontSize: 15,
  },
  val:{position: "absolute",
  right: 55,
  bottom: 20,
  fontSize: 20,
  },
  image: { 
    position:"absolute",
    left: 10,
    width:150,
   height: 150, 
  },
  views:{
    backgroundColor: "#FFFFFF",
  }
})