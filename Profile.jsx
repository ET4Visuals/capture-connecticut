import { useParams } from "react-router-dom";
import { photographers } from "../data";

export default function Profile() {
  const { id } = useParams();
  const profile = photographers.find((p) => p.id === id);

  if (!profile) return <p>Photographer not found</p>;

  return (
    <div className="max-w-xl mx-auto p-4">
      <img src={profile.image} alt={profile.name} className="w-32 h-32 rounded-full mx-auto" />
      <h2 className="text-2xl text-center mt-2 font-bold">{profile.name}</h2>
      <p className="text-center text-gray-600">{profile.city}</p>
      <p className="text-center my-2">Pricing: {profile.pricing}</p>
      <p className="text-center">
        <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          View Instagram
        </a>
      </p>

      <form
        action={`mailto:${profile.email}`}
        method="POST"
        encType="text/plain"
        className="mt-4 space-y-2"
      >
        <input type="text" name="name" placeholder="Your name" className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="Your email" className="w-full p-2 border rounded" />
        <textarea name="message" placeholder="Your message" rows="4" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Send Booking Request</button>
      </form>
    </div>
  );
}
