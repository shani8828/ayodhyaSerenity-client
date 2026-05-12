import { InfoWindow } from "@vis.gl/react-google-maps";
import { Button } from "@/components/ui/button";
import { ExternalLink, Navigation } from "lucide-react";

interface Place {
  name: string;
  type: string;
  img: string;
  desc: string;
  link: string;
  coordinates: { lat: number; lng: number };
}

interface MapsInfoCardProps {
  place: Place;
  onClose: () => void;
}

const MapsInfoCard = ({ place, onClose }: MapsInfoCardProps) => {
  return (
    <InfoWindow
      position={place.coordinates}
      onCloseClick={onClose}
      maxWidth={320}
    >
      <div className="w-[260px] sm:w-[300px] max-w-full p-1 font-sans bg-white/50 backdrop-blur-sm rounded-lg overflow-hidden">
        <div className="relative rounded-lg overflow-hidden mb-3">
          <img
            src={place.img}
            alt={place.name}
            className="w-full h-32 sm:h-40 object-cover"
          />
          <div className="absolute top-2 right-2">
            <span className="bg-[#E8A317]/90 text-white text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider shadow-lg">
              {place.type}
            </span>
          </div>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-[#5a4a32] mb-1 leading-tight">{place.name}</h3>
        <p className="text-xs sm:text-sm text-[#705e43] mb-3 line-clamp-2 sm:line-clamp-3 leading-relaxed">
          {place.desc}
        </p>
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="w-full h-9 sm:h-10 text-[11px] sm:text-xs font-semibold bg-[#FF6600] hover:bg-[#E8A317] text-white transition-all duration-300 shadow-md"
          >
            <a href={place.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
              Explore <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </Button>
        </div>
      </div>
    </InfoWindow>
  );
};

export default MapsInfoCard;
