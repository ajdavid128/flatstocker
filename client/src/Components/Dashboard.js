import { useState } from "react";
import { Segment } from "semantic-ui-react";
import PieChart from "./PieChart";
import { UserData } from "./Data";

function Dashboard() {

    const [data, setData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
            label: "Users Gained",
            data: UserData.map((data) => data.userGain)
        }]
    })
    

    return (
        <div id="dash">
            <Segment>
                <PieChart chartData={data}/>
            </Segment>
            
        </div>
    )
};

export default Dashboard;