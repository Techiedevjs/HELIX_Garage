const garage = document.querySelector('#garage');
const searchCars = document.querySelector('#search');
const all = document.querySelector('#all');
const favorites = document.querySelector('#favorites');
const electric = document.querySelector('#electric');
const sports = document.querySelector('#sports');
const pickup = document.querySelector('#pickup');
const muscle = document.querySelector('#muscle');
const crossovers = document.querySelector('#crossovers');
// const star = document.querySelector('.star');
const filters = [all, favorites, electric, sports, pickup, muscle, crossovers];

let garageData = [
    {
        carId:"1",
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        category: ["electric", "pickup"],
        imageUrl: 'images/chevrolet-camaro.svg'
    },
    {
        carId:"2",
        name: 'camry',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        category: ["sports"],
        imageUrl: 'images/chevrolet-camaro.svg'
    },
    {
        carId:"3",
        name: 'ford mustang',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        category: ["crossovers", "muscle"],
        imageUrl: 'images/chevrolet-camaro.svg'
    },
    {
        carId:"4",
        name: 'sedan',
        description: 'Some short description of this car',
        status: 'favorite',
        favorite: true,
        category: ["sports", "electric"],
        imageUrl: 'images/chevrolet-camaro.svg'
    },
    {
        carId:"5",
        name: 'bugatti',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        category: ["pickup", "muscle"],
        imageUrl: 'images/chevrolet-camaro.svg'
    },
    {
        carId:"6",
        name: 'tesla',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        legendary: true,
        category: ["crossovers", "muscle", "electric", "sports"],
        imageUrl: 'images/chevrolet-camaro.svg'
    },
    {
        carId:"7",
        name: 'mitsubishi',
        description: 'Some short description of this car',
        status: 'favorite',
        favorite: true,
        category:["sports", "crossovers"],
        imageUrl: 'images/chevrolet-camaro.svg'
    },
    {
        carId:"8",
        name: 'volkswagen beetle',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        category:["muscle", "electric"],
        imageUrl: 'images/chevrolet-camaro.svg'
    },
    {
        carId:"9",
        name: 'mercedes',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        category: ["crossovers", "electric"],
        imageUrl: 'images/chevrolet-camaro.svg'
    },
    {
        carId:"10",
        name: 'audi',
        description: 'Some short description of this car',
        status: 'favorite',
        favorite: true,
        category:["sports", "crossovers"],
        imageUrl: 'images/chevrolet-camaro.svg'
    },
    {
        carId:"11",
        name: 'kia',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        category:["muscle", "electric"],
        imageUrl: 'images/chevrolet-camaro.svg'
    },
    {
        carId:"12",
        name: 'porsche',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        category: ["crossovers", "electric"],
        imageUrl: 'images/chevrolet-camaro.svg'
    },
    {
        carId:"13",
        name: 'jetta',
        description: 'Some short description of this car',
        status: 'favorite',
        favorite: true,
        category:["sports", "crossovers"],
        imageUrl: 'images/chevrolet-camaro.svg'
    },
    {
        carId:"14",
        name: 'cadillac',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        category:["muscle", "electric"],
        imageUrl: 'images/chevrolet-camaro.svg'
    },
    {
        carId:"15",
        name: 'alfa romeo',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        category: ["crossovers", "electric"],
        imageUrl: 'images/chevrolet-camaro.svg'
    },
]

let currentfilter = "all";

filters.map((item) => {
    item.addEventListener('click', () => {
        item.classList.add('filteractive')
        const restFilters = filters.filter((filt) => filt !== item)
        restFilters.map((i) => i.classList.remove('filteractive'))
    })
})

electric.addEventListener('click', () => {
    currentfilter = 'electric';
    let data = garageData.filter((item) => item.category.includes('electric') )
    pushGarageCars(data)
})

sports.addEventListener('click', () => {
    currentfilter = 'sports';
    let data = garageData.filter((item) => item.category.includes('sports') )
    pushGarageCars(data)
})

