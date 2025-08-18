import Banner from "@/components/Banner";
import Discover from "@/components/Discover";
import Newsletter from "@/components/Newsletter";
import Serve from "@/components/Serve";
import Serviecs from "@/components/Serviecs";


export default function Home() {
  return (
   <div >
      <Banner></Banner>
      <Discover></Discover>
      <Serviecs></Serviecs>
      <Serve></Serve>
      <Newsletter></Newsletter>
   </div>
  );
}
