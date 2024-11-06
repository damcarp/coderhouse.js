document.getElementById('contadorBoton').addEventListener('click', iniciarContador);

function iniciarContador() {
    let duracionDelCurso = prompt("¿Cuántos días dura el curso?");
    if (duracionDelCurso === null || duracionDelCurso <= 0) return;

    let cantidadDeAlumnos = prompt("¿Cuántos alumnos son?");
    if (cantidadDeAlumnos === null || cantidadDeAlumnos <= 0) return;

    let alumnosTotales = [];

    for (let i = 0; i < cantidadDeAlumnos; i++) {
        let nombreAlumno = prompt("Nombre del alumno " + (i + 1));
        if (nombreAlumno === null) return;
        alumnosTotales.push([nombreAlumno, 0]);
    }

    const tomarAsistencia = (nombre, p) => {
        let presencia;
        do {
            presencia = prompt(`¿${nombre} está presente? (Si/No)`);
            if (presencia === null) return;
            if (presencia === "Si" || presencia === "si" || presencia === "S" || presencia === "s") {
                alumnosTotales[p][1]++;
            } else if (presencia === "No" || presencia === "no" || presencia === "N" || presencia === "n") {
                alumnosTotales[p][1];
            } else {
                alert("Respuesta inválida. Debes poner 'Si' o 'No'.");
            }
        } while (presencia !== "Si" && presencia !== "si" && presencia !== "S" && presencia !== "s" && presencia !== "No" && presencia !== "no" && presencia !== "N" && presencia !== "n");
    };

    for (let i = 0; i < duracionDelCurso; i++) {
        for (let alumno in alumnosTotales) {
            tomarAsistencia(alumnosTotales[alumno][0], alumno);
        }
    }

    let resultadoHTML = "";
    for (let alumno in alumnosTotales) {
        let ausencias = duracionDelCurso - alumnosTotales[alumno][1];
        let porcentajeAusencias = (ausencias / duracionDelCurso) * 100;
        let resultado = `${alumnosTotales[alumno][0]}: <br>
        Presentes: ${alumnosTotales[alumno][1]} <br>
        Ausencias: ${ausencias}<br>
        Porcentaje de Ausencias: ${porcentajeAusencias.toFixed(2)}%<br>`;

        if (porcentajeAusencias > 30) {
            resultado += "REPROBADO POR INASISTENCIAS<br><br>";
        } else {
            resultado += "<br><br>";
        }
        resultadoHTML += resultado;
    }

    document.getElementById('resultados').innerHTML = resultadoHTML;
}
