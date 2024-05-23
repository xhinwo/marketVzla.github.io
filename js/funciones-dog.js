    // funcion de tarjetas de perros
    
    function renderizacionCard (arr,container) {
        containerDog.innerHTML = ''
        containerCat.innerHTML = ''
        for ( const product of arr) {
            
    const productCard = document.createElement('section')
    productCard.classList.add('productos-card')
    container.appendChild(productCard)
                
    const productDiv = document.createElement('div')
    const productImg = document.createElement('img')
    productImg.setAttribute('src',product.imagen)
    productImg.setAttribute('alt',product.informacion)
    productDiv.appendChild(productImg)
            
    const productName = document.createElement('p')
    productName.innerText = product.name

    const productInfoDiv = document.createElement('div')
    productInfoDiv.classList.add('informacion-card')
    const productInfo = document.createElement('p')
    productInfo.classList.add('informacion-p-1')
    productInfo.innerText = product.informacion
    productInfoDiv.appendChild(productInfo)

    const productPriceDiv = document.createElement('div')
    productPriceDiv.classList.add('informacion-p-2')
    const productPrice = document.createElement('p')
    productPrice.innerText = '$' + product.precio
    const buttonCard = document.createElement('button')
    buttonCard.classList.add('button-card')
    buttonCard.innerText = product.boton
    productPriceDiv.appendChild(productPrice)
    productPriceDiv.appendChild(buttonCard)

    productCard.appendChild(productDiv)
    productCard.appendChild(productName)
    productCard.appendChild(productInfoDiv)
    productCard.appendChild(productPriceDiv)

}}

// productos de perro

