window.addEventListener('DOMContentLoaded',navigator,false)
window.addEventListener('hashchange',navigator,false)
const blogPages = document.querySelector('.blog-pages')

containerDog.classList.add('inactive')
containerCat.classList.add('inactive')
containerPeluqueria.classList.add('inactive')
blogPages.classList.add('inactive')
containerPrivacidad.classList.add('inactive')
containerServicio.classList.add('inactive')
containerPolitica.classList.add('inactive')
containerDevoluciones.classList.add('inactive')
productosNavegacion.classList.add('inactive')

const valueNavegacion = imputNavegacion.value.toLowerCase();

btnInicio.addEventListener('click', function () {
  inicioHash()
  navigator()
});
btnDog.addEventListener('click', function () {
  dogHash()
  navigator()
});
btnCat.addEventListener('click', function () {
  catHash()
  navigator()
});
btnNavegacion.addEventListener('click', function () {
  searchHash()
  navigator()
})
btnPeluqueria.addEventListener('click', function () {
  peluqueriaHash()
  navigator()
})
btnBlog.addEventListener('click', function () {
  blogHash()
  navigator()
});
btnPrivacidad.addEventListener('click', function () {
  privacidadHash()
  navigator()
});
btnServicio.addEventListener('click', function () {
  servicioHash()
  navigator()
});
btnEnvio.addEventListener('click', function () {
  envioHash()
  navigator()
});
btnDevoluciones.addEventListener('click', function () {
  devolucionesHash()
  navigator()
});


function inicioHash () {
  window.location.hash = '#home' 
}
function dogHash () {
  window.location.hash = '#dog' 
}
function catHash () {
  window.location.hash = '#cat' 
}
function searchHash() {
  window.location.hash = '#search=' + valueNavegacion
}
function peluqueriaHash () {
  window.location.hash = '#peluqueria'
}
function blogHash () {
  window.location.hash = '#blog'
}
function privacidadHash () {
  window.location.hash = '#privacidad' 
  document.documentElement.scrollTop = 0;
}
function servicioHash () {
  window.location.hash = '#servicio' 
  document.documentElement.scrollTop = 0;
}
function envioHash () {
  window.location.hash = '#envio' 
  document.documentElement.scrollTop = 0;
}
function devolucionesHash () {
  window.location.hash = '#devoluciones' 
  document.documentElement.scrollTop = 0;
}

function navigator () {
  if (window.location.hash.startsWith('#dog')){
    dogProducs()
  } else if (window.location.hash.startsWith('#cat')) {
    catProducs()
} else if (window.location.hash.startsWith('#home')) {
    inicioPages()
} else if (window.location.hash.startsWith('#search')){
    searchPages()
} else if (window.location.hash.startsWith('#peluqueria')) {
    peluqueriaPages()
} else if (window.location.hash.startsWith('#blog')) {
    blogPage()
} else if (window.location.hash.startsWith('#privacidad')) {
    privacidadPages()
} else if (window.location.hash.startsWith('#servicio')) {
    servicioPages()
} else if (window.location.hash.startsWith('#envio')) {
    envioPages()
} else if (window.location.hash.startsWith('#devoluciones')) {
    devolucionesPages()
} else {
   return window.location.hash = inicioPages()
}
}
function inicioPages () {
  mainPages.classList.remove('inactive')
  containerDog.classList.add('inactive')
  containerCat.classList.add('inactive')
  containerPeluqueria.classList.add('inactive')
  productosNavegacion.classList.add('inactive')
  blogPages.classList.add('inactive')
  containerPrivacidad.classList.add('inactive')
  containerServicio.classList.add('inactive')
  containerPolitica.classList.add('inactive')
  containerDevoluciones.classList.add('inactive')
}

function dogProducs () {
  renderizacionCard(producListDog,containerDog)
  containerDog.classList.remove('inactive')
  mainPages.classList.add('inactive')
  containerCat.classList.add('inactive')
  containerPeluqueria.classList.add('inactive')
  productosNavegacion.classList.add('inactive')
  blogPages.classList.add('inactive')
  containerPrivacidad.classList.add('inactive')
  containerServicio.classList.add('inactive')
  containerPolitica.classList.add('inactive')
  containerDevoluciones.classList.add('inactive')
}

