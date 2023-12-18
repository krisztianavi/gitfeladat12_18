let szamok = [];

function szamHozzaad(){
    const szamInput = document.getElementById('szamInput');
    const szamlista = document.getElementById('szamlista');

    const ujszam = parseFloat(szamInput.value);
    if (!isNaN(ujszam)){
        szamok.push(ujszam);
        kiiratas();
    }
    else{
        alert("Érvénytelen szám!");
    }

    szamInput.value = '';
}

function kiiratas(){
    const szamlista = document.getElementById('szamlista');
    szamlista.textContent = 'Számok: ' + szamok.join(', ');
}

function minKiiratas(){
    const minszam = Math.min(...szamok);
    alert('Minimum szám: ' + minszam);
}
