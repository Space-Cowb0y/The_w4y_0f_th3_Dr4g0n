//teste the commit
const solucao = JSON.parse(window.localStorage.termo).state;
const solucaoduo = JSON.parse(window.localStorage.duo).state;
const solucaoquatro = JSON.parse(window.localStorage.quatro).state;

lista = [solucao, solucaoduo, solucaoquatro];

for (x in lista) {
    console.log(lista[x]);
    for (y in lista[x]) {
        resp = lista[x][y].solution;
        console.log(resp);
    }
}