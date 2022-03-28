# FRONTEND
La siguiente aplicación se utilizó para resolver el problema del front end solicitado, la cual muestra por pantalla los colores que se encuentren registrados en la API de backend, es así que muestra el **_el nombre del color, código hexadecimal, pantone y año._** Dicha aplicación fue desarrollada usando el framework para frontend **React**.
# Tecnologías & Frameworks
- JavaScript
- React JS
- CSS
- Bootstrap

# Instalar dependencias
1. Clonar el proyecto [https://github.com/Jhonas0403/FRONTEND_REACT.git](https://github.com/Jhonas0403/FRONTEND_REACT.git)
2. Ejecutar **_npm i_** para instalar todas las dependencias que se requieran.
3. Para correr el programa **_npm start_**.
4. El programa se correra en el siguiente enlace [http://localhost:3000/](http://localhost:3000/).

## Características
- Se uso flexbox para que al momento de agrandar o reducir el tamaño de pantalla estos no se distorsionen y mantengan un orden, dando así una orientación responsive a la solución del problema.
- En el caso del Wireframe-1, se trato de tomar la forma que se mostraba en este mock up, se cambio la disposcion de 9 elementos por pantalla a 6.
- En el caso del Wireframe-2, se optó por una solución con POP-UPS, ya que consideraba que abrir una nueva ventana para mostrar las características del color copiado, era muy sobrecargado para el usuario. Es decir que cuando el usuario haga click en el color que desee copiar su información, se lanzara una ventana modal manteniendo el año y pantone, así también el Background de esta ventana tendra el mismo color de código que se estará copiando, sin embargo, no mostrará el código, el nombre del color se mostrará en la cabecera de esta ventana. Cabe resaltar que en esta ocasión se considero solamente 12 elementos. Los botones para prev y next unicamente aparecen si y solo si hay alguna ubicación para redireccionar.