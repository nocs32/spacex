import { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import styled from 'styled-components'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Tile from './components/Tile'
import axios from 'axios'

interface ILaunch {
  date_local: string
  success: boolean
  links: any
  patch: any
  large: string
  article: string
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px;
`
const SearchBox = styled.div`
  position: relative;
`
const Search = styled.input`
  font-size: 16px;
  height: 28px;
  padding: 10px 50px;
  color: #000;
  border: 2px solid #b5b5b5;
  border-radius: 30px;
  &:placeholder {
    color: #b5b5b5;
  }
`
const SortHeading = styled.h4`
  font-weight: 500;
  font-size: 24px;
  padding: 0 30px;
`
const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 0;
`
const MainHeading = styled.h1`
  font-size: 42px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 30px;
`
const TilesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
`

function App() {
  const defaultLaunches: ILaunch[] = []
  const [launches, setLaunches]: [ILaunch[], (launches: ILaunch[]) => void] =
    useState(defaultLaunches)
  const [date, setDate] = useState('')
  const handleChange = (event: SelectChangeEvent) => {
    setDate(event.target.value as string)
  }
  useEffect(() => {
    axios
      .get<ILaunch[]>('https://api.spacexdata.com/v5/launches', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setLaunches(response.data)
      })
      .catch((ex) => {
        const error =
          ex.response.status === 404
            ? 'Resource Not found'
            : 'An unexpected error has occurred'
      })
  }, [])

  return (
    <>
      <Header>
        <SearchBox>
          <SearchIcon
            style={{
              fontSize: 24,
              position: 'absolute',
              zIndex: 1,
              top: '50%',
              transform: 'translateY(-50%)',
              left: '16px',
            }}
          />
          <Search placeholder='Search by a launch name...' />
        </SearchBox>
        <SortHeading>Filter by:</SortHeading>
        <Box sx={{ minWidth: 100 }} style={{ marginRight: '20px' }}>
          <FormControl fullWidth>
            <InputLabel>Date</InputLabel>
            <Select
              value={date}
              label='Date'
              onChange={handleChange}
              style={{
                borderRadius: '30px',
                height: '52px',
              }}
            >
              <MenuItem value={'Newer'}>Newer</MenuItem>
              <MenuItem value={'Older'}>Older</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 100 }}>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={date}
              label='Date'
              onChange={handleChange}
              style={{
                borderRadius: '30px',
                height: '52px',
              }}
            >
              <MenuItem value={'Succeded'}>Succeded</MenuItem>
              <MenuItem value={'Failed'}>Failed</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Header>
      <Container>
        <MainHeading>SPACEX Launches</MainHeading>
        <TilesContainer>
          {launches.map((launch): any => (
            <Tile
              imageUrl={launch.links.patch.large}
              link={launch.links.article}
              date={launch.date_local.split('T')[0]}
              success={launch.success}
            ></Tile>
          ))}
        </TilesContainer>
      </Container>
    </>
  )
}

export default App
