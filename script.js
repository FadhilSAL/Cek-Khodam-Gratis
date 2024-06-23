//daftar khodam

const khodam = [
   'Naga',
   'Jin Qorin',
   'Rawa Rontek',
   'Truk Tronton',
   'Vario',
   'Torpedo',
   'Tidak Ada',
   'Ragil',
   'Tower',
   'Pesulap Merah',
   'Skeleton',
   'Duit',
   'Boboiboy',
   'Landak',
   'Sapi',
   'Kuda Nil',
   'Adudu',
   'Nyi Roro Kidal',
   'Kuyang',
   'Ganjar',
   'Sapu Lidi',
   'Maling Mangga',
   'Spiderman',
   'Iron Man',
   'Thanos',
   'Beruang',
   'Durian',
   'Odading',
   'Tukang PLN',
   'Sigit Rendang'
];

function pilihKhodam(event){
    event.preventDefault()
    const nama = document.getElementById("nama").value;
    const resultDIV = document.getElementById("result");
    resultDIV.textContent = ''
    if(nama){
        const randomIndex = Math.floor(Math.random()*khodam.length);
        const khodamterpilih = khodam[randomIndex]
        resultDIV.textContent = `Nama Anda ${nama}, khodam anda ${khodamterpilih}`
        //menghapus hasil setelah brp detik

        setTimeout(()=>{
            resultDIV.textContent = ''
        },500000)
    }else{
        resultDIV.textContent = 'Nama Tidak Boleh Kosong'
    }
}


document.getElementById('khodamForm').addEventListener('submit',pilihKhodam)