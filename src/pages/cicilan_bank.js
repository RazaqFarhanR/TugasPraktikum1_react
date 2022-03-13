import React from "react"

export default class Bank extends React.Component{
    constructor(){
        super()
        this.state = {
            nominal: 0,
            bunga: 0,
            periode: 0,
            totalbunga: 0,
            totalperiode: 0,
            hasil: 0
        }
    }
    changeState = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    hasilJumlah = (e) => {
        e.preventDefault()
        let nominal = this.state.nominal
        let bunga = this.state.bunga
        let periode = this.state.periode
        
        let hitungperiode = Number(nominal) / Number(periode)
        let hitungbunga = Number(hitungperiode) * Number(bunga/100)
        let hitung = Number(hitungbunga) + Number(hitungperiode)
        
        this.setState({
            totalbunga: hitungbunga,
            totalperiode: hitungperiode, 
            hasil: hitung
        })
    }
    render(){
        return(
            <div className="container col-lg-6 col-sm-12 p-2">
                <div className="card">
                    <div className="card-body row">
                        <div className="alert bg-primary">
                            <h3 className="text-center text-light">Cicilan Bank</h3>
                        </div>
                        <form onSubmit={this.hasilJumlah}>
                            <p>Nominal</p>
                            <input className='form-control' name='nominal' onChange={this.changeState}/>
                            <p>Bunga</p>
                            <input className='form-control' name='bunga' onChange={this.changeState}/>
                            <p>Periode</p>
                            <select className="form-select" name='periode' onChange={this.changeState}>
                                <option selected></option>
                                <option value="1">1 Bulan</option>
                                <option value="2">2 Bulan</option>
                                <option value="3">3 Bulan</option>
                                <option value="4">4 Bulan</option>
                                <option value="5">5 Bulan</option>
                                <option value="6">6 Bulan</option>
                                <option value="7">7 Bulan</option>
                                <option value="8">8 Bulan</option>
                                <option value="9">9 Bulan</option>
                                <option value="10">10 Bulan</option>
                                <option value="11">11 Bulan</option>
                                <option value="12">12 Bulan</option>
                            </select>
                            <br/>
                            <div className="d-grid gap-2 bg">
                                <button className="btn btn-primary" type="submit">Hitung</button>
                            </div>
                        </form>
                        <h5 className="mt-4 text-center">Cicilan</h5>
                        <div>
                            <p className="alert alert-secondary"> perBulan: Rp. {this.state.hasil}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}