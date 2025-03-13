import { GiTooth } from "react-icons/gi";

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-whiter">
      <div className="relative flex items-center justify-center">
        {/* أيقونة السن */}
        <GiTooth className=" text-blue-400 text-6xl animate-tooth-pulse"/>
      </div>

      {/* أنيميشن */}
      <style>
        {`
          @keyframes toothPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }

          @keyframes toothWiggle {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-5deg); }
            50% { transform: rotate(5deg); }
            75% { transform: rotate(-3deg); }
          }

          .animate-tooth-pulse {
            animation: toothPulse 1.5s infinite ease-in-out, toothWiggle 1s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
