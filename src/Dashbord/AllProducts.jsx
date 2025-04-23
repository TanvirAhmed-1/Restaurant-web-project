import { FaTrash } from 'react-icons/fa';
import HomeHeader from '../Pages/Home/HomeHeader';
import useDataHook from '../Share/useDataHook';

const AllProducts = () => {
    const { menu } = useDataHook();
    console.log(menu);

    return (
        <div>
            <HomeHeader pTitle="---Hurry Up!---" header="MANAGE ALL ITEMS" />

            <div className="overflow-x-auto p-4">
                <table className="min-w-full bg-white border border-gray-300 text-black">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border">#</th>
                            <th className="py-2 px-4 border">Image</th>
                            <th className="py-2 px-4 border">Name</th>
                            <th className="py-2 px-4 border">Category</th>
                            <th className="py-2 px-4 border">Price</th>
                            <th className="py-2 px-4 border">Recipe</th>
                            <th className="py-2 px-4 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu?.map((item, index) => (
                            <tr key={index} className="text-center text-black">
                                <td className="py-2 px-4 border">{index + 1}</td>
                                <td className="py-2 px-4 border">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover mx-auto rounded"
                                    />
                                </td>
                                <td className="py-2 px-4 w-auto border">{item.name}</td>
                                <td className="py-2 px-4 border">{item.category}</td>
                                <td className="py-2 px-4 border">${item.price}</td>
                                <td className="py-2 px-4 border">{item.recipe}</td>

                                <td className="py-2 px-4 border">
                                    <button className="text-red-600 hover:text-red-800">
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProducts;
