import CardMap from "../../components/CardMap";
import CardS from "../../Share/CardS";
import useDataHook from "../../Share/useDataHook";
import Slider from "./../../components/Slider";

const Recommends = () => {
  const { menu, loading } = useDataHook();

  if (loading) {
    return <p>Loading...</p>; // or your own spinner component
  }
  const salad = menu.filter((item) => item.category === "salad").slice(0, 3);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 pb-20 px-6 ">
        {salad.map((item, index) => (
          <CardS key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Recommends;
