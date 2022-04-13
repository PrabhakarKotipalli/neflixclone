import React, { useEffect, useState } from "react"
import {FlatList,Text,View,Image,ScrollView, ImageBackground} from "react-native"
import Styles from "../styles/styles"
import axios from "axios"
import instance from "../components/axios"


const MovieComponent:React.FC<IProps> = ({ img = '', title = '' }: IProps) => {
    return(
        <View style = {{marginRight:10,borderRadius:10}}>
            <Image
            style = {{width:150,height:200,borderRadius:5}}
            source={{uri:"https://images.tmdb.org/t/p/original/"+img}}
            />
        </View>
    )
}


interface IProps {
    img: string
    title: string
  }

  

  MovieComponent.defaultProps = {
    img: '',
    title: '',
  }






  

const Home:React.FC = () => {
    interface IUser {
        original_title: string;
        poster_path:string;
      }

     


      

    const [movies,setMovies] = useState([{original_title:"",poster_path:""}])
    const [bg,setBg] = useState("/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg")
    useEffect(()=>{
        APIcall()
    },[])

    function APIcall()
    {
        instance.get("/4/list/1?api_key=7b096616042c9f831c6fb19d1712eed9")
        .then(resp=>{
            console.log(resp.data)
            setMovies(resp.data.results)
        })
        .catch(err=>console.log(err))
    }

    return(
        <View style = {{backgroundColor:"black",flex:1,paddingLeft:10}}>
            <ScrollView>

            <Text style = {Styles.Text}>
                Popular on Netflix
            </Text>
            <FlatList
            data={movies}
            style = {Styles.flatlistStyle}
            showsVerticalScrollIndicator = {false}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem = {({item})=><MovieComponent img = {item.poster_path} title = {item.original_title}/>}
            />



            <Text style = {Styles.Text}>
            Trending on Netflix
            </Text>
            <FlatList
            style = {Styles.flatlistStyle}
            data={movies}
            showsVerticalScrollIndicator = {false}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem = {({item})=><MovieComponent img = {item.poster_path} title = {item.original_title}/>}
            />



            <Text style = {Styles.Text}>
            New Releases
            </Text>
            <FlatList
            data={movies}
            style = {Styles.flatlistStyle}
            showsVerticalScrollIndicator = {false}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem = {({item})=><MovieComponent img = {item.poster_path} title = {item.original_title}/>}
            />
            </ScrollView>
        </View>
    )
}

export default Home