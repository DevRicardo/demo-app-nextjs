export default function productValidate(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "El nombre es obligatorio";
  }

  if (!values.business) {
    errors.business = "El nombre de la empresa es obligatorio";
  }

  /*if (!values.image) {
    errors.image = "La imagen es obligatoria";
  }*/

  if (!values.description) {
    errors.description = "La descripción del producto es obligatoria";
  }

  if (!values.url) {
    errors.url = "La url es obligatoria";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)) {
    errors.url = "La url no es valida";
  }

  return errors;
}

// validar email

//!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

// validar URL

//!/^(ftp|http|https):\/\/[^ "]+$/
