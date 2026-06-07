import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { APIProvider, Map, Marker, useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import { temples, landmarks, ghats, markets, businesses } from "../data/projects";
import { MapPin, Navigation, Info } from "lucide-react";
import MapsInfoCard from "@/components/MapsInfoCard";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// Cinematic dark map style for Google Maps
const MAP_STYLES = [
  { elementType: "geometry", stylers: [{ color: "#121212" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#727272" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#121212" }] },
  { featureType: "administrative", elementType: "geometry", stylers: [{ color: "#454545" }] },
  { featureType: "administrative.country", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
  { featureType: "administrative.land_parcel", stylers: [{ visibility: "off" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#a1a1a1" }] },
  { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#8c8c8c" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#0c0c0c" }] },
  { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#505050" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#1d1d1d" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#7a7a7a" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#2c2c2c" }] },
  { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#121212" }] },
  { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#dedede" }] },
  { featureType: "transit", elementType: "geometry", stylers: [{ color: "#222222" }] },
  { featureType: "transit.station", elementType: "labels.text.fill", stylers: [{ color: "#727272" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#2d2d2d" }] }
];

const getMarkerIcon = (type: string) => {
  const isTemple = type === 'Temple';
  const svg = isTemple ?
    `<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradTemple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FF6B00"/>
          <stop offset="100%" stop-color="#E65100"/>
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
      </defs>
      <path d="M20 2C12.268 2 6 8.268 6 16c0 9.5 14 22 14 22s14-12.5 14-22c0-7.732-6.268-14-14-14z" fill="url(#gradTemple)" stroke="#FFFFFF" stroke-width="1.5" filter="url(#shadow)"/>
      <circle cx="20" cy="16" r="3.5" fill="#FFFFFF"/>
    </svg>` :
    `<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#BAC7BE"/>
          <stop offset="100%" stop-color="#9AAB9B"/>
        </linearGradient>
        <filter id="shadow2" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
      </defs>
      <path d="M20 4C13.373 4 8 9.373 8 16c0 8.5 12 20 12 20s12-11.5 12-20c0-6.627-5.373-12-12-12z" fill="url(#grad)" stroke="#FFFFFF" stroke-width="1.5" filter="url(#shadow2)"/>
      <circle cx="20" cy="16" r="2.5" fill="#FFFFFF"/>
    </svg>`;

  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
};

const routeOptions = {
  strokeColor: '#FF6B00',
  strokeOpacity: 0.8,
  strokeWeight: 4,
  geodesic: true,
};

const MapDirections = ({ places, options }: { places: { lat: number, lng: number }[], options?: any }) => {
  const map = useMap();
  const routesLibrary = useMapsLibrary('routes');
  const [directionsService, setDirectionsService] = useState<any>(null);
  const [directionsRenderer, setDirectionsRenderer] = useState<any>(null);

  useEffect(() => {
    if (!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({
      map,
      suppressMarkers: true,
      preserveViewport: true,
      polylineOptions: options
    }));
  }, [routesLibrary, map, options]);

  useEffect(() => {
    if (!directionsService || !directionsRenderer || !places || places.length < 2) return;

    const origin = places[0];
    const destination = places[places.length - 1];
    const waypoints = places.slice(1, places.length - 1).map((p: any) => ({
      location: p,
      stopover: true
    }));

    directionsService.route({
      origin,
      destination,
      waypoints,
      travelMode: 'DRIVING',
      optimizeWaypoints: false,
    }).then((response: any) => {
      directionsRenderer.setDirections(response);
    }).catch((e: any) => {
      console.error("Directions request failed", e);
    });
  }, [directionsService, directionsRenderer, places]);

  return null;
};

const MapsView = () => {
  const [selectedPlace, setSelectedPlace] = useState<any>(null);

  const allPlaces = useMemo(() => {
    return [
      ...temples.map(p => ({ ...p, type: 'Temple' })),
      ...landmarks.map(p => ({ ...p, type: 'Landmark' })),
      ...ghats.map(p => ({ ...p, type: 'Ghat' })),
      ...markets.map(p => ({ ...p, type: 'Market' })),
      ...businesses.map(p => ({ ...p, type: 'Business' }))
    ].filter(p => p.coordinates && p.coordinates.lat && p.coordinates.lng);
  }, []);

  const optimizedRoute = useMemo(() => {
    if (!allPlaces || allPlaces.length === 0) return [];

    const unvisited = [...allPlaces];
    const startIdx = unvisited.findIndex(p => p.type === 'Temple');
    const startPoint = unvisited.splice(startIdx >= 0 ? startIdx : 0, 1)[0];

    const route = [startPoint];
    let current = startPoint;

    while (unvisited.length > 0) {
      let nearestIdx = 0;
      let minDistance = Infinity;

      for (let i = 0; i < unvisited.length; i++) {
        const p = unvisited[i];
        const dx = p.coordinates.lng - current.coordinates.lng;
        const dy = p.coordinates.lat - current.coordinates.lat;
        const distSq = dx * dx + dy * dy;

        if (distSq < minDistance) {
          minDistance = distSq;
          nearestIdx = i;
        }
      }

      current = unvisited[nearestIdx];
      route.push(current);
      unvisited.splice(nearestIdx, 1);
    }

    return route.map(p => p.coordinates);
  }, [allPlaces]);

  const defaultCenter = { lat: 26.7975, lng: 82.1989 };

  return (
    <>
      <SEOHead
        title="Projects Map | Ayodhya Serenity"
        description="Explore the spiritual and cultural heart of Ayodhya through our premium interactive map. Locate temples, ghats, and landmarks with ease."
        canonical="https://ayodhyaserenity.vercel.app/projects/maps"
        breadcrumbs={[
          { name: "Home", url: "https://ayodhyaserenity.vercel.app" },
          { name: "Projects Map", url: "https://ayodhyaserenity.vercel.app/projects/maps" },
        ]}
      />

      <main className="bg-[#000000] text-[#F9F9F6] pt-16 pb-12 selection:bg-[#FF6B00] selection:text-black">
        <section className="py-24 md:py-36 px-6 md:px-16 bg-gradient-warm border-b-[0.5px] border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              label="Geographical Presence"
              title="Sacred Geography of Ayodhya"
              subtitle="Navigate through the timeless landmarks and spiritual sanctuaries covered by Ayodhya Serenity."
            />
          </div>
        </section>

        <section className="px-6 md:px-16 py-12 md:py-20">
          <div className="relative w-full h-[700px] rounded-none overflow-hidden border border-white/10 shadow-2xl group">
            <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
              <Map
                defaultCenter={defaultCenter}
                defaultZoom={14}
                disableDefaultUI={true}
                zoomControl={true}
                fullscreenControl={true}
                mapTypeControl={false}
                streetViewControl={false}
                clickableIcons={false}
                styles={MAP_STYLES}
                className="w-full h-full"
              >
                {optimizedRoute.length > 0 && (
                  <MapDirections
                    places={optimizedRoute}
                    options={routeOptions}
                  />
                )}

                {allPlaces.map((place, index) => (
                  <Marker
                    key={index}
                    position={place.coordinates}
                    onClick={() => setSelectedPlace(place)}
                    title={place.name}
                    icon={getMarkerIcon(place.type)}
                  />
                ))}

                {selectedPlace && (
                  <MapsInfoCard
                    place={selectedPlace}
                    onClose={() => setSelectedPlace(null)}
                  />
                )}
              </Map>
            </APIProvider>

            {/* Overlay Navigation Info Card */}
            <div className="absolute top-6 left-6 z-10 bg-[#000000]/80 backdrop-blur-xl border border-white/5 p-6 rounded-none shadow-2xl max-w-xs hidden md:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-[#FF6B00]/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#FF6B00]" strokeWidth={1.5} />
                </div>
                <h4 className="font-['Clash_Display'] font-bold text-sm text-[#F9F9F6]">Ayodhya Serenity</h4>
              </div>
              <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#F9F9F6]/75 leading-relaxed">
                Click on any marker to discover more about the sacred sites, markets, and landmarks within Ayodhya. Follow the continuous path to explore optimally.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                {['Temple', 'Landmark', 'Ghat', 'Market'].map(type => (
                  <span key={type} className="text-[8px] font-bold px-2 py-0.5 rounded-none bg-white/5 text-[#9AAB9B] border border-white/10 uppercase tracking-widest font-['Plus_Jakarta_Sans']">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center space-y-6"
          >
            <div className="inline-flex items-center gap-3 py-2 px-4 rounded-none bg-white/5 border border-white/10">
              <Info className="w-4 h-4 text-[#FF6B00]" strokeWidth={1.5} />
              <span className="text-xs uppercase font-bold tracking-widest text-[#9AAB9B] font-['Plus_Jakarta_Sans']">Looking for a specific location?</span>
            </div>
            
            <div className="flex justify-center pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-[#FF6B00] text-black font-['Plus_Jakarta_Sans'] font-semibold px-8 py-4 rounded-none uppercase text-xs tracking-widest transition-all duration-300"
              >
                <Link to="/projects">View Projects Details</Link>
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default MapsView;
