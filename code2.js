;let variabel = document.getElementById("block")

let DAFTAR_NAMA_SISWA = [
    {name : "QANIA ALISYA" , grade : 'A'},
    {name : "NICHOLAS ASHER", grade : 'B'},
    {name : "ARKATA MAHEN" , grade : 'C'},
    {name : "JESSE ALTHERO" , grade : 'D'},
]

let pesan

DAFTAR_NAMA_SISWA.forEach(student =>{
    switch(student.grade){
        case 'A':
            variabel.innerHTML+="Sangat Bagus<br>"
            break;
        case 'B':
            variabel.innerHTML+="Bagus<br>"
            break;
        case 'C': 
            variabel.innerHTML+="Cukup Bagus<br>"
            break;
        case 'D':
            variabel.innerHTML+="Cukup<br>"
            break;
        default:
            variabel.innerHTML+="Gagal<br>"            
    }
})