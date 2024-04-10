import { styled } from '../styles'

const Button = styled('button', {
  backgroundColor: '$GREEN300',
  color: 'white',
  padding: '10px 40px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$GREEN500'
  }
})

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Button>Texte</Button>
    </>
  )
}

