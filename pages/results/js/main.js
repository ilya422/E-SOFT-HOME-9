fetch('/api/results', { method: 'GET'})
    .then(res => res.json())
    .then(function (json) {
        table = document.querySelector(".table_result");
        for (var i in json) {
            var v = json[i];
            table.innerHTML += `<tr><td>${v.id}</td> <td>${v.winner}</td> <td>${v.loser}</td></tr>`
        }
    }
);

function clean() {
    fetch('/api/results', { method: 'DELETE'});
    location.reload();
}
