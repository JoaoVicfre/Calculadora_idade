function calcular_idade() {
    let dataNascimento = document.getElementById("dataNascimento").value;
    if (!dataNascimento) {
        document.getElementById("resultado").innerText = "Por favor, insira uma data válida.";
        return;
    }

    let birthDate = new Date(dataNascimento);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();
    let dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById("resultado").innerText = `Sua idade é ${age} anos.`;
}
