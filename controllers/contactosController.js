
//importamos la conexion a la base de datos
const connection = require('../models/config');


const paginaContacto = (req, res) => {
    res.render('contacto', {
        style: 'contacto.css'
    });
}


//Cargar datos en la database
const paginaFormulario = (req, res) => {

    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = parseInt(req.body.telefono);
    const email = req.body.email;
    const consulta = req.body.consulta;

    const sqlQuery = `INSERT INTO PERSONA SET ?`

    const datoSql = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email,
        comentario: consulta
    }

    //Ejecuto una consulta a la base de datos con el método query
    connection.query(sqlQuery, datoSql, (err, result)=>{
        if (err) {
            console.log('Error al insertar los datos');
            console.log(err);
            res.send('Error al insertar los datos');
        } else {
            console.log('Datos insertados correctamente');
            console.log(result);
            //res.send('Datos insertados correctamente');
            res.render('datosCargados')
        }
    })

}

//Seleccionamos los datos desde la database
const paginaListar = (req, res) =>{

    const sqlQuery = `SELECT * FROM PERSONA`

    connection.query(sqlQuery, (err, result)=>{
        if (err) {
            console.log('Error al leer los datos');
            console.log(err);
            res.send('Error al leer los datos');
        } else {
            console.log('Lectura de datos correcta');
            console.log(result);
            //res.send('Datos insertados correctamente');
            res.render(
                'listarContactos',
            {
                style: 'clases.css',
                persona: result
            })
        }
    });
}

const paginaBorrar = (req, res) => {

    const id = req.body.idPersona;

    console.log(id);

    //const { idPersona } = req.body;
    //console.log(idPersona);

    //guardo la info del elemento a eliminar
    eliminado(id);

    const sqlQuery = `DELETE FROM persona WHERE idPersona = ${id}`;

    connection.query(sqlQuery, (err, result)=>{
        if (err) {
            console.log('Error al eliminar los datos');
            console.log(err);
            res.send('Error al eliminar los datos');
        }else{
            res.render('contacto', {
                style: 'contacto.css'
            });
        }
    });

}

//función para actualizar los datos del contacto
const paginaActualizar = (req, res) => {

    const id = req.body.idPersona;


    const sqlQuery = `SELECT * FROM PERSONA WHERE idPersona = ${id}`

    connection.query(sqlQuery, (err, result)=>{
        if (err) {
            console.log('Error al leer los datos');
            console.log(err);
            res.send('Error al leer los datos');
        } else {
            console.log('Lectura de datos correcta');
            console.log(result[0]);
            //res.send('Datos insertados correctamente');
            res.render('editarContactos',
            {
                style: 'clases.css',
                persona: result[0]
            })
        }
    });

}

const paginaActualizado = (req, res) => {

    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = parseInt(req.body.telefono);
    const email = req.body.email;
    const id = req.body.idPersona;

    console.log(id);

    const sqlQuery = `UPDATE PERSONA SET ? WHERE idPersona = ${id}`

    const datoSql = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email
    }

    //Ejecuto una consulta a la base de datos con el método query
    connection.query(sqlQuery, datoSql, (err, result)=>{
        if (err) {
            console.log('Error al insertar los datos');
            console.log(err);
            res.send('Error al insertar los datos');
        } else {
            console.log('Datos insertados correctamente');
            console.log(result);
            //res.send('Datos insertados correctamente');
            res.render('index')
        }
    })


}



const eliminado = (id) => {

    const sqlQuery = `SELECT * FROM PERSONA WHERE idPersona = ${id}`

    connection.query(sqlQuery, (err, result)=>{
        if (err) {
            console.log('Error al leer los datos');
            console.log(err);
            res.send('Error al leer los datos');
        } else {
            console.log('El usuario eliminado es: ');
            console.log('================================');
            console.log(result[0]);           
            console.log('================================');
        }
    });

    
}


module.exports = {
    paginaContacto,
    paginaFormulario,
    paginaListar,
    paginaBorrar,
    paginaActualizar,
    paginaActualizado
}