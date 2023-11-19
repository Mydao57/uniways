import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import stops from "../../../data/stops.json";
import { Navbar } from "../Navbar";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const Carte = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://51.38.114.90:3333/recuperer");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="h-screen overflow-x-hidden">
        <Navbar />
        <MapContainer center={[49.1193089, 6.1757156]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {stops.map((stop) => (
            <Marker
              position={[stop.stop_lat, stop.stop_lon]}
              key={stop.stop_id}
            >
              <Popup>{stop.stop_name}</Popup>
            </Marker>
          ))}
        </MapContainer>

        <div className="flex flex-wrap -mx-4">
          {data ? (
            data.map((item, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 my-4">
                <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
                  <div className="md:flex">
                    <div className="p-8">
                      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-center">
                        <span
                          className={`inline-block h-4 w-4 mx-2 rounded-full ${
                            item.affluence === "élevée"
                              ? "bg-red-500"
                              : item.affluence === "modérée"
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                        />
                        {item.bus}
                      </div>
                      <p className="mt-2 text-gray-500 text-center">
                        Affluence : {item.affluence}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Chargement...</p>
          )}
        </div>
      </div>
    </>
  );
};
