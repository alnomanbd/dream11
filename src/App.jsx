import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import PlayerLists from "./components/PlayerList/PlayerLists";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [coins, setCoins] = useState(0);

  const handleClaimCredits = () => {
    setCoins(prevCoins => {
      const newCoins = prevCoins + 100000; // Adjust the amount as needed
      toast.success(`Claimed 100000 coins! Total: ${newCoins}`);
      return newCoins;
    });
  };

  return (
    <>
      <ToastContainer />
      <Navbar coins={coins} />
      <Hero onClaimCredits={handleClaimCredits} />
      <PlayerLists coins={coins} setCoins={setCoins} />
      <Newsletter />
      <Footer />
    </>
  );
}
