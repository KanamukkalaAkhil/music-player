import React, { useCallback, useEffect, useState } from "react";
import Search from "./Search";

import key from "../token/config";
import Artist from "./Artist";

const URL ="https://api.spotify.com"

function Music(props){

    const [artist,setArtist ] = useState(false)


    const searchArtist = async(artistName) => {
       await fetch( `${URL}/v1/search?q=${artistName}&type=artist`,{
        method:'GET',
        headers: {
            Authorization: `Bearer ${key}`
        }
       })
        .then(out => out.json())
        .then(res => {
            console.log('artist=',res)
            setArtist(res.artists.items ? res.artists.items[0] : false)
        }).catch(err => console.error(err.message))
    }

    const initArtist = useCallback(() =>{
        searchArtist('spb')
    },[])

    useEffect(() => {
        initArtist()
    },[])

    return(
         <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                         <h3 className="display-3 text-success">Music Player</h3>
                </div>
            </div>
            <Search searchInfo={searchArtist}/>
            <div className="row">
                <Artist info={artist}/>
            </div>
        </div>
    )
}

export default Music