import React from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  let catList = [
    
    {
      title: "Computer Programming",
    },
    {
      title: "Lectures",
    },
    {
      title: "Carnatic Music",
    },
    {
      title: "Cloud Computing",
    },
    {
      title: "Website",
    },
    {
      title: "Mixes",
    },
    {
      title: "Web series",
    },
    {
      title: "A.R. Rahman",
    },
    {
      title: "Imagine Dragons",
    },
    {
      title: "React Native",
    },
    {
      title: "Javascript",
    },
    {
      title: "Android",
    },
  ];
  return (
    <View style={styles.container}> 
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

        <View style={styles.explore_container} >
          <TouchableOpacity style={styles.button_container}>
            <Image source={require('../../assets/explore.png')} style={{width:25,height:25}} />
            <Text style={styles.explore_text} >Explore</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cat_container}>
          <TouchableOpacity>
            <Text style={styles.cat_text}> All </Text>
          </TouchableOpacity>
        </View>

        {
          catList.map((category)=>{
            return(
              <View style={{marginLeft:4}} >
                <CategoryItem category={category} />
              </View>
            )
          })
        }
        
        
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container:{
    height: 45,
    borderBottomColor: "#fff",
    padding: 5,
    justifyContent: "center",
    backgroundColor:'#202020'
    
  },
  button_container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#333232",
    alignItems: "center",
    padding: 5,
    borderRadius: 2,
    paddingRight: 10,
  },
  explore_text: {
    color: "#fff",
    fontSize: 15,
    paddingBottom: 2,
    paddingLeft: 5,
    fontWeight: "700",
  },
  cat_container: {
    marginLeft: 5,
    marginTop: "auto",
    marginBottom: "auto",
    backgroundColor: "#fff",
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 15,
    borderColor: "#fff",
    borderWidth: 0.2,
  },
  cat_text: {
    color: "#000",
    fontSize: 15,
  },
  explore_container:{
    marginLeft:4,
    // backgroundColor:'red',
    paddingRight:15,
    marginRight:10,
    borderRightColor:'rgba(255,255,255,0.2)',
    borderRightWidth:0.2
  }
  
});
