import React, {useState}from "react";
import '../components/style.css';
<script src="https://cdn.tailwindcss.com"></script>

const Profil = () => {
    const [data, setData] = useState({
        nama: "",
        nim: "",
        angkatan: "",
        hobi: "",
    })
    const [input, setInput] = useState(false)

    const saveIntroduction = (event) =>{
        event.preventdefault();
    }

    return (

        <div className="profil">
            {input ? (
                <div className="lagi">
                    <div className="hasil">
                        <div className="data">
                            <h2>Nama: {data.nama}</h2>
                            <h2>Nim: {data.nim}</h2>
                            <h2>Angkatan: {data.angkatan}</h2>
                            <h2>Hobi: {data.hobi}</h2>
                        </div>
                        <button style={{marginTop : 30}} onClick={()=>{setInput(false);}}>Back</button>
                    </div>

                </div>
            ):
            (
                <div className="container">
                <h1> FORM PROFIL</h1>

                <div className="introduction">
                    <form onSubmit={saveIntroduction}>  
                            <label>Nama</label>
                            <input type="input" placeholder="Masukkan nama" value={data.nama} onChange={(e) =>{
                                setData({...data, nama:e.target.value});
                            }}></input>
                            <label>Nim</label>
                            <input type="input" placeholder="Masukkan nim" value={data.nim} onChange={(e) =>{
                                setData({...data, nim:e.target.value});
                            }}></input>
                            <label>Angkatan</label>
                            <input type="input" placeholder="Masukkan angkatan" value={data.angkatan} onChange={(e) =>{
                                setData({...data, angkatan:e.target.value});
                            }}></input>
                        <label>Hobi</label>
                        <input type="input" placeholder="Masukkan hobi" value={data.hobi} onChange={(e) =>{
                            setData({...data, hobi:e.target.value});
                        }}></input>
                        <button type="submit" onClick={() =>{
                            setInput(true);
                        }}>kirim</button>
                    </form>
                </div>
            </div>
            )}
        </div>
    )
}

export default Profil