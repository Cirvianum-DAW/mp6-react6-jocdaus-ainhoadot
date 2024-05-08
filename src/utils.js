// Una funció per generar un número random entre 1 i 6

function dau6() {
    return Math.floor(Math.random() * 6) + 1;
}

// I si fem també una funció genèrica que ens retorna un array de 'n' números random entre 1 i 6

function getTirades(n) {
    return [...Array(n)].map(dau6);
}

// Finalment també puc tenir una funció que faci una suma dels diferents números de l'array (en aquest cas 'nums')

function sum(nums) {
    return nums.reduce((acc, n) => acc + n, 0);
}

export { dau6, getTirades, sum };