import { useState, createContext, useContext } from 'react';
import { useEffect } from 'react';
import { HiOutlineLocationMarker } from "react-icons/hi";
import "./ip.css";

export const locationContext = createContext();

export const FetchIPAdress = () => {
  const [ipData, setIpData] = useState({
    country: '',
    flag: '',
    countryCode: '',
  });


  useEffect(() => {
    let isMountted = true;
    const fetchApi = async () => {
      const url = 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '865ca02b23mshb0fdf1369d78fe0p13125cjsnf6fc938bc736',
          'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        if (isMountted) {
          setIpData({
            country: result.country,
            flag: result.flag,
            countryCode: result.countryISO2
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchApi();

    return () => {
      isMountted = false;
    };
  }, []);

  return ipData;
};

export const IPAdress = () => {
  // const { country } = FetchIPAdress();
  const { country } = useContext(locationContext);

  return (
    <div className='location'>
      <HiOutlineLocationMarker className='location-icon' />
      <div className='deliver-to-country text-left'>
        <span className='deliver-to text-left'>Deliver to</span>
        <span className='country text-left'>
          {country}</span>
      </div>

    </div>
  );
};

export const FlagIcon = () => {

  const { flag, countryCode } = useContext(locationContext);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>

      <img src={flag}
        width="30px"
        alt='flag'
        style={{ marginLeft: "15px", marginRight: "2px" }} />
      <span style={{ fontWeight: "700" }}>{countryCode}</span>
    </div>
  );
};
