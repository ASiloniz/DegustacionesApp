# react-simple-online-shop
Simple online shop in React and Node.js

# How to Run
1. Clone this repository
2. `npm install`
3. In root folder run: `node api/server.js` for running the API
4. In root folder run: `yarn run dev-server` for running the app in localhost:8080

# Funcionamiento del App:
1. Crear usuario: Recordad que es obligatorio añadir una imagen en formato .png o .jpeg para que el usuario se cree de forma satisfactoria. El resto de campos obligatorios los he puesto como 'required' por tanto os lo pedirán cuando intentéis hacer el submit.

2. GALARDONES: Existen 3 posibles galardones:
    1. Si el usuario ha añadido <=3 degustaciones obtendrá el galardón de *Destapais Junior*
    2. Si el usuario ha añadido >3 degustaciones obtendrá el galardón de *Destapais Senior*
    3. Si el usuario ha añadido una bebida, obtendrá el galardón de *Destapais Drinker*
