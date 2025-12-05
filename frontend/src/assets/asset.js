import DE from './Image/flags/Property 1=DE.png'
import AE from './Image/flags/Property 1=AE.png'
import AU from './Image/flags/Property 1=AU.png'
import CN from './Image/flags/Property 1=CN.png'
import FR from './Image/flags/Property 1=FR.png'
import GB from './Image/flags/Property 1=GB.png'
import IT from './Image/flags/Property 1=IT.png'
import RU from './Image/flags/Property 1=RU.png'
import US from './Image/flags/Property 1=US.png'
import DK from './Image/flags/Property 1=DK.png'

import tech1 from './Image/tech/1.png'
import tech2 from './Image/tech/2.png'
import tech3 from './Image/tech/3.png'
import tech4 from './Image/tech/4.png'
import tech5 from './Image/tech/5.png'
import tech6 from './Image/tech/6.png'
import tech7 from './Image/tech/7.png'
import tech8 from './Image/tech/8.png'
import tech9 from './Image/tech/9.png'
import tech10 from './Image/tech/10.png'

import interior1 from './Image/interior/1.png'
import interior2 from './Image/interior/2.png'
import interior3 from './Image/interior/3.png'
import interior4 from './Image/interior/4.png'
import interior5 from './Image/interior/5.png'
import interior6 from './Image/interior/6.png'
import interior7 from './Image/interior/7.png'
import interior8 from './Image/interior/8.png'
import interior9 from './Image/interior/9.png'
import interior10 from './Image/interior/10.png'

const dealsAndOffers = [
    {
        image: tech8,
        category: "Smart watches",
        discount:25
    },
    {
        image: tech7,
        category: "Laptops",
        discount:15
    },
    {
        image: tech6,
        category: "GoPro cameras",
        discount:40
    },
    {
        image: tech5,
        category: "headphones",
        discount:25
    },
    {
        image: tech3,
        category: "Canon cameras",
        discount:25
    }
];

const categoryHomeAndOutdoor =[
    {
        name: "Soft chairs",
        image:interior2,
        description:"USD 19"
    },
    {
        name: "Sofa & chair",
        image:interior1,
        description:"USD 19"
    },,
    {
        name: "Kitchen dishes",
        image:interior3,
        description:"USD 19"
    },
    ,{
        name: "Smart watches",
        image:interior1,
        description:"USD 19"
    },
    ,{
        name: "Kitchen mixer",
        image:interior9,
        description:"USD 100"
    },
    ,{
        name: "Blenders",
        image:interior1,
        description:"USD 39"
    },
    ,{
        name: "Home appliance",
        image:interior10,
        description:"USD 19"
    },
    ,{
        name: "Coffee maker",
        image:interior8,
        description:"USD 19"
    },
]

const categoryElectronic =[
    {
        name: "Smart watches",
        image:tech8,
        description:"USD 19"
    },
    {
        name: "Cameras",
        image:tech6,
        description:"USD 89"
    },,
    {
        name: "Headphones",
        image:tech9,
        description:"USD 10"
    },
    ,{
        name: "Smart watches",
        image:tech8,
        description:"USD 90"
    },
    ,{
        name: "Gaming set",
        image:tech5,
        description:"USD 35"
    },
    ,{
        name: "Laptops & PC",
        image:tech7,
        description:"USD 39"
    },
    ,{
        name: "Smartphones",
        image:tech1,
        description:"USD 19"
    },
    ,{
        name: "Electric cattle",
        image:tech10,
        description:"USD 240"
    },
]
export {DE, AE, AU,CN, GB, IT, RU, US, DK,FR,dealsAndOffers,categoryHomeAndOutdoor,categoryElectronic};