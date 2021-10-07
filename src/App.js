import {houseDatas} from "./entities"
import ApartCard from "./components/ApartCard"

function App() {

  return (
    <div className="p-10 grid grid-flow-row 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5">
      {houseDatas["response"].map( (houseIfo, index) => {
        return (
          <ApartCard houseInfo={houseIfo} key={index}></ApartCard>
        )
      })}

  </div>
  );
}

export default App;