function catProducs () {
  renderizacionCard(producListCat,containerCat)
  containerCat.classList.remove('inactive')
  mainPages.classList.add('inactive')
  containerDog.classList.add('inactive')
  containerPeluqueria.classList.add('inactive')
  productosNavegacion.classList.add('inactive')
  blogPages.classList.add('inactive')
  containerPrivacidad.classList.add('inactive')
  containerServicio.classList.add('inactive')
  containerPolitica.classList.add('inactive')
  containerDevoluciones.classList.add('inactive')
}

function searchPages () {
  searchProducto()
  productosNavegacion.classList.remove('inactive')
  mainPages.classList.add('inactive')
  containerDog.classList.add('inactive')
  containerCat.classList.add('inactive')
  containerPeluqueria.classList.add('inactive')
  blogPages.classList.add('inactive')
  containerPrivacidad.classList.add('inactive')
  containerServicio.classList.add('inactive')
  containerPolitica.classList.add('inactive')
  containerDevoluciones.classList.add('inactive')
}

function peluqueriaPages () {
  containerPeluqueria.classList.remove('inactive')
  mainPages.classList.add('inactive')
  containerDog.classList.add('inactive')
  containerCat.classList.add('inactive')
  productosNavegacion.classList.add('inactive')
  blogPages.classList.add('inactive')
  containerPrivacidad.classList.add('inactive')
  containerServicio.classList.add('inactive')
  containerPolitica.classList.add('inactive')
  containerDevoluciones.classList.add('inactive')
}

function blogPage () {
  blogPages.classList.remove('inactive')
  mainPages.classList.add('inactive')
  containerDog.classList.add('inactive')
  containerCat.classList.add('inactive')
  containerPeluqueria.classList.add('inactive')
  productosNavegacion.classList.add('inactive')
  containerPrivacidad.classList.add('inactive')
  containerServicio.classList.add('inactive')
  containerPolitica.classList.add('inactive')
  containerDevoluciones.classList.add('inactive')
}

function privacidadPages () {
  containerPrivacidad.classList.remove('inactive')
  mainPages.classList.add('inactive')
  containerDog.classList.add('inactive')
  containerCat.classList.add('inactive')
  containerPeluqueria.classList.add('inactive')
  productosNavegacion.classList.add('inactive')
  blogPages.classList.add('inactive')
  containerServicio.classList.add('inactive')
  containerPolitica.classList.add('inactive')
  containerDevoluciones.classList.add('inactive')
  
}

function servicioPages () {
  containerServicio.classList.remove('inactive')
  mainPages.classList.add('inactive')
  containerDog.classList.add('inactive')
  containerCat.classList.add('inactive')
  containerPeluqueria.classList.add('inactive')
  productosNavegacion.classList.add('inactive')
  blogPages.classList.add('inactive')
  containerPrivacidad.classList.add('inactive')
  containerPolitica.classList.add('inactive')
  containerDevoluciones.classList.add('inactive')
  
}

function envioPages () {
  containerPolitica.classList.remove('inactive')
  mainPages.classList.add('inactive')
  containerDog.classList.add('inactive')
  containerCat.classList.add('inactive')
  containerPeluqueria.classList.add('inactive')
  productosNavegacion.classList.add('inactive')
  blogPages.classList.add('inactive')
  containerPrivacidad.classList.add('inactive')
  containerServicio.classList.add('inactive')
  containerDevoluciones.classList.add('inactive')
  
}

function devolucionesPages () {
  containerDevoluciones.classList.remove('inactive')
  mainPages.classList.add('inactive')
  containerDog.classList.add('inactive')
  containerCat.classList.add('inactive')
  containerPeluqueria.classList.add('inactive')
  productosNavegacion.classList.add('inactive')
  blogPages.classList.add('inactive')
  containerPrivacidad.classList.add('inactive')
  containerServicio.classList.add('inactive')
  containerPolitica.classList.add('inactive')
  
}


