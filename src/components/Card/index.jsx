import { Container} from './styles'

export function Card({ title, icon}) {
  return (
    <Container>
      {icon}
      <p>{title}</p>
    </Container>
  )
}

