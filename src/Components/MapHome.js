import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';
import copy from '../assests/copy.png';
import maps from '../assests/map.png';
import maplocation from '../assests/maplocation.png';
import speed from '../assests/speed.png';
import mappinned from '../assests/mappinned.png';


export const MapHome = () => {
  const [directionData, setDirectionData] = useState([]);
  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [vehicleData, setVehicleData] = useState([]);

  const fetchDirectionData = async () => {
    try {
      const response = await axios.get("http://localhost:3070/direction");
      setDirectionData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDirectionData();
  }, []);

  const fetchVehicleData = async () => {
    try {
      const response = await axios.get("http://localhost:3070/vehiclecard");
      setVehicleData(response.data);
    } catch (error) {
      console.error('Error fetching vehicle data:', error);
    }
  };
  
  useEffect(() => {
    fetchVehicleData();
  }, []);

  const mapStyles = {
    height: '500px', 
    border: '1px solid #000', 
  };

  const defaultCenter = {
    lat: 11.00555,
    lng: 78.96612,
  };

  const apiKey = 'AIzaSyDciM17HrWOucxREypzzWE7KJ_wMqTVoZ0';

  return (
    <div className="container mx-auto mt-20">
      <div className="flex flex-col-2 md:flex-row">
        <div className="w-full md:w-5/12 mb-4 md:mb-0 overflow-y-auto mt-16 max-h-[500px]">
        <div className="border w-full p-2 overflow-y-auto mb-2">
  {vehicleData.map((vehicle, index) => (
    <div key={index} className="border mb-2 p-20 rounded-lg relative">
      <input type="checkbox" className="absolute top-2 left-2" />
      <span className="absolute top-1 left-8">{vehicle.shortName}</span>
      
      {/* First Part: Copy Icon */}
      <div>
  <div className="">
    <img src={copy} alt='Copy Icon' className='w-4 h-4 absolute top-1 right-10' />
    <img src={mappinned} alt='Map Pin Icon' className='w-6 h-7 absolute top-0 right-16' />
    <img src={maps} alt='Maps Icon' className='w-6 h-7 absolute top-8 left-1' />
    <span className='absolute top-8 left-6 text-sm break-words w-40'>{vehicle.address}</span>
    <span className='absolute top-28 left-6 text-sm'>{vehicle.time}</span>
    <span className='absolute top-32 left-6 text-sm'>No Stand Nearby</span>
    <img src={speed} alt='Speed Icon' className='w-6 h-6 absolute top-36 left-1' />
    <span className='absolute top-36 left-7 text-sm'>{vehicle.speed} kmph</span>
    <span className='absolute top-36 left-24 text-sm'>{vehicle.lastseen}</span>
  </div>
  
  {/* Second Part: Route Icon */}
  <div className="">
    <img src={maplocation} alt='Map Location Icon' className='w-4 h-5 absolute top-14 right-20' />
    <span className='absolute top-14 right-10 text-sm font-medium'>Route</span>
    <span className='absolute top-22 right-10 text-sm'>IGNITION: {vehicle.ignitionstatus}</span>
    <span className='absolute top-24 right-10 text-sm'>BATTERY: HIGH</span>
  </div>
</div>

    </div>
  ))}
</div>


        </div>
        <div className="w-full md:w-7/12 m-16 ml-14 mr-auto md:ml-auto md:mr-0">
          <LoadScript googleMapsApiKey={apiKey} onLoad={() => fetchDirectionData()}>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={6}
              center={defaultCenter}
              onLoad={(map) => setMap(map)}
            >
              {map &&
                directionData.map((direction, index) => {
                  const latitude = parseFloat(direction.latitude);
                  const longitude = parseFloat(direction.longitude);
  
                  if (!isNaN(latitude) && !isNaN(longitude)) {
                    return (
                      <Marker
                        key={index}
                        position={{
                          lat: latitude,
                          lng: longitude,
                        }}
                        onClick={() => {
                          setSelectedMarker(direction);
                        }}
                      />
                    );
                  }
                  return null; // Skip markers with invalid latitude or longitude
                })}
              {selectedMarker && (
                <InfoWindow
                  position={{
                    lat: parseFloat(selectedMarker.latitude),
                    lng: parseFloat(selectedMarker.longitude),
                  }}
                  onCloseClick={() => {
                    setSelectedMarker(null);
                  }}
                >
                  <div>
                    <h2>Marker Info</h2>
                    <p>Latitude: {selectedMarker.latitude}</p>
                    <p>Longitude: {selectedMarker.longitude}</p>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default MapHome;