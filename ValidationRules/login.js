export default function loginValidate(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "El email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "El email no es valido";
  }

  if (!values.password) {
    errors.password = "El password es obligatorio";
  } else if (values.password.length < 6) {
    errors.password = "El password debe tener almenos 6 caracteres";
  }

  return errors;
}

// validar email

//!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

// validar URL

//!/^(ftp|http|https):\/\/[^ "]+$/
