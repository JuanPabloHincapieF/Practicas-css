lista1 = ["perro", "gato", "oso", "aguila"];
lista2 = ["loro", "cocodrilo", lista1, "delfin"];

label: for (let i in lista2) {
  if (i == 2) {
    for (let i of lista1) {
      if (i == "gato") {
        continue label;
      }
      document.write(i + "<br>");
    }
  } else {
    document.write(lista2[i] + "<br>");
  }
}
