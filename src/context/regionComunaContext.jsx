import { createContext, useEffect, useState } from "react";
import axios from 'axios'


// export const AppContext = createContext();

const locationInfo = 'https://raw.githubusercontent.com/ivanmirson/hackathon-laboratoria/main/buybox/regionComuna.json'

export function RegionComunaProvider() {
    const [data, setData] = useState({})
    const [regions, setRegions] = useState([])

    const getRegionComuna = async () => {
        const allRegionComuna = await axios.get(locationInfo)
        setData(allRegionComuna) 
        // console.log(data)
    }
    getRegionComuna()

    const getRegions = (allRegionComuna) => {
        const regions = allRegionComuna.map((region) => {
            
        })
        // const regions = allRegionComuna.filter(result => {
        //     return result.region === "Metropolitana de Santiago"

        // })
        // setRegions(regions)
        // console.log(regions)
    }

    getRegions()

    
    // const getRegions = (getRegionComuna) => { }
  
  
      return (
      <div>
          {}
      </div>
      );
  }