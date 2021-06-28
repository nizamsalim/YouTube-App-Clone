import axios from 'axios';
import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import VideoItem from './VideoItem'

const Videos = () => {
    let API_KEY = 'AIzaSyBhEmkNkss3D5CDdn5PVLSTjqs4xj_9qnY'
    let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics%2Cplayer&chart=mostPopular&maxResults=50&key=${API_KEY}`
    const [videos, setVideos] = useState([])
    axios.get(url).then(async(response)=>{
      setVideos(response.data.items)
      
    })
    
    // console.log(videos);
      
    return (
        <ScrollView style={styles.container} >
           {
             videos.map((videoObj)=>{
               return <VideoItem video={videoObj} />
             })
           }
           
        </ScrollView>
    )
}
           
           
           
           
            

export default Videos

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'red'
    }
})
