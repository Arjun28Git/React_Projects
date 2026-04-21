import Header from './header.js';
import './carstyles.css';
import BodyofPage from './body.js';
import './images.jpg';

const teams = [
    { id: 1, name: "Ferrari", logo: "/f1images/audi f1.jpg" },
    { id: 2, name: "Mercedes", logo: "images.jpg"},
    { id: 3, name: "Red Bull Racing", logo: "f1images/mclaren f1.jpg" },
    { id: 4, name: "McLaren", logo: "f1images/mercedes.jpg" },
  
  ];
function CarShowRoom() {
  return (
    <div >
      <Header />
      <BodyofPage name={teams[1].name} logo={teams[1].logo} />
    </div>
  );
}

export default CarShowRoom;
