import axios from 'axios';
import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import VideoItem from './VideoItem'

const Videos = () => {
    let video = {
        "kind": "youtube#video",
        "etag": "zZFUanJ8NkBfFBlmyncrAFIPlGw",
        "id": "JXgV1rXUoME",
        "snippet": {
          "publishedAt": "2021-06-25T04:00:10Z",
          "channelId": "UCzpl23pGTHVYqvKsgY0A-_w",
          "title": "Doja Cat, The Weeknd - You Right (Official Video)",
          "description": "Doja Cat // Planet Her // The New Album Out Now\nListen Here // https://smarturl.it/xPlanetHer \n\nHop on board InterstellHER Air to meet Doja Cat at Planet Her! //\nhttps://smarturl.it/InterstellHerAir \n\nWatch more official videos from Doja Cat:\n“Need To Know” // https://smarturl.it/N2K/youtube \n“Kiss Me More” ft. SZA // https://smarturl.it/xKMMx/youtube \n\nSubscribe to Doja Cat's Official YouTube Channel: https://smarturl.it/DojaYTSubcribe \u200b\u200b \n\nFollow Doja Cat:\nhttp://www.dojacat.com/ \u200b\u200b\nhttps://www.instagram.com/dojacat/ \u200b\u200b  \nhttps://twitter.com/DojaCat  \nhttps://www.facebook.com/DojaCat\u200b\u200b \n\nDownload The Pattern: https://app.thepattern.com/dojacat\nFollow The Pattern: https://www.instagram.com/thepattern\n____\n\nDirector: Quentin Deronzier \nDP: Erik Henriksson\nCommissioner: Sam Houston \nDirector's Rep: Lark Creative \nProduction Company: La Pac \nExecutive Producer: Anna Roudaut \nProducer: Sarah Lee\nLine Producers: Aymeric Mosser + Patrick Donovan \nPost Producer: Francoise Hernandez \n1st AD: Jesse Hays \nProduction Designer: Gille Mills \nEditor: Hugo Beron \nColorist: Arthur Paux\nPM: Val Pensa \nPM: Quinci Bryant \nLabel: RCA Records\n \nPost Production @ La Pac \nVFX Supervisor: Anthony Lestremau  \nLead CG Artist: Julien Missaire \nCG Artist: Petr Shkolniy\nFlame Artists: Alexi Bailla / Micha Sher / Antoine Hache \n \nPost Production @ Mikros MPC\nVFX Prod: Nicolas Huget \nCG Supervisor: Guillaume Ho Tsong Fang\nCG FX: Benjamin Lenfant \nFlame Artist : Stephane Pivron\n\nPost Production @ MPC Bangalore\nLine Producer: Chanakya Chander\nCG Supervisor: Raju Ganesh \n2D Supervisor: David Rouxel \n \nBoyfriend: Chris Petersen\n \nTeam Doja Cat \nManagement: Lydia Asrat, Gordan Dillard, Josh Kaplan, Wassim “Sal” Slaiby, Rachel Rowley \nCreative Director / Stylist: Brett Alan Nelson\nStylist Assist: Kristen Ritchie + Talia Garner  \nTailor: Jesstia Usher + Chris Habana \nHair: J Stay Ready \nMakeup: Ernesto Casillas \nMakeup Assist: Ivan Nunez \nNails: Saccia Livingston\nContent: Jamal Peters \n\n#dojacat #theweeknd #planether",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/JXgV1rXUoME/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/JXgV1rXUoME/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/JXgV1rXUoME/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/JXgV1rXUoME/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/JXgV1rXUoME/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "Doja Cat",
          "tags": [
            "doja cat",
            "the weeknd",
            "you right",
            "jid",
            "planet her",
            "kiss me more",
            "doja cat 2021",
            "new doja cat",
            "nas",
            "doja tiktok",
            "doja cat teaser",
            "hip hip",
            "rnb",
            "new music",
            "sza",
            "ariana grande",
            "megan thee stallion",
            "nicki minaj",
            "streets",
            "city girls",
            "ain't shit",
            "best of tiktok",
            "xo",
            "young thug",
            "west coast rap",
            "new music daily",
            "silhouette challenge",
            "flo milli",
            "best of tiktok trends"
          ],
          "categoryId": "10",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Doja Cat, The Weeknd - You Right (Official Video)",
            "description": "Doja Cat // Planet Her // The New Album Out Now\nListen Here // https://smarturl.it/xPlanetHer \n\nHop on board InterstellHER Air to meet Doja Cat at Planet Her! //\nhttps://smarturl.it/InterstellHerAir \n\nWatch more official videos from Doja Cat:\n“Need To Know” // https://smarturl.it/N2K/youtube \n“Kiss Me More” ft. SZA // https://smarturl.it/xKMMx/youtube \n\nSubscribe to Doja Cat's Official YouTube Channel: https://smarturl.it/DojaYTSubcribe \u200b\u200b \n\nFollow Doja Cat:\nhttp://www.dojacat.com/ \u200b\u200b\nhttps://www.instagram.com/dojacat/ \u200b\u200b  \nhttps://twitter.com/DojaCat  \nhttps://www.facebook.com/DojaCat\u200b\u200b \n\nDownload The Pattern: https://app.thepattern.com/dojacat\nFollow The Pattern: https://www.instagram.com/thepattern\n____\n\nDirector: Quentin Deronzier \nDP: Erik Henriksson\nCommissioner: Sam Houston \nDirector's Rep: Lark Creative \nProduction Company: La Pac \nExecutive Producer: Anna Roudaut \nProducer: Sarah Lee\nLine Producers: Aymeric Mosser + Patrick Donovan \nPost Producer: Francoise Hernandez \n1st AD: Jesse Hays \nProduction Designer: Gille Mills \nEditor: Hugo Beron \nColorist: Arthur Paux\nPM: Val Pensa \nPM: Quinci Bryant \nLabel: RCA Records\n \nPost Production @ La Pac \nVFX Supervisor: Anthony Lestremau  \nLead CG Artist: Julien Missaire \nCG Artist: Petr Shkolniy\nFlame Artists: Alexi Bailla / Micha Sher / Antoine Hache \n \nPost Production @ Mikros MPC\nVFX Prod: Nicolas Huget \nCG Supervisor: Guillaume Ho Tsong Fang\nCG FX: Benjamin Lenfant \nFlame Artist : Stephane Pivron\n\nPost Production @ MPC Bangalore\nLine Producer: Chanakya Chander\nCG Supervisor: Raju Ganesh \n2D Supervisor: David Rouxel \n \nBoyfriend: Chris Petersen\n \nTeam Doja Cat \nManagement: Lydia Asrat, Gordan Dillard, Josh Kaplan, Wassim “Sal” Slaiby, Rachel Rowley \nCreative Director / Stylist: Brett Alan Nelson\nStylist Assist: Kristen Ritchie + Talia Garner  \nTailor: Jesstia Usher + Chris Habana \nHair: J Stay Ready \nMakeup: Ernesto Casillas \nMakeup Assist: Ivan Nunez \nNails: Saccia Livingston\nContent: Jamal Peters \n\n#dojacat #theweeknd #planether"
          },
          "defaultAudioLanguage": "en-US"
        },
        "statistics": {
          "viewCount": "9499109",
          "likeCount": "494628",
          "dislikeCount": "6017",
          "favoriteCount": "0",
          "commentCount": "30804"
        },
        "player": {
          "embedHtml": "\u003ciframe width=\"480\" height=\"270\" src=\"//www.youtube.com/embed/JXgV1rXUoME\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\u003e\u003c/iframe\u003e"
        }
      };
      let channelImg = "https://yt3.ggpht.com/ytc/AKedOLT2s3CdV2XOs0ddcHfto1yHwoy1ZoOft3yhy9Vt=s88-c-k-c0x00ffffff-no-rj-mo"
      
    return (
        <ScrollView style={styles.container} >
           <VideoItem video={video} channelImg={channelImg} />
           <VideoItem video={video} channelImg={channelImg} />
           <VideoItem video={video} channelImg={channelImg} />
           <VideoItem video={video} channelImg={channelImg} />
           <VideoItem video={video} channelImg={channelImg} />
           <VideoItem video={video} channelImg={channelImg} />
           <VideoItem video={video} channelImg={channelImg} />
           <VideoItem video={video} channelImg={channelImg} />
           <VideoItem video={video} channelImg={channelImg} />
           <VideoItem video={video} channelImg={channelImg} />
           <VideoItem video={video} channelImg={channelImg} />
           <VideoItem video={video} channelImg={channelImg} />
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
