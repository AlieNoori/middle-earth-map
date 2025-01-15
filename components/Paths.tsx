import { useEffect } from 'react';
import paths from '@/public/assets/data/paths.json';
import {
  FeatureGroup,
  LayersControl,
  Polyline,
  Tooltip,
  useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/leaflet-tooltip.css';
import '../styles/leaflet-controls.css';
import { DIVIDER, MAP_HEIGHT } from '@/utils/constants';
import useMediaQuery from '@/hooks/useMediaQuery';

function Paths() {
  const map = useMap();

  useEffect(() => {
    const layerControl = map
      .getContainer()
      .querySelector('.leaflet-control-layers');
    if (layerControl) {
      layerControl.id = 'paths';
    }
  }, [map]);

  return (
    <LayersControl
      position='topleft'
      collapsed={useMediaQuery('(max-width: 600px)')}
    >
      {paths.map((path) => (
        <LayersControl.Overlay name={path.name} key={path.id}>
          <FeatureGroup pathOptions={{ color: path.color, weight: 4 }}>
            <Polyline
              positions={path.path.map((l) => [
                (MAP_HEIGHT + 10) / DIVIDER - l[1] / DIVIDER,
                l[0] / DIVIDER,
              ])}
            >
              <Tooltip sticky>
                <div className='px-3 py-2 font-Lora'>
                  <h2 className='text-3xl font-bold'>{path.name}</h2>
                  <span className='text-base font-semibold'>
                    [{path.startDate}, {path.endDate}]
                  </span>
                  <p className='text-sm'>{path.distance}</p>
                </div>
              </Tooltip>
            </Polyline>
          </FeatureGroup>
        </LayersControl.Overlay>
      ))}
    </LayersControl>
  );
}

export default Paths;
