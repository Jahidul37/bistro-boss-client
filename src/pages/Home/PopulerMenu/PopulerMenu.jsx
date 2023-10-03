
import Sectiontitle from "../../../components/Sectiontitle/Sectiontitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopulerMenu = () => {
    // custom hook data import and use
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         // .then(data => console.log(data))
    //         .then(data => {
    //             // const populerItems = data.filter(item => item.category == 'popular' || 'salad');
    //             const populerItems = data.filter(item => item.category == 'popular');
    //             setMenu(populerItems)
    //             // console.log(populerItems);
    //         })
    // }, [])


    return (
        <section>
            <Sectiontitle
                heading="From Our Menu"
                subHeading="Populer Items"
            ></Sectiontitle>


            <div className="grid md:grid-cols-2 gap-10 mb-10 ">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    >  </MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 my-4">View Full Menu</button>
        </section>
    );
};

export default PopulerMenu;