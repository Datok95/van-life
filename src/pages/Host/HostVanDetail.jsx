import React from "react"
import {useParams} from "react-router-dom"
import { data } from "../../../data"

export default function HostVanDetail() {
    const {id} = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)

    React.useEffect(() => {
         setCurrentVan(data[id -1])
    }, [])
    
    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <img src={currentVan.imageUrl} width={150} />
            <h2>{currentVan.name}</h2>
            <p>{currentVan.price}</p>
            <p>{currentVan.type}</p>
        </div>
    )
}
