# Platzom
Platzom es un idioma inventado para el [curso de fundamentos de javascript](https://platzi.com/js) de [platzi](https://platzi.com), el mejor lugar de educacion online
## Descripcion del idioma
- Si la palabra termina con "ar", se le quitan esas dos letras
- Si la palabra inicia con z, se le anade "pe" al final.
- Si la palabra traducida tiene 10 o mas letras, se debe partir de dos por la mitad y unir con un guion medio
- Por ultimo, si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayusculas y minusculas
 ## Instalacion
 ```
  npm install platzom
  ```

  ## uso
  ```
  import platzom from 'platzom'

  platzom("Programar") //Program
  platzom("zorro") // Zorrope
  platzom("zarpar") // Zarpe
  platzom("abecedaario") // abece-dario
  platzom("sometemos") // SoMeTeMoS
  ```

  ## Creditos
  - [Marcelo Garcia](https://facebook.com/marcelo)

  ##Licencia
  [MIT](https://opensource.org/licenses/MIT)