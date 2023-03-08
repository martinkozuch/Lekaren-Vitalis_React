
import './App.css';
import TopNav from './COMPONENTS/TOPNAV/TopNav';
import NavBar from './COMPONENTS/NAVBAR/NavBar';
import Billboard from './COMPONENTS/BILLBOARD/Billboard'
import Onas from './COMPONENTS/ONAS/Onas';
import ContactBonus from './COMPONENTS/CONTACTBONUS/ContactBonus';
import Dermocentrum from './COMPONENTS/DERMOCENTRUM/Dermocentrum';
/* import Zlavy from './COMPONENTS/DERMOCENTRUM/ZLAVY/Zlavy'; */
import Footer from './COMPONENTS/FOOTER/Footer'
import Akcie from './COMPONENTS/AKCIE/Akcie';

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>
        <NavBar></NavBar> 
       <Billboard></Billboard> 
      <ContactBonus></ContactBonus>
        <Onas></Onas> 
       <Dermocentrum></Dermocentrum> 
       <Akcie></Akcie>
   {/*     <Zlavy></Zlavy>  */}
      <Footer></Footer>
    </div>
  );
}

export default App;
