import { FormControl } from "@angular/forms";


export const nombreApellidoPattern  : string = "([a-zA-Z]+) ([a-zA-Z]+)";
export const emailPattern           : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


export const noPuedeSerCiappa = ( argumento: FormControl) => {
    const valor: string = argumento.value?.trim().toLowerCase();
    if (valor === "ciappa"){
      return {
        noCiappa: true
      }
    }
    return null;
  }