pickup.addEventListener('click', () => {
    currentfilter = 'pickup';
    let data = garageData.filter((item) => item.category.includes('pickup') )
    pushGarageCars(data)
})

muscle.addEventListener('click', () => {
    currentfilter = 'muscle';
    let data = garageData.filter((item) => item.category.includes('muscle') )
    pushGarageCars(data)
})

crossovers.addEventListener('click', () => {
    currentfilter = 'crossovers';
    let data = garageData.filter((item) => item.category.includes('crossovers') )
    pushGarageCars(data)
})

favorites.addEventListener('click', () => {
    currentfilter = 'favorites';
    let data = garageData.filter((item) => item.favorite)
    pushGarageCars(data)
})

all.addEventListener('click', () => {
    currentfilter = 'all';
    pushGarageCars(garageData)
})

const applyCurrentFilter = () => {
    let data;
    if (currentfilter === 'all'){
        data = garageData;
    } else if ( currentfilter === 'favorites' ){
        data = garageData.filter((item) => item.favorite)
    } else {
        data = garageData.filter((item) => item.category.includes(currentfilter));
    }
    pushGarageCars(data);
};

const pushGarageCars = ( data ) => {
    garage.innerHTML = ''
    data.map((item) => {
        const { name, description, status, imageUrl, carId, favorite } = item;

        let image = 'star-normal.svg';
        let style = 'normal';
        if (favorite) { 
            image = 'star-favorite.svg'; 
            style = 'favorite'
        };
        if ( !favorite && status === 'select') image = 'star-select.svg';
        if ( status === 'select' ) style = 'select';

        // THE IMAGES DISPLAYED DEPENDS ON THE STATUS GIVEN DIRECTLY
        garage.innerHTML += `
            <section class="flexgapsmall cardetail ${style}" id=${carId} onclick="carClicked(event,${carId})">
                <img src="images/${image}" alt="star" class="star" onClick="toggleFavorite(event,${carId})">
                <div class="carbox"> 
                    <div class="rectangle"> </div>
                    <img src=${imageUrl} alt="white car" class="whitecar">
                </div>
                <div>
                    <h4 class="font600 carname">${name}</h4>
                    <p class="white65 description">${description}</p>
                    ${ status === 'select' ? `<button onClick="carSelect(${carId})"><img src="images/long-arrow-left.svg" alt="arrow left"> SELECT </button>` : ''}
                </div>
            </section>
        `
    })
}

const toggleFavorite = (event, id) => {
    event.stopPropagation()
    garageData = garageData.map((car) => {
        if ( String(id) === car.carId ) {
            return { ...car, favorite: !car.favorite};
        }
        else return {...car}
    })
    applyCurrentFilter();
}

const carClicked = (event, id) => {
    garageData = garageData.map((car) => {
        if ( String(id) === car.carId ) {
            return { ...car, status: 'select'};
        }
        else if ( car.status = 'select' ) {
            return { ...car, status : 'normal'}
        } return {...car}
    })
    applyCurrentFilter();
}

const carSelect = (id) => {
    console.log(id)
}

const filterCars = ( searchValue ) => {
    let filteredData;
    if ( currentfilter === 'all' ){
        filteredData = garageData;
    } else if ( currentfilter === 'favorites' ){
        filteredData = garageData.filter((item) => item.favorite);
    } else {
        filteredData = garageData.filter((item) => item.category.includes(currentfilter));
    }
    filteredData = filteredData.filter((car) => car.name.toLowerCase().includes(searchValue.toLowerCase()));
    pushGarageCars(filteredData);
}

document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
        alert('Escape pressed');
    }
});

document.addEventListener("mousedown", function(event) {
    if (event.button === 0) {
    //   console.log('left mouse button clicked')
    }
  });

searchCars.addEventListener('input', () => {
    filterCars(searchCars.value);
})

pushGarageCars(garageData);