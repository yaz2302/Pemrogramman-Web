document.querySelectorAll("a").forEach((a)=>{
    // Jika di klik akan menjalankan Fungis computerChoice()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
        console.log("berhasil mengambil element a");
    })
})
function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // mengambil element pilihan komputer
    let pilihanKomputer = document.querySelector("#result");

    // membuat pilihan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML
    
    // jika pilihan komputer == pilihan user (Draw)
    if(pilihanUser == pilihanKomputer){
        alert("DRAW");
    }

    //jika pilihan komputer menang
    if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        alert("Komputer WIN");               
    }else if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        alert("Komputer WINN");
    }else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        alert("Komputer WINNN");
    }

    // jika pilihan user menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
    alert("User WIN");
    }else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("User WINn");
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("User WINNN");
    }
}