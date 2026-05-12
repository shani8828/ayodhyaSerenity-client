import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { APIProvider, Map, Marker, useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import { temples, landmarks, ghats, markets } from "../data/projects";
import { MapPin, Navigation, ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import MapsInfoCard from "@/components/MapsInfoCard";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const MAP_STYLES = [
  { elementType: "geometry", stylers: [{ color: "#f5efe3" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#5a4a32" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#f5efe3" }] },
  { featureType: "administrative", elementType: "geometry", stylers: [{ color: "#d4e4c8" }] },
  { featureType: "administrative.country", elementType: "labels.text.fill", stylers: [{ color: "#5a4a32" }] },
  { featureType: "administrative.land_parcel", stylers: [{ visibility: "off" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#5a4a32" }] },
  { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#d4e4c8" }] },
  { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#5a4a32" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#e8dcc8" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#5a4a32" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#dbc9a8" }] },
  { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#dbc9a8" }] },
  { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#5a4a32" }] },
  { featureType: "transit", elementType: "geometry", stylers: [{ color: "#dbc9a8" }] },
  { featureType: "transit.station", elementType: "labels.text.fill", stylers: [{ color: "#5a4a32" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#c5dbe8" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#5a4a32" }] }
];

const getMarkerIcon = (type: string) => {
  const isTemple = type === 'Temple';
  const svg = isTemple ?
    `<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradTemple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E8A317"/>
          <stop offset="100%" stop-color="#B84A00"/>
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M20 2C12.268 2 6 8.268 6 16c0 9.5 14 22 14 22s14-12.5 14-22c0-7.732-6.268-14-14-14z" fill="url(#gradTemple)" stroke="#FFFFFF" stroke-width="2" filter="url(#shadow)"/>
      <circle cx="20" cy="16" r="4" fill="#FFFFFF"/>
    </svg>` :
    `<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FF6600"/>
          <stop offset="100%" stop-color="#E8A317"/>
        </linearGradient>
        <filter id="shadow2" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M20 4C13.373 4 8 9.373 8 16c0 8.5 12 20 12 20s12-11.5 12-20c0-6.627-5.373-12-12-12z" fill="url(#grad)" stroke="#FFFFFF" stroke-width="2" filter="url(#shadow2)"/>
      <circle cx="20" cy="16" r="3" fill="#FFFFFF"/>
    </svg>`;

  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
};

const routeOptions = {
  strokeColor: '#FF6600',
  strokeOpacity: 0.7,
  strokeWeight: 5,
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
      ...markets.map(p => ({ ...p, type: 'Market' }))
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

  const defaultCenter = { lat: 26.7975, lng: 82.1989 }; // Ayodhya center

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

      <main className="pt-16">
        <section className="section-padding bg-gradient-warm">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              label="Geographical Presence"
              title="Sacred Geography of Ayodhya"
              subtitle="Navigate through the timeless landmarks and spiritual sanctuaries, covered by Ayodhya Serenity."
            />
          </div>
        </section>

        <section className="container mx-auto px-4 pb-20 pt-10">
          <div className="relative w-full h-[700px] rounded-3xl overflow-hidden shadow-2xl border border-[#E8A317]/20 group">
            <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
              <Map
                defaultCenter={defaultCenter}
                defaultZoom={15}
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

            {/* Overlay Navigation Info */}
            <div className="absolute top-6 left-6 z-10 bg-[#fbf8f1]/90 backdrop-blur-md border border-[#E8A317]/20 p-4 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 bg-[#E8A317]/10 rounded-lg">
                  <MapPin className="w-4 h-4 text-[#FF6600]" />
                </div>
                <h4 className="font-bold text-sm text-[#5a4a32]">Ayodhya Serenity Guide</h4>
              </div>
              <p className="text-xs text-[#705e43] leading-relaxed">
                Click on any marker to discover more about the sacred sites, markets, and landmarks within Ayodhya. Follow the continuous path to explore optimally.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Temple', 'Landmark', 'Ghat', 'Market'].map(type => (
                  <span key={type} className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-white text-[#5a4a32] border border-[#E8A317]/30 uppercase tracking-tighter">
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
            className="mt-16 text-center"
          >
            <Link to='/contact' className="inline-flex items-center gap-3 p-2 px-4 rounded-full bg-[#E8A317]/5 border border-[#E8A317]/20 mb-6 hover:bg-[#E8A317]/10 transition-colors">
              <Info className="w-4 h-4 text-[#FF6600]" />
              <span className="text-sm font-medium text-[#5a4a32]">Looking for a specific location?</span>
            </Link>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#FF6600] to-[#E8A317] hover:opacity-90 text-white font-semibold px-8 shadow-lg active:scale-95 transition-transform"
              >
                <Link to="/projects">View Projects Details</Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default MapsView;

