[
    {
        "id_usuario":"1",
        "correo":"louis@gmail.com",
        "contraseña":"secret",
        "tipo_usuario": "premium",
        "cedula":"45564867",
        "primer_nombre":"Louis",
        "segundo_nombre":"Alonso",
        "primer_apellido":"Sanchez",
        "segundo_apellido":"Perez",
        "registrado":"S"
    },
    {
        "id_usuario":"2",
        "correo":"alberto_27@gmail.es",
        "contraseña":"secret",
        "tipo_usuario": "premium",
        "cedula":"45684684",
        "primer_nombre":"Alberto",
        "segundo_nombre":"Jose",
        "primer_apellido":"Sosa",
        "segundo_apellido":"Romero",
        "registrado":"S"
    },
        
    {
        "id_usuario":"3",
        "correo":"albany_lovers17@gmail.com",
        "contraseña":"secret",
        "tipo_usuario": "premium",
        "cedula":"8287979",
        "primer_nombre":"Albany",
        "segundo_nombre":"Lorena",
        "primer_apellido":"Sierra",
        "segundo_apellido":"Mendoza",
        "registrado":"S"
    },
        
    {
        "id_usuario":"4",
        "correo":"johana_lacoutir_01@hotmail.com",
        "contraseña":"secret",
        "tipo_usuario": "premium",
        "cedula":"817897879",
        "primer_nombre":"Johana",
        "segundo_nombre":"Kitty",
        "primer_apellido":"Lacoutir",
        "segundo_apellido":"Anderson",
        "registrado":"S"
    },
    {
        "id_usuario":"5",
        "correo":"samy_11@hotmail.com",
        "contraseña":"secret",
        "tipo_usuario": "premium",
        "cedula":"11897987",
        "primer_nombre":"Sandra",
        "segundo_nombre":"Patricia",
        "primer_apellido":"Lizarazo",
        "segundo_apellido":"Peña",
        "registrado":"S"
    },
       
    {
        "id_usuario":"6",
        "correo":"MarioRLSC@hotmail.com",
        "contraseña":"secret",
        "tipo_usuario": "premium",
        "cedula":"789897271",
        "primer_nombre":"Mario",
        "segundo_nombre":"Andres",
        "primer_apellido":"Lopez",
        "segundo_apellido":"Carvajal",
        "registrado":"S"
    }     
        
]
   



INSERT INTO usuarios (correo, contraseña, tipo_usuario, cedula, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido,registrado )
   
    VALUES    
    (  'louis@gmail.com', 'secret', 'premium', 45564867, 'Louis', 'Alonso', 'Sanchez', 'Perez' ),
    
    (  'alberto_27@gmail.es', 'secret', 'premium', 45684684, 'Alberto', 'Jose', 'Sosa', 'Romero' ),
    
    (  'albany_lovers17@gmail.com', secret, 'premium', 8287979, 'Albany', 'Lorena', 'Sierra', 'Mendoza', ),
    
    (  'johana_lacoutir_01@hotmail.com', 'secret', 'premium', 817897879, 'Johana', 'Kitty', 'Lacoutir', 'Anderson'),
    
    (  'MarioRLSC@hotmail.com', 'secret', 'premium', 789897271, 'Mario', 'Andres', 'Lopez', 'Carvajal' );






    CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(60),
    lastname VARCHAR(60),
    email VARCHAR(60),
    identity_card integer
    );

    INSERT INTO users( name, lastname,email, identity_card)

    VALUES( 'Sara', 'Lopez', 'Sara@gmail.com', 986259 ),
    ( 'Luisa', 'Gomez Hurtado', 'Luisa_H@gmail.com', 934876),
    ( 'Andreina', 'Rincon', 'Andreina_92385@gmail.com', 9024713),
    ( 'Felipe', 'Castañeda', 'Flp0237@gmail.com', 8369387),
    ( 'Mario', 'Andretti', 'Mario@gmail.com', 1356457)



    CREATE TABLE products(
    sku VARCHAR(30) PRIMARY KEY,
    title VARCHAR(60),
    price numeric,
    description VARCHAR(250),
    category VARCHAR(60)   
    );


    INSERT INTO products( sku,title, price, description, category )

    VALUES( '348609vcfs', 'Bag revolution', 15,'Your perfect pack for everyday', 'mens clothing' ),

    ('758145ndsl', 'Mens T-Shirts', 27,'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.', 'mens clothing' ),

    ('896077ikpm', 'John  Chain Bracelet', 41, 'From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the oceans pearl.', 'jewelery' ),

    ('454164qnca', 'JSolid Gold Petite Micropave ', 21,'Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed.', 'jewelery' ),

    ('852793wztu', '2TB Elements Portable External Hard Drive - USB 3.0' , 64,' USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems. ', 'electronics' );







    CREATE TABLE products (
    product_no integer,
    name text,
    price numeric
);


INSERT INTO products (product_no, name, price) VALUES
    (1, 'Cheese', 9.99),
    (2, 'Bread', 1.99),
    (3, 'Milk', 2.99);