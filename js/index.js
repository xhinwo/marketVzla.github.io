window.addEventListener('DOMContentLoaded',navigator,false)
window.addEventListener('hashchange',navigator,false)

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
function privacidadHash () {
  window.location.hash = '#privacidad' 
}
function servicioHash () {
  window.location.hash = '#servicio' 
}
function envioHash () {
  window.location.hash = '#envio' 
}
function devolucionesHash () {
  window.location.hash = '#devoluciones' 
}

function navigator () {
  if (window.location.hash.startsWith('#dog')){
    dogProducs()
  } else if (window.location.hash.startsWith('#cat')) {
    catProducs()
} else if (window.location.hash.startsWith('#home')) {
    inicioPages()
} else if (window.location.hash.startsWith('#privacidad')) {
    privacidadPages()
} else if (window.location.hash.startsWith('#servicio')) {
    servicioPages()
} else if (window.location.hash.startsWith('#envio')) {
    envioPages()
} else if (window.location.hash.startsWith('#devoluciones')) {
    devolucionesPages()
} else { window.location.hash === '' 
 
   }
}

function inicioPages () {
  containerPrivacidad.classList.add('inactive')
  containerServicio.classList.add('inactive')
  containerPolitica.classList.add('inactive')
  containerDevoluciones.classList.add('inactive')
  containerCat.classList.add('inactive')
  containerDog.classList.add('inactive')
  mainPages.classList.remove('inactive')
}

function dogProducs () {
  renderizacionCardDog(producListDog)
  containerCat.classList.add('inactive')
  mainPages.classList.add('inactive')
  containerDog.classList.remove('inactive')
  containerPrivacidad.classList.add('inactive')
  containerServicio.classList.add('inactive')
  containerPolitica.classList.add('inactive')
  containerDevoluciones.classList.add('inactive')
}

function catProducs () {
  renderizacionCardCat(producListCat)
  containerCat.classList.remove('inactive')
  containerDog.classList.add('inactive')
  mainPages.classList.add('inactive')
  containerPrivacidad.classList.add('inactive')
  containerServicio.classList.add('inactive')
  containerPolitica.classList.add('inactive')
  containerDevoluciones.classList.add('inactive')
}

function privacidadPages () {
  containerPrivacidad.classList.remove('inactive')
  containerCat.classList.add('inactive')
  mainPages.classList.add('inactive')
  containerDog.classList.add('inactive')
  containerServicio.classList.add('inactive')
  containerPolitica.classList.add('inactive')
  containerDevoluciones.classList.add('inactive')
}

function servicioPages () {
  containerServicio.classList.remove('inactive')
  containerCat.classList.add('inactive')
  mainPages.classList.add('inactive')
  containerDog.classList.add('inactive')
  containerPrivacidad.classList.add('inactive')
  containerPolitica.classList.add('inactive')
  containerDevoluciones.classList.add('inactive')
}

function envioPages () {
  containerPolitica.classList.remove('inactive')
  containerCat.classList.add('inactive')
  mainPages.classList.add('inactive')
  containerDog.classList.add('inactive')
  containerPrivacidad.classList.add('inactive')
  containerServicio.classList.add('inactive')
  containerDevoluciones.classList.add('inactive')
}

function devolucionesPages () {
  containerDevoluciones.classList.remove('inactive')
  containerCat.classList.add('inactive')
  mainPages.classList.add('inactive')
  containerDog.classList.add('inactive')
  containerPrivacidad.classList.add('inactive')
  containerServicio.classList.add('inactive')
  containerPolitica.classList.add('inactive')
}

