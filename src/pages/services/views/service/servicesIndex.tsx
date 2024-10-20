import Services from "^/services/components/service";
import ServiceList from "^/services/components/serviceList";
import { services } from "@/info";


const ServicePageView: React.FC = () => {
  return (
    <Services>
      {services.map((service, index) => (
        <ServiceList key={index} service={service} />
      ))}
    </Services>
  );
};
export default ServicePageView;
