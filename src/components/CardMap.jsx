import Card from "./Card";


const CardMap = ({items}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 pb-20 px-6 ">
        {items.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    );
};

export default CardMap;