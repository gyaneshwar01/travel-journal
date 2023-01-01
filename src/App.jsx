import Header from "./components/Header";
import Card from "./components/Card";
import card1 from "./images/card1.png";
import data from "./data";

export default function App() {
  const cardArray = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="container">
      <Header />
      <div className="cards">{cardArray}</div>
    </div>
  );
}
