import {useState} from 'react'

const ListRender = () => {
    // 4- Renderização de lista
    const [list] = useState(["Matheus","Lunna", "Pamella"]);

    //5- Renderização de lista com key
    const [users, setUsers] = useState([
        {id: 1, name: "Jorge", age: 20},
        {id: 2, name: "Maria", age: 30},
        {id: 3, name: "Melissa", age: 22},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id))
    }

  return (
    <div>
        <div>   
            <ul>
                {/*Renderização de lista sem key*/}
                <h4>Lista sem key</h4>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>

        <div>
            {/*Renderização de lista com key*/}
            <ul>
                <h4>Lista com key</h4>
                {users.map((user)=>(
                    <li key={user.id}>{user.name} - {user.age} anos </li>
                ))}
                
            </ul>
        </div>
        <div>
            {/*6 - Previous state*/}
            <button onClick={deleteRandom} >Delete usuario aleatorio</button>
        </div>
    </div>
  )
}

export default ListRender