const inquirer = require('inquirer');
const productos = [
    { id: 1, nombre: 'Hamburguesa', precio: 120 },
    {id: 2, nombre: 'Pizza', precio: 150 },
    {id: 3, nombre: 'Ensalada', precio: 100 }
    {id: 4, nombre 'Refresco', precio: 30 }
]

const { Agregar, Eliminar, Editar, Listar};

async function mostrarMenu() {
    const { accion } = await inquirer.prompt([
        {
            type: 'list',
            name: 'accion',
            message: 'Seleccione una acción:',
            choices: [
                'Agregar producto',
                'Eliminar producto',
                'Editar producto',
                'Listar productos',
                'Salir'
            ]
        }
    ]);

    switch (accion) {
        case 'Agregar producto':
            await agregarProducto();
            break;
        case 'Eliminar producto':
            await eliminarProducto();
            break;
        case 'Editar producto':
            await editarProducto();
            break;
          case 'Listar producto':
            await ListarProducto();
            break;    
        case 'Salir':
            console.log('Saliendo del programa...');
            process.exit(0);
    }
}

async function agregarProducto() {
    const respuesta = await inquirer.prompt([
        {
            type: 'input',
            name: 'nombre',
            message: 'Ingrese el nombre del producto:'
        },
        {
            type: 'number',
            name: 'precio',
            message: 'Ingrese el precio del producto:'
        }
    ]);

    Agregar(respuesta.nombre, respuesta.precio);
    await mostrarMenu();
}

async function eliminarProducto() {
    const respuesta = await inquirer.prompt([
        {
            type: 'number',
            name: 'id',
            message: 'Ingrese el ID del producto a eliminar:'
        }
    ]);

    Eliminar(respuesta.id);
    await mostrarMenu();
}

async function editarProducto() {
    const respuesta = await inquirer.prompt([
        {
            type: 'number',
            name: 'id',
            message: 'Ingrese el ID del producto a editar:'
        },
        {
            type: 'input',
            name: 'nombre',
            message: 'Ingrese el nuevo nombre del producto:'
        },
        {
            type: 'number',
            name: 'precio',
            message: 'Ingrese el nuevo precio del producto:'
        }
    ]);

    
async function ListarProducto() {



}



    Editar(respuesta.id, respuesta.nombre, respuesta.precio);
    await mostrarMenu();
}








