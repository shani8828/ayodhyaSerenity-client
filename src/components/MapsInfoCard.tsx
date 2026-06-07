import { InfoWindow } from "@vis.gl/react-google-maps";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

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
      <div className="w-[260px] sm:w-[300px] max-w-full p-2 font-['Plus_Jakarta_Sans'] bg-[#000000]/90 backdrop-blur-xl border border-white/10 rounded-none overflow-hidden text-[#F9F9F6]">
        <div className="relative rounded-none overflow-hidden mb-3">
          <img
            src={place.img}
            alt={place.name}
            className="w-full h-32 sm:h-40 object-cover grayscale-[10%]"
          />
          <div className="absolute top-2 right-2">
            <span className="bg-[#FF6B00] text-black text-[9px] px-2 py-0.5 rounded-none font-bold uppercase tracking-widest shadow-lg">
              {place.type}
            </span>
          </div>
        </div>
        
        <h3 className="text-base font-bold text-[#F9F9F6] mb-1.5 leading-tight font-['Clash_Display']">{place.name}</h3>
        <p className="text-xs text-[#F9F9F6]/75 mb-4 line-clamp-2 leading-relaxed">
          {place.desc}
        </p>

        <div className="flex items-center">
          <Button
            asChild
            size="sm"
            className="w-full h-10 text-[10px] tracking-widest font-semibold bg-[#FF6B00] hover:bg-[#E65100] text-black rounded-none transition-all duration-300 shadow-md uppercase"
          >
            <a href={place.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
              Explore <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
            </a>
          </Button>
        </div>
      </div>
    </InfoWindow>
  );
};

export default MapsInfoCard;