const producListDog = []
producListDog.push ({
    imagen: "./img/producto-dog-1.png",
    name: 'Nath',
    informacion: 'adulto Medium sabor pollo y arroz integral',
    precio: 33.999,
    boton: 'Comprar'
})
producListDog.push ({
    imagen: "./img/producto-dog-2.png",
    name: 'Nath',
    informacion: 'Puppy Medium Maxi pollo y arroz integral',
    precio: 23.999,
    boton: 'Comprar'
})
producListDog.push ({
    imagen: "./img/producto-dog-3.png",
    name: 'Nath',
    informacion: 'Puppy Mini sabor pollo y arroz integral',
    precio: 24.999,
    boton: 'Comprar'
})
producListDog.push ({
    imagen: "./img/producto-dog-4.png",
    name: 'Bravery',
    informacion: 'Chicken Adult alimento para perro',
    precio: 19.990,
    boton: 'Comprar'
})
producListDog.push ({
    imagen: "./img/producto-dog-5.png",
    name: 'Royal Canin',
    informacion: 'adulto Mini Adult alimento para perro',
    precio: 22.999,
    boton: 'Comprar'
})
producListDog.push ({
    imagen: "./img/producto-dog-6.png",
    name: 'Bravery',
    informacion: 'Salmon Adult alimento para perro',
    precio: 43.999,
    boton: 'Comprar'
})
producListDog.push ({
    imagen: "./img/producto-dog-7.png",
    name: 'Bravery',
    informacion: 'Chicken Mini Adult alimento para perro',
    precio: 32.999,
    boton: 'Comprar'
})
producListDog.push ({
    imagen: "./img/producto-dog-8.png",
    name: 'Royal Canin',
    informacion: 'adulto Mini Adult alimento para perro',
    precio: 29.999,
    boton: 'Comprar'
})
producListDog.push ({
    imagen: "./img/producto-dog-9.png",
    name: 'Bravery',
    informacion: 'Pork Adult alimento para perro',
    precio: 24.999,
    boton: 'Comprar'
})
producListDog.push ({
    imagen: "./img/producto-dog-10.png",
    name: 'Bravery',
    informacion: 'Lamb Adult Large/Medium Breeds',
    precio: 21.999,
    boton: 'Comprar'
})
producListDog.push ({
    imagen: "./img/producto-dog-11.png",
    name: 'Belcando',
    informacion: 'Finest Croc alimento para perro',
    precio: 26.999,
    boton: 'Comprar'
})
producListDog.push ({
    imagen: "./img/producto-dog-12.png",
    name: 'Fit Formula',
    informacion: 'Adulto Razas Pequeñas alimento',
    precio: 31.999,
    boton: 'Comprar'
})
producListDog.push ({
    imagen: "./img/producto-dog-13.png",
    name: 'Belcando',
    informacion: 'Cerdo iberico y arroz 12.5 KG alimento',
    precio: 30.999,
    boton: 'Comprar'
})
producListDog.push ({
    imagen: "./img/producto-dog-14.png",
    name: 'Royal Canin',
    informacion: 'Adulto maxi adult 15 KG alimento',
    precio: 21.999,
    boton: 'Comprar'
})
producListDog.push ({
    imagen: "./img/producto-dog-15.png",
    name: 'Bravery',
    informacion: 'Pork Mini Adult alimento para perro',
    precio: 27.999,
    boton: 'Comprar'
})
producListDog.push ({
    imagen: "./img/producto-dog-16.png",
    name: 'Fit Formula',
    informacion: 'Senior razas pequeñas 10 KG alimento',
    precio: 25.999,
    boton: 'Comprar'
})
producListDog.push ({
    imagen: "./img/producto-dog-17.png",
    name: 'Acana',
    informacion: 'Singles Pork & Squash alimento para perro',
    precio: 18.999,
    boton: 'Comprar'
})
producListDog.push ({
    imagen: "./img/producto-dog-18.png",
    name: 'Fit Formula',
    informacion: 'Senior 20 KG alimento para perro',
    precio: 22.999,
    boton: 'Comprar'
})
producListDog.push ({
    imagen: "./img/producto-dog-19.png",
    name: 'Taste Of The Wild',
    informacion: 'Prey Formula Angus Perro alimento',
    precio: 27.999,
    boton: 'Comprar'
})
producListDog.push ({
    imagen: "./img/producto-dog-20.png",
    name: 'Taste Of The Wild',
    informacion: 'High Prairie alimento para perro',
    precio: 21.999,
    boton: 'Comprar'
})
producListDog.push ({
    imagen: "./img/producto-dog-21.png",
    name: 'Belcando',
    informacion: 'Puppy Gravy alimento para perro',
    precio: 20.999,
    boton: 'Comprar'
})
producListDog.push ({
    imagen: "./img/producto-dog-22.png",
    name: 'Belcando',
    informacion: 'Adult Dinner alimento para perro',
    precio: 19.999,
    boton: 'Comprar'
})
producListDog.push ({
    imagen: "./img/producto-dog-23.png",
    name: 'Bravery',
    informacion: 'Salmon Mini Adult alimento para perro',
    precio: 19.999,
    boton: 'Comprar'
})
producListDog.push ({
    imagen: "./img/producto-dog-24.png",
    name: 'Taste Of The Wild',
    informacion: 'Southwest Canyon alimento',
    precio: 18.999,
    boton: 'Comprar'
})

// productos de gato

