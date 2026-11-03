const colores_cat = {
    inicio: '#866F9A', 
    historia: '#FFE683',
    geografia: '#94B9FF', 
    uva: '#BF86D2',
    cultura: '#E57070',
    naturaleza: '#9FC97B',
    lugares: '#FBA925'
};

class HeaderMendoza extends HTMLElement {
    connectedCallback() {
        const categoria = this.getAttribute('categoria') || 'inicio' ;

        const colorFondo = colores_cat [categoria] || colores_cat.inicio;

        this.style.setProperty('--color-base', colorFondo);

        this.innerHTML = `
            <header class="encabezado-sitio">
                <h1 class="titulo-principal">Mendoza</h1>
            </header>
        `;
    }
}
customElements.define('header-mendoza', HeaderMendoza);

class MenuPrincipal extends HTMLElement {
    connectedCallback() {
        const base = window.location.pathname.includes('/pages/')
        ? '../'
        : '';
        this.innerHTML = `
            <div class="botones-contenedor">
                <a href="${base}pages/historia.html"><button class="historia">Historia</button></a>
                <a href="${base}pages/geografia.html"><button class="geografia">Geografía</button></a>
                <a href="${base}pages/uva.html"><button class="uva">La Uva</button></a>
                <a href="${base}pages/cultura.html"><button class="cultura">Cultura</button></a>
                <a href="${base}pages/naturaleza.html"><button class="naturaleza">Naturaleza</button></a>
                <a href="${base}pages/lugares.html"><button class="lugares">Lugares Famosos</button></a>
            </div>
        `;
        this.marcarActivo(); 
    }
    marcarActivo() {
    const pagina = window.location.pathname; 
    const botones = this.querySelectorAll('button');
    botones.forEach(boton => {
      const link = boton.parentElement.getAttribute('href');
      if (pagina.endsWith(link)) {
        boton.classList.add('active');
      }
    });
  }
}
customElements.define('menu-mendoza', MenuPrincipal);

class BannerMendoza extends HTMLElement {
    connectedCallback() {
        const categoria = this.getAttribute('categoria') || 'inicio'
        const infoBanners = {
            inicio: {
                frase: '¡Hacé clic y comenzá a descubrir Mendoza!',
                colorInicio: '#C6BAD0',
                colorFin: '#B59CCC'
            }, 
            historia: {
                frase: '¿Listo para ir al pasado? ¡Explorá la antigua Mendoza!',
                colorInicio: '#FEE583',
                colorFin: '#E0C146'
            },
            geografia: {
                frase: '¡Mirá lo grande que es Mendoza!',
                colorInicio: '#C0D6FF',
                colorFin: '#A2C1FB'
            },
             uva: {
                frase: '¡Qué capa que es Mendoza!',
                colorInicio: '#E0BDEB',
                colorFin: '#BF86D2'
            },
            cultura: {
                frase: 'Mansas tradiciones, ¡Manso todo!',
                colorInicio: '#E2AFAF',
                colorFin: '#D97B7B'
            },
            naturaleza: {
                frase: '¡Mirá la provincia más linda del país!',
                colorInicio: '#C4E6A6',
                colorFin: '#A8D77F'
            },
            lugares: {
                frase: '¡Lo más destacado de nuestra provincia!',
                colorInicio: '#E9D3B1',
                colorFin: '#F6B345'
            },

        }
        const estilo = infoBanners[categoria] || infoBanners.inicio ; 
       document.documentElement.style.setProperty('--gradien-inicio', estilo.colorInicio);
       document.documentElement.style.setProperty('--gradien-fin', estilo.colorFin);

        this.innerHTML = `
            <div class="banner">
                <p class="banner-texto">${estilo.frase}</p>
            </div>
        `;
    }
}
    customElements.define('banner-mendoza', BannerMendoza);


class Tarjeta { 
    constructor(id, categoria_id, titulo, texto, imagen, degradado, posicion) {
        this.id = id;
        this.categoria_id = categoria_id;
        this.titulo = titulo;
        this.texto = texto;
        this.imagen = imagen;
        this.degradado = degradado;
        this.posicion = posicion; 
    }
    crear() {
        return `
        <div class="tarjeta-info">
            <div class="tarjeta-header" style="background: ${this.degradado};">
                <h2>${this.titulo}</h2>
            </div>
            <div class="tarjeta-body ${this.posicion}">
                <p>${this.texto}</p>
                <img src="../images/${this.imagen}" class="img-tarjeta">
            </div>
        </div>`;
    }
}

