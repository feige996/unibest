---
name: Location Services
description: Geolocation, map operations, and location-based services
---

# Location Services

## Get Current Location

### uni.getLocation

Get current geographic location.

```javascript
uni.getLocation({
  type: 'wgs84', // wgs84/gcj02 (gcj02 for map display)
  altitude: false, // Include altitude
  geocode: false, // Include address info (App)
  highAccuracyExpireTime: 3000, // High accuracy timeout
  success: (res) => {
    console.log('Latitude:', res.latitude)
    console.log('Longitude:', res.longitude)
    console.log('Speed:', res.speed)
    console.log('Accuracy:', res.accuracy)
    // App only:
    console.log('Altitude:', res.altitude)
    console.log('Address:', res.address)
  },
  fail: (err) => {
    console.error('Location failed:', err)
  }
})
```

**Response Properties:**

| Property | Type | Description |
|----------|------|-------------|
| latitude | Number | Latitude |
| longitude | Number | Longitude |
| speed | Number | Speed (m/s) |
| accuracy | Number | Accuracy (meters) |
| altitude | Number | Altitude (meters) |
| verticalAccuracy | Number | Vertical accuracy |
| horizontalAccuracy | Number | Horizontal accuracy |
| address | Object | Address info (App) |

### uni.getFuzzyLocation (WeChat)

Get approximate location (better privacy, faster).

```javascript
uni.getFuzzyLocation({
  type: 'wgs84',
  success: (res) => {
    console.log(res.latitude, res.longitude)
  }
})
```

## Choose Location

### uni.chooseLocation

Open map to select location.

```javascript
uni.chooseLocation({
  latitude: 39.9,
  longitude: 116.4,
  keyword: 'restaurant',
  success: (res) => {
    console.log('Name:', res.name)
    console.log('Address:', res.address)
    console.log('Latitude:', res.latitude)
    console.log('Longitude:', res.longitude)
  }
})
```

## Open Location

### uni.openLocation

Open external map app.

```javascript
uni.openLocation({
  latitude: 39.9,
  longitude: 116.4,
  name: 'Destination Name',
  address: 'Full address here',
  scale: 18
})
```

## Location Change Monitoring

### uni.startLocationUpdate

Start background location updates.

```javascript
uni.startLocationUpdate({
  type: 'gcj02',
  success: () => {
    console.log('Location updates started')
  }
})
```

### uni.startLocationUpdateBackground

Start background location (requires permission).

```javascript
uni.startLocationUpdateBackground({
  type: 'gcj02',
  success: () => {
    console.log('Background location started')
  }
})
```

### Listen for Location Changes

```javascript
uni.onLocationChange((res) => {
  console.log('Location updated:', res.latitude, res.longitude)
})

// Stop listening
uni.offLocationChange(callback)
```

### Stop Location Updates

```javascript
uni.stopLocationUpdate({
  success: () => {
    console.log('Location updates stopped')
  }
})
```

## Map Component

### Basic Map

```vue
<template>
  <map
    id="myMap"
    style="width: 100%; height: 300px;"
    :latitude="latitude"
    :longitude="longitude"
    :scale="14"
    :markers="markers"
    :polyline="polyline"
    :circles="circles"
    :show-location="true"
    @markertap="onMarkerTap"
    @regionchange="onRegionChange"
  />
</template>

<script>
export default {
  data() {
    return {
      latitude: 39.909,
      longitude: 116.39742,
      markers: [{
        id: 1,
        latitude: 39.909,
        longitude: 116.39742,
        title: 'Marker 1',
        iconPath: '/static/marker.png',
        width: 30,
        height: 30,
        callout: {
          content: 'Hello',
          color: '#000',
          fontSize: 14,
          borderRadius: 5,
          padding: 10,
          display: 'BYCLICK'
        }
      }],
      polyline: [{
        points: [
          { latitude: 39.909, longitude: 116.39742 },
          { latitude: 39.91, longitude: 116.4 }
        ],
        color: '#FF0000',
        width: 2,
        dottedLine: false
      }],
      circles: [{
        latitude: 39.909,
        longitude: 116.39742,
        radius: 100,
        strokeWidth: 2,
        fillColor: '#FF000020'
      }]
    }
  }
}
</script>
```

