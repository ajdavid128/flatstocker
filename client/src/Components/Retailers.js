import RetailerCard from './RetailerCard';

function Retailers({retailers}) {

    const retailerArray = retailers.map((eachRetailer) => {
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