import { faStar as f_star} from '@fortawesome/free-solid-svg-icons';
import { faStar as e_Star } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import homgImg from '../assets/home1.jpg';
import { useState } from "react";

export default function ApartCard ({houseInfo}) {
    const [ favorite, setFavorite ] = useState(false);
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={homgImg} alt="Mountain"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {houseInfo["attributes"]["title"]}
                    <a className="float-right cursor-pointer" onClick={()=>{setFavorite(!favorite)}}><FontAwesomeIcon icon={favorite?f_star:e_Star}/></a>
                </div>
                <div className="flex flex-start">
                    <p>Количество комнат: {houseInfo["attributes"]["rooms"]}</p>
                    <p className="ml-10">Размер: {houseInfo["attributes"]["area"]+houseInfo["attributes"]["unit"]}</p>
                </div>
                <p className="text-gray-700 text-base">
                    {houseInfo["attributes"]["address"]["city"] 
                        + " город, " + houseInfo["attributes"]["address"]["street"] + " Ул., дом " 
                        + houseInfo["attributes"]["address"]["house"] + ", " 
                        + houseInfo["attributes"]["address"]["room"]
                    }
                </p>
            </div>
            <div className="px-6 pb-2 flex flex-start">
                <p className="font-bold text-sm">
                Владелец:
                </p>
                <p className="text-sm ml-5">
                    {houseInfo["relationships"]["attributes"]["first_name"] + " " 
                        + houseInfo["relationships"]["attributes"]["middle_name"] + " " 
                        + houseInfo["relationships"]["attributes"]["last_name"]
                    }
                </p>
            </div>
        </div>    
    );
}