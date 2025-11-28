import { Heart } from "lucide-react";
export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#f4e7ff] z-50">
      {/* <svg
        viewBox="0 0 187.3 93.7"
        height="200"
        width="300"
        className="animate-dash"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="pink" />
            <stop offset="100%" stopColor="blue" />
          </linearGradient>
        </defs>
        <path
          d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5
          s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1
          c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5
          s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
          stroke="url(#gradient)"
          fill="none"
          strokeWidth="5"
          className="stroke-[#B084E1] [stroke-dasharray:50,14] [stroke-dashoffset:192] animate-dash"
        />
      </svg> */}
    
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 bg-gradient-to-br from-purple-200/40 via-purple-200/40 to-purple-200/40 rounded-full blur-2xl animate-pulse"></div>
        </div>
        
        <div className="relative  flex items-center justify-center overflow-hidden ">
 
      
      
     
      
          <div className="relative z-10">
            <Heart 
              className="w-14 h-14 text-purple-400 fill-purple-400 animate-pulse" 
              style={{
                animation: 'heartbeat 1.2s ease-in-out infinite',
              }}
            />
          </div>
          
    
        
        </div>
 
        <div className="mt-8 text-center">
          <p className="text-purple-400 font-semibold text-lg animate-pulse">Loading</p>
          <div className="flex justify-center gap-1 mt-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-purple-300 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  );
}
