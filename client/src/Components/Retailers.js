import RetailerCard from './RetailerCard';

function Retailers({currentUser, retailers}) {

    const retailerArray = currentUser.unique_retailers.map((eachRetailer) => {
        return <RetailerCard key={eachRetailer.id} {...eachRetailer}/>
    })


    return (
        <div id="center-retailer-cards">
            <div id="retail-cards">
                {retailerArray}
            </div>
        </div>
    )
};

export default Retailers;