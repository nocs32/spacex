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
  background-size: contain;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.3);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50px;
  }
`
const TileHeading = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
  position: relative;
  z-index: 10;
`
const Status = styled.h5`
  font-size: 30px;
  font-weight: 700;
  position: relative;
  z-index: 10;
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
        backgroundImage: `url('${props.imageUrl}')`,
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
