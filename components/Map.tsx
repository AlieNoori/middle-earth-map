import { CRS, LatLngBoundsExpression, LatLngExpression } from 'leaflet';
import { ImageOverlay, MapContainer } from 'react-leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet/dist/leaflet.css';

import Paths from './Paths';
import Markers from './Markers';
import { MapProps } from '@/types/types';
import { DIVIDER } from '@/utils/constants';

function Map({ image }: MapProps) {
  const position: LatLngExpression = [
    image.height / (DIVIDER * 2),
    image.width / (DIVIDER * 2),
  ];

  const height = image.height / DIVIDER;
  const width = image.width / DIVIDER;
  const bounds: LatLngBoundsExpression = [
    [0, 0],
    [height, width],
  ];

  return (
    <MapContainer
      center={position}
      maxZoom={2}
      zoom={2}
      scrollWheelZoom
      crs={CRS.Simple}
    >
      <ImageOverlay bounds={bounds} url={image.src} />
      <Paths />
      <Markers type='events' />
      <Markers type='places' />
    </MapContainer>
  );
}

export default Map;
