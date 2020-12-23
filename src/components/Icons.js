import React from 'react'
import {FaMapMarker, FaPen, FaRegCircle} from "react-icons/fa"



const Icons = ({name}) =>{
    switch (name) {
        case 'player1':
            return <FaMapMarker className="green"/>
        
        case 'player2':
            return <FaMapMarker className="red"/>
            
        case 'bplayer1':
            return <FaMapMarker className="bigp1"/>

        case 'bplayer2':
                return <FaMapMarker className="bigp2"/>

        default:
            return ""
    }
}

export default Icons;