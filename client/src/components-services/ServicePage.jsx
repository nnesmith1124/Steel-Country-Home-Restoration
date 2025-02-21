import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import ServiceDisplay from "./ServiceDisplay";

export default function ServicePage() {
  const { name } = useParams(); // Get the dynamic parameter from the URL
  console.log("service name from Service Page " + name);

  return (
    <div>
      <NavBar />
      <br />
      <h1 className="text-5xl font-bold text-center my-8">{name}</h1>

      <ServiceDisplay serviceName={name} />
      <p>
        <br />
      </p>
      <Footer />
    </div>
  );
}
