  // formulaire.addEventListener('submit', (e) => {
        // e.preventDefault();
        // let valid = true;
        // const erreurlibelle = document.getElementById('error');
        // const descriptionError = document.getElementById('desc_input');

        // Validation pour libelle
        // if (libelle.value.trim() === "") {
        //     erreurlibelle.innerHTML = "Le libellé ne peut pas être vide";
        //     erreurlibelle.style.color = 'red';
        //     valid = false;
        // } else if (libelle.value.length < minlibelle || libelle.value.length > maxlibelle) {
        //     erreurlibelle.innerHTML = `Le libellé doit être compris entre ${minlibelle} et ${maxlibelle} caractères`;
        //     erreurlibelle.style.color = 'red';
        //     valid = false;
        // } else if (!regexlibelle.test(libelle.value)) {
        //     erreurlibelle.innerHTML = "Le libellé ne doit pas contenir de chiffres";
        //     erreurlibelle.style.color = 'red';
        //     valid = false;
        // } else {
        //     erreurlibelle.innerHTML = "";
        // }

        // Validation pour description
        // if (description.value.trim() === "") {
        //     descriptionError.innerHTML = "La description ne peut pas être vide";
        //     descriptionError.style.color = 'red';
        //     valid = false;
        // } else if (description.value.length < mindescription || description.value.length > maxdescription) {
        //     descriptionError.innerHTML = `La description doit être comprise entre ${mindescription} et ${maxdescription} caractères`;
        //     descriptionError.style.color = 'red';
        //     valid = false;
        // } else if (!regexdescription.test(description.value)) {
        //     descriptionError.innerHTML = "La description ne doit pas contenir de chiffres ni de caractères spéciaux";
        //     descriptionError.style.color = 'red';
        //     valid = false;
        // } else {
        //     descriptionError.innerHTML = "";
        // }})