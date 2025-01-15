import { FeatureGroup, LayersControl, Marker, Popup } from 'react-leaflet';
import { MarkersProps } from '@/types/types';
import { DIVIDER, events, MAP_HEIGHT, places } from '@/utils/constants';
import { filter } from '@/utils/functions';
import '@/styles/leaflet-popup.css';

function Markers({ type }: MarkersProps) {
  if (type === 'places') {
    return (
      <LayersControl position='topright'>
        {places.map((place) => (
          <LayersControl.Overlay name={place.name} key={place.tag}>
            <FeatureGroup>
              {filter(place.tag).map((p) => (
                <Marker
                  position={[
                    MAP_HEIGHT / DIVIDER - p.y / DIVIDER,
                    p.x / DIVIDER,
                  ]}
                  icon={place.icon}
                  key={p.title}
                >
                  <Popup>
                    <h2>
                      {p.title} {p.sindarinTitle && `(${p.sindarinTitle})`}
                    </h2>
                    <div></div>
                    <p>{p.description}</p>
                  </Popup>
                </Marker>
              ))}
            </FeatureGroup>
          </LayersControl.Overlay>
        ))}
      </LayersControl>
    );
  }

  if (type === 'events') {
    return (
      <LayersControl position='topright' collapsed={false}>
        {events.map((event) => (
          <LayersControl.Overlay name={event.name} key={event.tag}>
            <FeatureGroup>
              {filter(event.tag).map((e) => (
                <Marker
                  position={[
                    MAP_HEIGHT / DIVIDER - e.y / DIVIDER,
                    e.x / DIVIDER,
                  ]}
                  icon={event.icon}
                  key={e.title}
                >
                  <Popup>
                    <h2>{e.title}</h2>
                    <div></div>
                    <span>[{e.date}]</span>
                    <p>{e.description}</p>
                  </Popup>
                </Marker>
              ))}
            </FeatureGroup>
          </LayersControl.Overlay>
        ))}
      </LayersControl>
    );
  }
}

export default Markers;
