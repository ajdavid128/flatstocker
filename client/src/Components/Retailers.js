import RetailerCard from './RetailerCard';

function Retailers({currentUser, setUpdateRetailer, setRerender, errors, setErrors, retailers}) {

    const retailerArray = currentUser.unique_retailers.map((eachRetailer) => {
        return <RetailerCard 
            key={eachRetailer.id} 
            {...eachRetailer}
            setUpdateRetailer={setUpdateRetailer}
            setRerender={setRerender}
            errors={errors}
            setErrors={setErrors}
            retailers={retailers}
            />
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