const contenidoLocal = {
    1: [
        ['La fundación de Mendoza', 'Pedro del Castillo fundó la ciudad el 2 de marzo de 1561.', 'historia/fundacion.jpg'],
        ['El terremoto de 1861', 'Un terremoto destruyó la ciudad y Mendoza tuvo que reconstruirse.', 'historia/terremoto1861.jpg'],
        ['José de San Martín', 'San Martín organizó en Mendoza el Ejército de los Andes.', 'historia/sanmartin.jpg']
    ],
    2: [
        ['¿Dónde está Mendoza?', 'Mendoza está en el oeste de Argentina, junto a los Andes y cerca de Chile.', 'geografia/mapamza.png']
    ],
    3: [
        ['La uva mendocina', 'En Mendoza se cultivan distintas variedades de uva. El Malbec es una de las más conocidas.', 'uva/uvatin.jpg'],
        ['La Fiesta de la Vendimia', 'La Vendimia celebra la cosecha de la uva y el trabajo de quienes la producen.', 'uva/vendimia.jfif'],
        ['Del viñedo al vino', 'Las uvas cosechadas se usan para elaborar diferentes tipos de vino.', 'uva/vin.jpg']
    ],
    4: [
        ['Quino y Mafalda', 'Quino, creador de Mafalda, nació en la provincia de Mendoza.', 'cultura/quino.png'],
        ['Chanti', 'Chanti es un dibujante y autor mendocino conocido por sus historietas.', 'cultura/chanti.png'],
        ['Las tortitas', 'Las tortitas son una comida muy popular para acompañar el mate en Mendoza.', 'cultura/tortitas.PNG']
    ],
    5: [
        ['La naturaleza de Mendoza', 'La cordillera de los Andes forma parte del paisaje mendocino.', 'naturaleza/parque.jpg'],
        ['El agua de deshielo', 'El agua que baja de la montaña ayuda a regar los cultivos y las ciudades.', 'naturaleza/agua.jpg'],
        ['El clima mendocino', 'Mendoza tiene un clima seco y recibe poca lluvia durante el año.', 'naturaleza/clima.jpg']
    ],
    6: [
        ['Puente del Inca', 'Es una formación natural ubicada en la cordillera de los Andes.', 'lugares/puenteinca.jpg'],
        ['Parque General San Martín', 'Es uno de los espacios verdes más conocidos de la ciudad de Mendoza.', 'lugares/parquesm.jpg'],
        ['Cerro de la Gloria', 'En este cerro está el monumento dedicado al Ejército de los Andes.', 'lugares/cerrogloria.jpg'],
        ['Manzano Histórico', 'Este lugar recuerda el regreso del general San Martín a Mendoza.', 'lugares/manzano.jfif']
    ]
};

function obtenerContenidoLocal(categoriaId) {
    const datos = contenidoLocal[categoriaId] || [];
    const colores = {1: '#FFE683', 2: '#94B9FF', 3: '#BF86D2', 4: '#E57070', 5: '#9FC97B', 6: '#FBA925'};
    const tarjetas = [];

    for (let i = 0; i < datos.length; i++) {
        const dato = datos[i];
        const posicion = i % 2 === 0 ? 'derecha' : 'izquierda';
        tarjetas.push(new Tarjeta(i + 1, categoriaId, dato[0], dato[1], dato[2], colores[categoriaId], posicion));
    }

    return tarjetas;
}

class ServicioApi {
    static BD_URL = 'http://localhost:3000/api'; 
    static async obtenerContenido(catId) { 
        try {
            const respuesta = await fetch(`${this.BD_URL}/contenido/${catId}`); 
            const datos = await respuesta.json();
            if (datos.length === 0) { return obtenerContenidoLocal(catId); }
            return datos.map(d => new Tarjeta(
                d.id, d.categoria_id, d.titulo, d.texto_largo, d.imagen_url, d.degradado_css, d.posicion
            )); 
        } catch (error) {
            console.error('Error:', error);
            return obtenerContenidoLocal(catId); 
        }
    } 
}

class FooterMendoza extends HTMLElement {
    connectedCallback () {
        const categoria = this.getAttribute('categoria') || 'inicio' ;

        const colorFondo = colores_cat [categoria] || colores_cat.inicio;

        this.style.setProperty('--color-base', colorFondo);

        this.innerHTML = `
            <footer class="footer-sitio">
                <p>¡Seguí explorando mendoza!</p>
                <a href="../index.html" class="btn-inicio">IR AL INICIO →</a>
            </footer>
        `;

        
    }
}

customElements.define('footer-mendoza', FooterMendoza);
