import { useState, useEffect } from 'react'
import Contact from './Contact'
import axios from 'axios'


function App () {

  let [contacts, setContacts] = useState([])

  const getListsData = async () => {
    await axios.get('https://solelymockbackend.onrender.com/lists').then(async (response) => {
      const { code, data } = response.data
      if (code == 200) {
        contacts = [...data]
        setContacts(contacts)
      }
    }).catch((error) => {
      console.error(error)
    })
  }

  useEffect(() => {
    getListsData()
  }, [])

  return (
    <div className="App">
      <div className='boxes'>
        {
          contacts.map((contact, index) => (
            <Contact key={index} contact={contact} />
          ))
        }
      </div>
    </div>
  )
}

export default App
