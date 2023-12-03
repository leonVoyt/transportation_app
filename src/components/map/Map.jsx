import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from '@react-google-maps/api'

import React, { useState } from 'react'
import classes from './Map.module.scss'

const Map = ({ directionsResponse, center }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries: ['places'],
  })
  const [map, setMap] = useState(null)
  const polylineOptions = {
    strokeColor: '#665CD1', // Set the color of the road to purple
    strokeOpacity: 1,
    strokeWeight: 4,
  }

  return isLoaded ? (
    <div className={classes.mapContainer}>
      {/* Google Map Box */}
      <button
        onClick={(e) => {
          e.preventDefault()
          map.panTo(center)
          map.setZoom(15)
        }}
        className={classes.btnYourCurrLocat}
      >
        Your current location
      </button>
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: '100%', height: '100%', borderRadius: 15 }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          styles: [
            {
              featureType: 'landscape',
              elementType: 'geometry',
              stylers: [
                { color: '#d1d0e4' }, // Change water color to black
              ],
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [
                { color: '#ffffff' }, // Change water color to black
              ],
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [
                { color: '#F1F0FF' }, // Change water color to black
              ],
            },
          ],
        }}
        onLoad={(map) => setMap(map)}
      >
        <Marker
          position={center}
          icon={{
            path: window.google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
            fillColor: '#665CD1', // Change the color of the marker to purple
            fillOpacity: 1,
            strokeWeight: 0,
            scale: 8,
          }}
        />
        {directionsResponse && (
          <DirectionsRenderer
            directions={directionsResponse}
            options={{
              polylineOptions: polylineOptions,
              markerOptions: {
                icon: {
                  path: window.google.maps.SymbolPath.CIRCLE,
                  fillColor: '#665CD1', // Change the color of the marker to purple
                  fillOpacity: 0.7,
                  strokeWeight: 0,
                  scale: 12,
                },
              },
            }}
          />
        )}
      </GoogleMap>
    </div>
  ) : (
    <div>loader</div>
  )
}

export default Map
