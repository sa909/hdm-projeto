CREATE DATABASE IF NOT EXISTS mendoza_kids
CHARACTER SET utf8mb4;

USE mendoza_kids;

CREATE TABLE IF NOT EXISTS tb_categoria (
    id INT PRIMARY KEY,
    nombre VARCHAR(80) NOT NULL,
    degradado_css VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS tb_contenido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    categoria_id INT NOT NULL,
    titulo VARCHAR(150) NOT NULL,
    texto_largo TEXT NOT NULL,
    imagen_url VARCHAR(255) NOT NULL,
    posicion VARCHAR(20) NOT NULL DEFAULT 'derecha',
    FOREIGN KEY (categoria_id) REFERENCES tb_categoria(id)
);

INSERT INTO tb_categoria (id, nombre, degradado_css) VALUES
(1, 'Historia', '#FFE683'),
(2, 'Geografía', '#94B9FF'),
(3, 'La Uva', '#BF86D2'),
(4, 'Cultura', '#E57070'),
(5, 'Naturaleza', '#9FC97B'),
(6, 'Lugares', '#FBA925');

INSERT INTO tb_contenido (categoria_id, titulo, texto_largo, imagen_url, posicion) VALUES
(1, 'La fundación de Mendoza', 'Pedro del Castillo fundó la ciudad el 2 de marzo de 1561.', 'historia/fundacion.jpg', 'derecha'),
(1, 'El terremoto de 1861', 'Un terremoto destruyó la ciudad y Mendoza tuvo que reconstruirse.', 'historia/terremoto1861.jpg', 'izquierda'),
(1, 'José de San Martín', 'San Martín organizó en Mendoza el Ejército de los Andes.', 'historia/sanmartin.jpg', 'derecha'),
(2, '¿Dónde está Mendoza?', 'Mendoza está en el oeste de Argentina, junto a los Andes y cerca de Chile.', 'geografia/mapamza.png', 'derecha'),
(3, 'La uva mendocina', 'En Mendoza se cultivan distintas variedades de uva. El Malbec es una de las más conocidas.', 'uva/uvatin.jpg', 'derecha'),
(3, 'La Fiesta de la Vendimia', 'La Vendimia celebra la cosecha de la uva y el trabajo de quienes la producen.', 'uva/vendimia.jfif', 'izquierda'),
(3, 'Del viñedo al vino', 'Las uvas cosechadas se usan para elaborar diferentes tipos de vino.', 'uva/vin.jpg', 'derecha'),
(4, 'Quino y Mafalda', 'Quino, creador de Mafalda, nació en la provincia de Mendoza.', 'cultura/quino.png', 'derecha'),
(4, 'Chanti', 'Chanti es un dibujante y autor mendocino conocido por sus historietas.', 'cultura/chanti.png', 'izquierda'),
(4, 'Las tortitas', 'Las tortitas son una comida muy popular para acompañar el mate en Mendoza.', 'cultura/tortitas.PNG', 'derecha'),
(5, 'La naturaleza de Mendoza', 'La cordillera de los Andes forma parte del paisaje mendocino.', 'naturaleza/parque.jpg', 'derecha'),
(5, 'El agua de deshielo', 'El agua que baja de la montaña ayuda a regar los cultivos y las ciudades.', 'naturaleza/agua.jpg', 'izquierda'),
(5, 'El clima mendocino', 'Mendoza tiene un clima seco y recibe poca lluvia durante el año.', 'naturaleza/clima.jpg', 'derecha'),
(6, 'Puente del Inca', 'Es una formación natural ubicada en la cordillera de los Andes.', 'lugares/puenteinca.jpg', 'derecha'),
(6, 'Parque General San Martín', 'Es uno de los espacios verdes más conocidos de la ciudad de Mendoza.', 'lugares/parquesm.jpg', 'izquierda'),
(6, 'Cerro de la Gloria', 'En este cerro está el monumento dedicado al Ejército de los Andes.', 'lugares/cerrogloria.jpg', 'derecha'),
(6, 'Manzano Histórico', 'Este lugar recuerda el regreso del general San Martín a Mendoza.', 'lugares/manzano.jfif', 'izquierda');
