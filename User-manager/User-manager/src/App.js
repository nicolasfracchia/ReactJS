import { useState } from 'react'
import Container from './components/Container'
import Card from './components/Card'
import UserForm from './components/UserForm'

function App() {

  const [users, setUsers] = useState([])

  const submit = user => {
    if(users.find((u) => u.email.includes(user.email)) === undefined){
      setUsers([
        ...users, 
        user
      ])
    }
  }

  return (
    <div style={{ marginTop: '15%'}}>
      <Container>
        <Card>
          <div style={{ padding: 20 }} >
            <UserForm submit={submit} />
          </div>
        </Card>
        <Card>
          <ul>
            {users.map(x => 
              <li key={x.email}>{`${x.name} ${x.lastname}: ${x.email}`}</li>
            )}
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App;