### Map Context Operations

```javascript
export default {
  onReady() {
    this.mapContext = uni.createMapContext('myMap')
  },

  methods: {
    // Get center location
    getCenter() {
      this.mapContext.getCenterLocation({
        success: (res) => {
          console.log('Center:', res.latitude, res.longitude)
        }
      })
    },

    // Move to location
    moveToLocation() {
      this.mapContext.moveToLocation({
        latitude: 39.9,
        longitude: 116.4
      })
    },

    // Translate marker
    translateMarker() {
      this.mapContext.translateMarker({
        markerId: 1,
        destination: {
          latitude: 39.91,
          longitude: 116.41
        },
        autoRotate: true,
        rotate: 0,
        duration: 1000
      })
    },

    // Include points in view
    includePoints() {
      this.mapContext.includePoints({
        points: [
          { latitude: 39.9, longitude: 116.4 },
          { latitude: 39.91, longitude: 116.41 }
        ],
        padding: [10, 10, 10, 10]
      })
    },

    // Get region
    getRegion() {
      this.mapContext.getRegion({
        success: (res) => {
          console.log('Southwest:', res.southwest)
          console.log('Northeast:', res.northeast)
        }
      })
    },

    // Add markers
    addMarkers() {
      this.mapContext.addMarkers({
        markers: [{
          id: 2,
          latitude: 39.91,
          longitude: 116.41,
          title: 'New Marker'
        }],
        clear: false // Don't clear existing
      })
    },

    // Remove markers
    removeMarkers() {
      this.mapContext.removeMarkers({
        markerIds: [1, 2]
      })
    }
  }
}
```

## Coordinate Systems

| System | Description | Usage |
|--------|-------------|-------|
| WGS84 | GPS coordinates | International standard |
| GCJ02 | Mars coordinates | China national standard |
| BD09 | Baidu coordinates | Baidu Map only |

**Note:** For map display in China, use `gcj02`.

## Permission Configuration

### Mini-Program

Add to `manifest.json`:

```json
{
  "mp-weixin": {
    "permission": {
      "scope.userLocation": {
        "desc": "Your location is needed to find nearby stores"
      }
    },
    "requiredPrivateInfos": [
      "getLocation",
      "chooseLocation"
    ]
  }
}
```

### App (Android)

```json
{
  "app-plus": {
    "distribute": {
      "android": {
        "permissions": [
          "<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />",
          "<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\" />"
        ]
      }
    }
  }
}
```

### App (iOS)

```json
{
  "app-plus": {
    "distribute": {
      "ios": {
        "privacyDescription": {
          "NSLocationWhenInUseUsageDescription": "Location is needed to find nearby stores",
          "NSLocationAlwaysUsageDescription": "Background location is needed for navigation"
        }
      }
    }
  }
}
```

## Best Practices

### Permission Handling

```javascript
async function getLocationWithPermission() {
  try {
    // Check permission
    const setting = await uni.getSetting()
    if (!setting.authSetting['scope.userLocation']) {
      // Request permission
      await uni.authorize({ scope: 'scope.userLocation' })
    }

    // Get location
    const res = await uni.getLocation({ type: 'gcj02' })
    return res
  } catch (err) {
    if (err.errMsg.includes('auth deny')) {
      uni.showModal({
        title: 'Permission Required',
        content: 'Please enable location permission in settings',
        success: (res) => {
          if (res.confirm) {
            uni.openSetting()
          }
        }
      })
    }
    throw err
  }
}
```

### Distance Calculation

```javascript
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371 // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  return R * c // Distance in km
}
```

<!--
Source references:
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/api/location/location.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/api/location/location-change.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/api/location/open-location.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/component/map.md
-->
