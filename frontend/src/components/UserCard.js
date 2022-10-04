import Card from 'react-bootstrap/Card';

const UserCard = ({user}) => {
    const{name, age, username} = user;
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Text>
            Name: {name}
          </Card.Text>
          <Card.Text>
            Age: {age}
          </Card.Text>
          <Card.Text>
            Username: {username}
          </Card.Text>
        </Card.Body>
      </Card>
    );
}

export default UserCard;
