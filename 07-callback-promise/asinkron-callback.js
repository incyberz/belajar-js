const tercapai = false; //true or false

function fungsiCallback(sukses,gagal){
    if(tercapai){
        sukses('Proses selesai!')
    }else{
        gagal('Proses Gagal.')
    }
}

fungsiCallback((sukses)=>{
    alert(sukses)
}, (gagal)=>{ console.log(gagal)})