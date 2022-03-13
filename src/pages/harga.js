import React from "react"

export default class Harga extends React.Component{
    constructor(){
        super()
        this.state = {
            hargaAwal: 0,
            PPN: 0,
            diskon: 0,
            totalPPN: 0,
            totaldisc: 0,
            hasil: 0,
        }
    }
    changeState = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // => arrow function 
    hasilJumlah = (e) => {
        e.preventDefault()
        let hargaAwal = this.state.hargaAwal
        let PPN = this.state.PPN
        let diskon = this.state.diskon

        let hitungPPN = Number(hargaAwal) * Number(PPN/100)
        let hitungdisc = Number(hargaAwal) * Number(diskon/100)
        let hitung = Number(hargaAwal) + Number(hitungPPN) - Number(hitungdisc)
        
        this.setState({
            totalPPN: hitungPPN,
            totaldisc: hitungdisc, 
            hasil: hitung
        })
    }
    render(){
        return(
            <div className="container col-lg-6 col-sm-12 p-2">
                <div className="card">
                    <div className="card-body row">
                        <div className="alert bg-success">
                            <h3 className="text-center text-light">Hitung Harga Akhir</h3>
                        </div>
                        <form onSubmit={this.hasilJumlah}>
                            <p>Harga Awal</p>
                            <input className='form-control' name='hargaAwal' onChange={this.changeState}/>
                            <p>PPN</p>
                            <input className='form-control' name='PPN' onChange={this.changeState}/>
                            <p>Diskon</p>
                            <input className='form-control' name='diskon' onChange={this.changeState}/>
                            <br/>
                            <div class="d-grid gap-2">
                                <button class="btn btn-success" type="submit">Hitung</button>
                            </div>
                        </form>
                        <p className="text-center">Harga Akhir </p>
                        <div>
                        <p className="alert alert-secondary">Rp. {this.state.hasil}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}