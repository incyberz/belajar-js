let p = new Promise((resolve,reject)=>{
    let tercapai = false; // true or false

    if(tercapai){
        resolve('Sudah tercapai!')
    }else{
        reject('Proses gagal')
    }
}).then((a)=>{ alert(a)
}).catch((e)=>console.log(e))