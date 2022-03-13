import React from "react"
import { Route, Switch } from "react-router-dom";
import Bmi from "./pages/bmi"
import Bank from "./pages/cicilan_bank"
import Harga from "./pages/harga"
import konversi from "./pages/konversi"

class Main extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path="/" component={Bmi} />
                <Route path="/bmi" component={Bmi} />
                <Route path="/cicilan_bank" component={Bank} />
                <Route path="/harga" component={Harga} />
                <Route path="/konversi" component={konversi} />
            </Switch>
        )
    }
}
export default Main;
