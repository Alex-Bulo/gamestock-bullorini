# Gamestock - Bullorini
E-commerce para el curso de CoderHouse sobre ReactJS (2 meses)

Repositorio público: [Github](https://github.com/Alex-Bulo/gamestock-bullorini)

Proyecto subido a Heroku: [gamestock-bullorini.herokuapp.com](http://gamestock-bullorini.herokuapp.com/)
***

Página de venta de videojuegos que cumple con los requisitos del curso:
 - /Home - muestra todos los videojuegos disponibles 
	 - pedido de data a firebase
 - /category/:id - muestra los videojuegos bajo la categoría deseada
	 - react-router y useParams
 - /item/:id - muestra el detalle del videojuego deseado
	 - Contador para elegir cantidad de items dependiendo del stock
	 - Agregar item al carrito 
		 - Si no se encuentra en el carrito, lo agrega. Si se encuentra, suma la cantidad al item ya agregado (hasta máximo de stock)
- /cart - muestra el detalle del carrito
	 - Render condicional por si no existen items en el carrito
	 - Funcionalidad de eliminar del carrito el item seleccionado y vaciar el carrito
	 - Funcionalidad de finalizar compra y generar una orden de compra (firebase)

[extras al curso]
- Funcionalidad de elección de Theme (dark/light mode) con useContext
- PopUp login en NavBar
- /item/:id - PopUp con imágenes extras del videojuego elegido, cerrándose al hacer click fuera del mismo
- /cart - Funcionalidad de modificar la cantidad elegida en el carrito con el mismo componente ItemCount de /item/:id (reemplaza la cantidad, no agrega o resta)
 - Formulario de finalizar compra pre cargado si el usuario está logueado
- /profile - muestra el perfil del usuario (solo accesible si el usuario está logueado)
- /register - muestra formulario para registrarse (creación de user en firebase)
- /notFound - pagina de notFound con links para volver a los sitios navegables
	- pedido a API publica [Rawg games](https://rawg.io/apidocs) (lugar de donde saqué la info de los juegos para el sitio) para mostrar un video juego aleatorio (si la API da error, no muestra nada)

Decidí no utilizar ninguna librería de React y crear los componentes de 0 para practicar React. Solamente usé react-loader-spinner por recomendación de tutor
***

## Levantar proyecto

Clonar repositorio *( git clone https://github.com/Alex-Bulo/gamestock-bullorini.git )*
Instalar dependencias (npm install)
Inicializar proyecto *(npm start)*