const producListCat = []
producListCat.push ({
    imagen: "./img/producto-cat-1.png",
    name: 'Nath',
    informacion: 'Adulto sabor pollo y arroz alimento',
    precio: 21.999,
    boton: 'Comprar'
})
producListCat.push ({
    imagen: "./img/producto-cat-2.png",
    name: 'Fit Formula',
    informacion: 'Gato Adulto alimento para gato',
    precio: 23.999,
    boton: 'Comprar'
})
producListCat.push ({
    imagen: "./img/producto-cat-3.png",
    name: 'Royal Canin',
    informacion: 'Adulto Indoor alimento para gato',
    precio: 19.999,
    boton: 'Comprar'
})
producListCat.push ({
    imagen: "./img/producto-cat-4.png",
    name: 'Bravery',
    informacion: 'Chicken Adult Cat alimento para gato',
    precio: 18.999,
    boton: 'Comprar'
})
producListCat.push ({
    imagen: "./img/producto-cat-5.png",
    name: 'Bravery',
    informacion: 'Salmon Adult Cat alimento para gato',
    precio: 17.999,
    boton: 'Comprar'
})
producListCat.push ({
    imagen: "./img/producto-cat-6.png",
    name: 'Royal Canin',
    informacion: 'Adulto Indoor alimento para gato',
    precio: 16.999,
    boton: 'Comprar'
})
producListCat.push ({
    imagen: "./img/producto-cat-7.png",
    name: 'Leonardo',
    informacion: 'Adult Duck alimento para gato',
    precio: 19.999,
    boton: 'Comprar'
})
producListCat.push ({
    imagen: "./img/producto-cat-8.png",
    name: 'Leonardo',
    informacion: 'Adult Light alimento para gato',
    precio: 21.999,
    boton: 'Comprar'
})
producListCat.push ({
    imagen: "./img/producto-cat-9.png",
    name: 'Taste Of The Wild',
    informacion: 'Low Land Creek alimento para gato',
    precio: 33.999,
    boton: 'Comprar'
})
producListCat.push ({
    imagen: "./img/producto-cat-10.png",
    name: 'Royal Canin',
    informacion: 'Adulto Sensible alimento para gato',
    precio: 22.999,
    boton: 'Comprar'
})
producListCat.push ({
    imagen: "./img/producto-cat-11.png",
    name: 'Pro Plan',
    informacion: 'Adulto Cat alimento para gato',
    precio: 23.999,
    boton: 'Comprar'
})
producListCat.push ({
    imagen: "./img/producto-cat-12.png",
    name: 'Pro Plan',
    informacion: 'Urinary alimento para gato',
    precio: 13.999,
    boton: 'Comprar'
})
producListCat.push ({
    imagen: "./img/producto-cat-13.png",
    name: 'Pro Plan',
    informacion: 'Adulto Cat alimento para gato',
    precio: 14.999,
    boton: 'Comprar'
})
producListCat.push ({
    imagen: "./img/producto-cat-14.png",
    name: 'Bravery',
    informacion: 'Cat Chicken Adult Sterilized alimento',
    precio: 17.999,
    boton: 'Comprar'
})
producListCat.push ({
    imagen: "./img/producto-cat-15.png",
    name: 'Royal Canin',
    informacion: 'Adulto Exigent alimento para gato',
    precio: 19.999,
    boton: 'Comprar'
})
producListCat.push ({
    imagen: "./img/producto-cat-16.png",
    name: 'Hills',
    informacion: 'Feline adult indoor 1.58 KG alimento',
    precio: 16.999,
    boton: 'Comprar'
})
producListCat.push ({
    imagen: "./img/producto-cat-17.png",
    name: 'Hills',
    informacion: 'Feline Adult Hairball Control alimento',
    precio: 21.999,
    boton: 'Comprar'
})
producListCat.push ({
    imagen: "./img/producto-cat-18.png",
    name: 'Royal Canin',
    informacion: 'Adulto persian 1.5 KG alimento para gato',
    precio: 27.999,
    boton: 'Comprar'
})
producListCat.push ({
    imagen: "./img/producto-cat-19.png",
    name: 'Wellness Core',
    informacion: 'Sterilised Chicken & Turkey',
    precio: 20.999,
    boton: 'Comprar'
})
producListCat.push ({
    imagen: "./img/producto-cat-20.png",
    name: 'Wellness Core',
    informacion: 'Cat Ocean alimento para gato',
    precio: 17.999,
    boton: 'Comprar'
})
producListCat.push ({
    imagen: "./img/producto-cat-21.png",
    name: 'Hills',
    informacion: 'Feline Adult Light Dry alimento',
    precio: 19.999,
    boton: 'Comprar'
})
producListCat.push ({
    imagen: "./img/producto-cat-22.png",
    name: 'Royal Canin',
    informacion: 'Adulto weight control 1.5KG alimento para',
    precio: 27.999,
    boton: 'Comprar'
})
producListCat.push ({
    imagen: "./img/producto-cat-23.png",
    name: 'Wellness Core',
    informacion: 'Cat original 4 KG alimento',
    precio: 16.999,
    boton: 'Comprar'
})
producListCat.push ({
    imagen: "./img/producto-cat-24.png",
    name: 'Leonardo',
    informacion: 'Fresh duck 1.5 KG alimento para gato',
    precio: 29.999,
    boton: 'Comprar'
})
   

