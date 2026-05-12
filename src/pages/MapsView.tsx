import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { APIProvider, Map, Marker, InfoWindow } from "@vis.gl/react-google-maps";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import { temples, landmarks, ghats, markets } from "../data/projects";
import { MapPin, Navigation, ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";


const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;


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

  const defaultCenter = { lat: 26.7975, lng: 82.1989 }; // Ayodhya center

  return (
    <>
      <SEOHead
        title="Interactive Map | Ayodhya Serenity"
        description="Explore the spiritual and cultural heart of Ayodhya through our premium interactive map. Locate temples, ghats, and landmarks with ease."
        canonical="https://ayodhyaserenity.vercel.app/maps"
        breadcrumbs={[
          { name: "Home", url: "https://ayodhyaserenity.vercel.app" },
          { name: "Maps View", url: "https://ayodhyaserenity.vercel.app/maps" },
        ]}
      />

      <main className="pt-16 min-h-screen bg-background">
        <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <SectionHeading
              label="Geographical Presence"
              title="Sacred Geography of Ayodhya"
              subtitle="Navigate through the timeless landmarks and spiritual sanctuaries, covered by Ayodhya Serenity."
            />
          </div>
        </section>

        <section className="container mx-auto px-4 pb-20">
          <div className="relative w-full h-[700px] rounded-3xl overflow-hidden shadow-2xl border border-primary/10 group">
            <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
              <Map
                defaultCenter={defaultCenter}
                defaultZoom={15}
                disableDefaultUI={false}
                clickableIcons={false}
                className="w-full h-full"
              >
                {allPlaces.map((place, index) => (
                  <Marker
                    key={index}
                    position={place.coordinates}
                    onClick={() => setSelectedPlace(place)}
                    title={place.name}
                  />
                ))}

                {selectedPlace && (
                  <InfoWindow
                    position={selectedPlace.coordinates}
                    onCloseClick={() => setSelectedPlace(null)}
                  >
                    <div className="p-1 max-w-[280px] font-sans">
                      <div className="relative rounded-lg overflow-hidden mb-3">
                        <img
                          src={selectedPlace.img}
                          alt={selectedPlace.name}
                          className="w-full h-32 object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <span className="bg-primary/90 text-primary-foreground text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider shadow-lg">
                            {selectedPlace.type}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-1 leading-tight">{selectedPlace.name}</h3>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
                        {selectedPlace.desc}
                      </p>
                      <div className="flex items-center gap-2">
                        <Button
                          asChild
                          size="sm"
                          className="w-full h-8 text-[11px] font-semibold bg-primary hover:bg-primary/90 transition-all duration-300 shadow-md"
                        >
                          <a href={selectedPlace.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                            Explore <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full h-8 text-[11px] font-semibold border-primary/20 hover:bg-primary/5 transition-all duration-300"
                          onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${selectedPlace.coordinates.lat},${selectedPlace.coordinates.lng}`, '_blank')}
                        >
                          <Navigation className="w-3 h-3 mr-1" /> Directions
                        </Button>
                      </div>
                    </div>
                  </InfoWindow>
                )}
              </Map>
            </APIProvider>

            {/* Overlay Navigation Info */}
            <div className="absolute top-6 left-6 z-10 bg-background/80 backdrop-blur-md border border-primary/10 p-4 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-bold text-sm">Ayodhya Serenity Guide</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Click on any marker to discover more about the sacred sites, markets, and landmarks within Ayodhya.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Temple', 'Landmark', 'Ghat', 'Market'].map(type => (
                  <span key={type} className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-primary/5 uppercase tracking-tighter">
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
            <Link to='/contact' className="inline-flex items-center gap-3 p-2 px-4 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <Info className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Looking for a specific location?</span>
            </Link>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-saffron hover:opacity-90 text-primary-foreground font-semibold px-8 shadow-lg active:scale-95 transition-transform"
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

