import React,{useState} from 'react'
import { List } from './List'
import { Info } from './Info'

export const App = (props) => {
  const [people,setPeople] = useState([
    {
      id: 1,
      name: 'Mokshith',
      age: 18,
      image:
        'https://res.cloudinary.com/dmvjzhqyr/image/upload/v1678617096/Birthday_remiander/IMG_20230312_130150_evejxl.jpg',
    },
    {
      id: 2,
      name: 'Sreekar',
      age: 18,
      image:
        'https://res.cloudinary.com/dmvjzhqyr/image/upload/v1678616946/Birthday_remiander/sree_oc1oyr.jpg',
    },
    {
      id: 3,
      name: 'Vivek',
      age: 19,
      image:
        'https://res.cloudinary.com/dmvjzhqyr/image/upload/v1678616956/Birthday_remiander/viv_mjprrm.jpg',
    },
    {
      id: 4,
      name: 'Bhavya',
      age: 18,
      image:
        'https://res.cloudinary.com/dmvjzhqyr/image/upload/v1678616899/Birthday_remiander/20230310_121144_ltxocr.jpg',
    },
    {
      id: 5,
      name: 'Bhavana',
      age: 18,
      image:
        'https://res.cloudinary.com/dmvjzhqyr/image/upload/v1678616333/Birthday_remiander/20230310_121425_lnta8o.jpg',
    },
  ])
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Birthday Remainder</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
     <main>
      <section className='container'>
        <h3>{people.length} Bithdays today</h3>
        <List people={people} />
        <button onClick={()=> setPeople([])}>Clear All</button>
      </section>
     </main>
     <div>
      <Info name="BirthdayRemainder"/>
     </div>
    </div>
  )
}
export default App;

