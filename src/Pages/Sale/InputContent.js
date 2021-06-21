import { FaGasPump, 
    FaDirections, 
    FaUser,
    FaCar, 
    FaTshirt, 
    FaCity, 
    FaTv, 
    FaBicycle, 
    FaBookReader, 
    FaMobileAlt 
} from 'react-icons/fa'


export const inputs = [
    {name:'Brand', label:'Brand', type:'select', options:['Toyota', 'Hyunda', 'Marcidize'], col:6, icon:<FaCar />},
    {name:'Year', label:'Year', type:'number', col:6, icon:<FaGasPump />},
    {name:'Fuel', label:'Fuel', type:'select', options:['Petrol', 'Electric', 'Disel', 'LPG'], col:6, icon:<FaGasPump />},
    {name:'Transition', label:'Transition', type:'select', options:['Manual', 'Automatic'], col:6, icon:<FaGasPump />},
    {name:'KM Driven', label:'KM Driven', type:'number', col:6, icon:<FaDirections />},
    {name:'No Of Owners', label:'No Of Owners', type:'select', options:['1','2','3','4','5'], col:6, icon:<FaUser />},
]

export const mobile = [
    {name:'name', label:'Name', col:12},
    {name:'ram', label:'RAM', col:6},
    {name:'memory', label:'Memory', col:6},
]

export const bikes = [
    {name:'name', label:'Name', col:6},
    {name:'color', label:'Color', col:6},
]

export const fashion = [
    {name:'model', label:'model', col:12},
    {name:'color', label:'color', col:6},
    {name:'Size', label:'Size', col:6},
]

// books inputs
export const books = [
    {name:'author', label:'Author', col:12},
    {name:'title', label:'Title', col:6},
    {name:'isbn', label:'ISBN', col:6},
]

export const catgory = [
    {text:"Cars", icon:<FaCar className="sidebar-icon" />, category:'cars'},
    {text:"Furniture", icon:<FaCar className="sidebar-icon"/>, category:'furniture'},
    {text:"Bikes", icon:<FaBicycle className="sidebar-icon"/>, category:'bikes'},
    {text:"Mobile", icon:<FaMobileAlt className="sidebar-icon"/>, category:'mobile'},
    {text:"Properties", icon:<FaCity className="sidebar-icon"/>, category:'properties'},
    {text:"Electronic", icon:<FaTv className="sidebar-icon"/>, category:'electronic', type:[
        'Laptop',
        'Keybaord',
        'Test',
        'Fuck',
        'you',
    ]},
    {text:"Fasion", icon:<FaTshirt className="sidebar-icon"/>, category:'fashion'},
    {text:"Books", icon:<FaBookReader className="sidebar-icon" />, category:'books'},
]


