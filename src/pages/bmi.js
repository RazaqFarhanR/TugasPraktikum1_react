import React from "react"

export default class Bmi extends React.Component{
    constructor(){
        super()
        this.state = {
            berat: 0,
            tinggi: 0,
            hasil: 0,
            status: ""
        }
    }
    changeState = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    hasilJumlah = (e) => {
        e.preventDefault()
        let berat = this.state.berat
        let tinggi = this.state.tinggi
        // let hitung = this.state.hasil
        let hasil = Number(berat) / (Number(tinggi*tinggi) / 10000);
        
        if (hasil <= 18.5) {
            this.setState({
                status: "Kekurangan Berat Badan"
            })
        } else if (hasil >= 18.5 && hasil < 24.9){
            this.setState({
                status: "Normal(Ideal)"
            })
        }
        else if (hasil >= 25.9 && hasil < 29.9)  {
            this.setState({
                status: "Kelebihan Berat Badan"
            })
        } else{
            this.setState({
                status: "Kegemukan(Obesitas)"
            })
        }
    }
    render(){
        return(
            <div className="container col-lg-6 col-sm-12 p-2">
                <div className="card">
                    <div className="card-body row">
                        <div className="alert alert-secondary">
                            <h3 className="text-center text-dark">Body Mass Index</h3>
                        </div>
                        <form onSubmit={this.hasilJumlah}>
                            <p>Berat (kg)</p>
                            <input className='form-control' name='berat' onChange={this.changeState}/>
                            <p>Tinggi (cm)</p>
                            <input className='form-control' name='tinggi' onChange={this.changeState}/>
                            <br/>
                            <div className="d-grid gap-2 bg">
                                <button className="btn btn-primary" type="submit">Hitung</button>
                            </div>
                        </form>
                        <h5 className="mt-4 text-center">HASIL</h5>
                        <div>
                            <p className="alert alert-success"> Status: {this.state.status}</p>
                        </div>
                </div>
            </div>
        </div>
        )
    }
}
