const titulo = document.querySelector('input#titulo');
const fonte = document.querySelector('input#fonte');
const cabecalho = document.querySelector('input#cabecalho');
const dados = document.querySelector('input#dados');
const form = document.querySelector('form');
const body = document.querySelector('tbody');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const tt = titulo.value;
    console.log(tt);
    const ft = fonte.value;
    console.log(ft);
    const ct = cabecalho.value;
    console.log(ct);
    const dt = dados.value;
    console.log(dt);
    const vetordados = (dt.split(';')).sort();
    console.log(vetordados);
    const replaydados = vetordados.reduce(function(acc, e) {
        acc[e] = (e in acc ? acc[e]+1 : 1);
        return acc;
    }, {});
    console.log(replaydados);
    const chaves = Object.keys(replaydados);
    for ( let c of chaves) {
        let tr = `<tr><td>${c}</td><td>${replaydados[c]}</td></tr>`;
        body.innerHTML += tr;
    }
    document.querySelector('th').textContent = cabecalho.value;
    document.querySelector('h3').textContent = 'Titulo:'+titulo.value;
    document.querySelector('h4').textContent = 'Fonte: ' + fonte.value;
});
