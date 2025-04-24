const PlatList = ['B 2610 QAL', 'D 0626 MLK', 'D 0809 AMK   ']
let tanggal = prompt("masukkan tanggal : ")


function cek_angka(nomor){
    switch(nomor %2){
        case 0: 
            return "Genap"
        case 1:
            return "Ganjil"
    }    
}
let div = document.getElementById("container")

PlatList.forEach(plat => {
 
    let nomor = "";
    let date;
    let platnom;
    for (let i = 0 ; i < plat.length; i++){
        if(!isNaN(parseInt(plat[i]))){
            nomor+=plat[i]
        } 
    }
    
    let platnomor = nomor[length-1]

    date = cek_angka(parseInt(tanggal))
    platnom = cek_angka(parseInt(nomor))

    let pesan;
    switch(date){
        case platnom:
            div.innerHTML+= `Pada Tanggal ${tanggal} Mobil Dengan Platnomor ${plat} Boleh Memasuki Jalur Tol<br>`;
            break;

        default:
            div.innerHTML += `Pada Tanggal ${tanggal}, Mobil Dengan Platnomor ${plat} Tidak Boleh Memasuki Jalur Tol<br>`;
    }
})

