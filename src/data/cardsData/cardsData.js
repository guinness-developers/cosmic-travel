import marsImage from './productImages/mars.jpg';
import earthImage from './productImages/1.jpg';
import moonImage from './productImages/2.jpg';
import venusImage from './productImages/3.jpg';
import asteroidImage from './productImages/4.jpg';
import ceresImage from './productImages/5.jpg';
import saturnImage from './productImages/8.jpg';
import jupiterImage from './productImages/7.jpg';

let Destinations = [
  {
    tripTitle: 'Trip around Earth',
    image: earthImage,
    description: 'Only a select few men and women have looked at Earth from space firsthand. From that exceptional viewpoint they have marveled at both the beauty and the fragility of our planet. The rest of us rely on images made by astronauts’ cameras and the satellites circling the globe ― and, from deeper space, by robotic missions looking back across the solar system. Now its your turn.'
  },
  {
    tripTitle: 'Trip to the Moon',
    image: moonImage,
    description: 'The physical exploration of the Moon began when Luna 2, a space probe launched by the Soviet Union, made an impact on the surface of the Moon on September 14, 1959. ... NASAs Apollo program was the first, and to date only, mission to successfully land humans on the Moon, which it did six times. Now its your turn.'
  },
  {
    tripTitle: 'Trip to Mars',
    image: marsImage,
    description: 'The planet Mars has been explored remotely by spacecraft. Probes sent from Earth, beginning in the late 20th century, have yielded a large increase in knowledge about the Martian system, focused primarily on understanding its geology and habitability potential. Now its time for humans to visit the red planet. Be among the first to achieve this historical step.'
  },
  {
    tripTitle: 'Trip to Venus',
    image: venusImage,
    description: 'It wasn’t until the 1960s that we really started to explore Venus. Powerful Earth-based radars pierced the clouds to provide us with our first topographical data on the planet’s size, surface relief and craters. Venus was the first planet to be visited by spacecraft, with the launch of the Mariner 2 probe in 1962. Between then and 1989, some 20 probes—including Mariner, Pioneer Venus, Venera and Vega—passed, orbited and even landed on the surface of Venus. The time has come for you to visit the yellow planet. Hop on board!'
  },
  {
    tripTitle: 'Trip to the Asteroid Belt',
    image: asteroidImage,
    description: 'The asteroid belt is the circumstellar disc in the Solar System located roughly between the orbits of the planets Mars and Jupiter. It is occupied by numerous irregularly shaped bodies called asteroids or minor planets. The first spacecraft to traverse the asteroid belt was Pioneer 10, which entered the region on 16 July 1972. At the time there was some concern that the debris in the belt would pose a hazard to the spacecraft, but it has since been safely traversed by 12 spacecrafts without incident.'
  },
  {
    tripTitle: 'Trip to Ceres',
    image: ceresImage,
    description: 'Ceres is a good example of how challenging it can be to categorize bodies in our solar system. When Giuseppe Piazzi first spotted it in 1801, he assumed Ceres was the "missing" planet between Mars and Jupiter. Within a few years, Pallas, Juno and Vesta were also discovered in the region, and they too were called planets. Starting in the 1840s, astronomers discussed reclassifying the increasing number of bodies in this area, since they didnt quite fit the definition of a planet.'
  },
  {
    tripTitle: 'Trip to Saturn',
    image: saturnImage,
    description: 'The exploration of Saturn has been solely performed by crewless probes. Three missions were flybys, which formed an extended foundation of knowledge about the system. The Cassini–Huygens spacecraft, launched in 1997, was in orbit from 2004 to 2017.'
  },
  {
    tripTitle: 'Trip to Jupiter',
    image: jupiterImage,
    description: 'The exploration of Jupiter has been conducted via close observations by automated spacecraft. It began with the arrival of Pioneer 10 into the Jovian system in 1973, and, as of 2016, has continued with eight further spacecraft missions. ... Ulysses further studied Jupiters magnetosphere in 1992 and then again in 2000.'
  }
];

export default Destinations;
