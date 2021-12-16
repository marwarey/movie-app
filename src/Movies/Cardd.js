import{Card,ListGroup,ListGroupItem}from 'react-bootstrap'
function Cardd ({el}){
    return (
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.posterUrl} />
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>
      {el.description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{el.id}</ListGroupItem>
    <ListGroupItem>{el.rate}</ListGroupItem>
    <ListGroupItem>{el.trailer}</ListGroupItem>
  </ListGroup>

</Card>
    )
}
export default Cardd