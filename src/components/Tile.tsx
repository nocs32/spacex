import styled from 'styled-components'

const TileBox = styled.a`
  cursor: pointer;
  max-width: 266px;
  width: 100%;
  height: 266px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 50px;
  position: relative;
`
const TileHeading = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
`
const Status = styled.h5`
  font-size: 30px;
  font-weight: 700;
`

function Tile(props: {
  imageUrl: string
  link: string
  date: string
  success: boolean
}) {
  return (
    <TileBox
      style={{
        background: `no-repeat center linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${props.imageUrl}')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
      href={props.link}
      target='_blank'
      rel='noreferrer'
    >
      <TileHeading>{props.date}</TileHeading>
      <Status style={{ color: props.success ? 'green' : 'red' }}>
        {props.success ? 'Succeded' : 'Failed'}
      </Status>
    </TileBox>
  )
}
export default Tile
