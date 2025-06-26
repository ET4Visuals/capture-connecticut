import { useNavigate } from "react-router-dom";
import { photographers } from "../data";

export default function Map() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <img src="/images/ct-map.png" alt="Connecticut Map" className="w-full" />
      {photographers.map((p, idx) => (
        <div
          key={p.id}
          onClick={() => navigate(`/profile/${p.id}`)}
          className="absolute cursor-pointer bg-white p-1 rounded shadow-md hover:bg-blue-100"
          style={{
            top: `${20 + idx * 100}px`,
            left: `${40 + idx * 100}px`
          }}
        >
          <img src={p.image} alt={p.name} className="w-16 h-16 object-cover rounded-full" />
          <p className="text-sm text-center">{p.name}</p>
        </div>
      ))}
    </div>
  );
}
