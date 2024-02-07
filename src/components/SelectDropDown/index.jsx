import { KeyboardArrowDown } from '@mui/icons-material'
import { OutlinedInput, MenuItem, Select } from '@mui/material'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const SelectDropDown = ({ placeholder, values }) => (
  <Select
    size='small'
    className='select-dropdown rounded-lg font-bold w-full text-[13px] text-[#041D59] not-italic'
    displayEmpty
    value={''}
    onChange={() => { }}
    IconComponent={() => <KeyboardArrowDown className='pr-2 w-[28px]'/>}
    input={<OutlinedInput />}
    renderValue={(selected) => {
      if (selected.length === 0) {
        return <em className='not-italic'>{placeholder}</em>
      }

      return selected.join(', ')
    }}
    MenuProps={MenuProps}
    inputProps={{ 'aria-label': 'Without label' }}
  >
    {values.map((name) => <MenuItem key={name} value={name}>{name}</MenuItem>)}
  </Select>
) 

export default SelectDropDown
