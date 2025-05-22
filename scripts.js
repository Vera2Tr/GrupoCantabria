const filas = document.querySelectorAll("#miTabla tbody tr")

filas.forEach(fila => {
    fila.addEventListener("click", () => {
        filas.forEach(f => f.classList.remove("resaltado"))
        fila.classList.add("resaltado")
    })
})