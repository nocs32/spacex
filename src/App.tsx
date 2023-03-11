import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import styled from 'styled-components'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const Header = styled.header`
  display: flex;
  align-items: center;
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

function App() {
  const [date, setDate] = useState('')
  const handleChange = (event: SelectChangeEvent) => {
    setDate(event.target.value as string)
  }

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
          <Search />
        </SearchBox>
        <SortHeading>Sort by:</SortHeading>
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
              <MenuItem value={'Newer'}>Older</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 100 }}>
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
              <MenuItem value={'Newer'}>Older</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Header>
    </>
  )
}

export default App
