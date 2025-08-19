import Banner from "@/components/Banner";
import Discover from "@/components/Discover";
import Newsletter from "@/components/Newsletter";
import Portfolio from "@/components/Protfolio";
import Serve from "@/components/Serve";
import Serviecs from "@/components/Serviecs";
import WeServe from "@/components/WeServe";


export default function Home() {
  return (
   <div >
      <Banner></Banner>
      <Discover></Discover>
      <Serviecs></Serviecs>
      <Serve></Serve>
      <WeServe></WeServe>
      <Portfolio></Portfolio>  
   </div>
  );
}
