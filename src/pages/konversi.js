import React from "react"

export default class Bank extends React.Component{
    constructor(){
        super()
        this.state = {
            desimal: 0,
            oktal: 0,
            biner: 0,
            heksadesimal: 0,
            konversi: "",
            hasil_desimal: 0,
            hasil_biner: 0,
            hasil_oktal: 0,
            hasil_heksadecimal: 0
        }
    }
    changeState = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    hasilJumlahDesimal = (e) => {
        e.preventDefault()
        let desimal = this.state.desimal
        let konversi = this.state.konversi

        let biner = parseInt(desimal).toString(2);
        let oktal = parseInt(desimal).toString(8);
        let heksadesimal = parseInt(desimal).toString(16);
    
        if (konversi === "biner") {
            this.setState({
                hasil_desimal : biner
            })
        } else if (konversi === "oktal"){
            this.setState({
                hasil_desimal : oktal
            })
        }
        else if (konversi === "heksadesimal")  {
            this.setState({
                hasil_desimal : heksadesimal
            })
        } 
    }
    hasilJumlahBiner = (e) => {
        e.preventDefault()
        let biner = this.state.biner
        let konversi = this.state.konversi

        let desimal = parseInt(biner, 2);
        let oktal = parseInt(biner, 2).toString(8);
        let heksadesimal = parseInt(biner, 2).toString(16);
    
        if (konversi === "desimal") {
            this.setState({
                hasil_biner : desimal
            })
        } else if (konversi === "oktal"){
            this.setState({
                hasil_biner : oktal
            })
        }
        else if (konversi === "heksadesimal")  {
            this.setState({
                hasil_biner : heksadesimal
            })
        } 
    }
    hasilJumlahOktal = (e) => {
        e.preventDefault()
        let oktal = this.state.oktal
        let konversi = this.state.konversi

        let desimal = parseInt(oktal, 8);
        let biner = parseInt(oktal, 8).toString(2);
        let heksadesimal = parseInt(oktal, 8).toString(16);
        
        if (konversi === "desimal") {
            this.setState({
                hasil_oktal : desimal
            })
        } else if (konversi === "biner"){
            this.setState({
                hasil_oktal : biner
            })
        }
        else if (konversi === "heksadesimal")  {
            this.setState({
                hasil_oktal : heksadesimal
            })
        } 
    }
    hasilJumlahHeksadesimal = (e) => {
        e.preventDefault()
        let heksadesimal = this.state.heksadesimal
        let konversi = this.state.konversi

        let desimal = parseInt(heksadesimal, 16);
        let biner = parseInt(heksadesimal, 16).toString(2);
        let oktal = parseInt(heksadesimal, 16).toString(8);
        
        if (konversi === "desimal") {
            this.setState({
                hasil_heksadecimal : desimal
            })
        } else if (konversi === "biner"){
            this.setState({
                hasil_heksadecimal : biner
            })
        }
        else if (konversi === "oktal")  {
            this.setState({
                hasil_heksadecimal : oktal
            })
        } 
    }
    render(){
        return(
            <div className="container col-lg-6 col-sm-12 p-2">
                <div className="card">
                    <div className="card-body row">
                        <div className="alert bg-primary">
                            <h3 className="text-center text-light">Konversi Bilangan Desimal</h3>
                        </div>
                        <form onSubmit={this.hasilJumlahDesimal}>
                            <p>Desimal</p>
                            <input className='form-control' name='desimal' onChange={this.changeState}/>
                            <p>Pilihan Konversi</p>
                            <select class="form-select" name='konversi' onChange={this.changeState}>
                                <option selected></option>
                                <option value="biner">Biner</option>
                                <option value="oktal">Oktal</option>
                                <option value="heksadesimal">Heksadesimal</option>
                            </select>
                            <br/>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="submit">Hitung</button>
                            </div>
                        </form>
                        <p className="text-center">Hasil </p>
                        <div>
                            <p className="alert alert-secondary">{this.state.hasil_desimal}</p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="card">
                    <div className="card-body row">
                        <div className="alert bg-primary">
                            <h3 className="text-center text-light">Konversi Bilangan Biner</h3>
                        </div>
                        <form onSubmit={this.hasilJumlahBiner}>
                            <p>Biner</p>
                            <input className='form-control' name='biner' onChange={this.changeState}/>
                            <p>Pilihan Konversi</p>
                            <select class="form-select" name='konversi' onChange={this.changeState}>
                                <option selected></option>
                                <option value="desimal">Desimal</option>
                                <option value="oktal">Oktal</option>
                                <option value="heksadesimal">Heksadesimal</option>
                            </select>
                            <br/>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="submit">Hitung</button>
                            </div>
                        </form>
                        <p className="text-center">Hasil </p>
                        <div>
                            <p className="alert alert-secondary">{this.state.hasil_biner}</p>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="card">
                    <div className="card-body row">
                        <div className="alert bg-primary">
                            <h3 className="text-center text-light">Konversi Bilangan Oktal</h3>
                        </div>
                        <form onSubmit={this.hasilJumlahOktal}>
                            <p>Oktal</p>
                            <input className='form-control' name='oktal' onChange={this.changeState}/>
                            <p>Pilihan Konversi</p>
                            <select class="form-select" name='konversi' onChange={this.changeState}>
                                <option selected></option>
                                <option value="desimal">Desimal</option>
                                <option value="biner">Biner</option>
                                <option value="heksadesimal">Heksadesimal</option>
                            </select>
                            <br/>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="submit">Hitung</button>
                            </div>
                        </form>
                        <p className="text-center">Hasil </p>
                        <div>
                            <p className="alert alert-secondary">{this.state.hasil_oktal}</p>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="card">
                    <div className="card-body row">
                        <div className="alert bg-primary">
                            <h3 className="text-center text-light">Konversi Bilangan Heksadesimal</h3>
                        </div>
                        <form onSubmit={this.hasilJumlahHeksadesimal}>
                            <p>Heksadesimall</p>
                            <input className='form-control' name='heksadesimal' onChange={this.changeState}/>
                            <p>Pilihan Konversi</p>
                            <select class="form-select" name='konversi' onChange={this.changeState}>
                                <option selected></option>
                                <option value="desimal">Desimal</option>
                                <option value="biner">Biner</option>
                                <option value="oktal">Oktal</option>
                            </select>
                            <br/>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="submit">Hitung</button>
                            </div>
                        </form>
                        <p className="text-center">Hasil </p>
                        <div>
                            <p className="alert alert-secondary">{this.state.hasil_heksadecimal}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}