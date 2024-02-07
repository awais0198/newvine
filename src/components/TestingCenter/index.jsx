import { AccessTime } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

import { COLORS } from '@/utils/constants'
import SelectDropDown from '../SelectDropDown'

const TestingCenter = ({ text }) => (
  <Box className={'flex items-center justify-between my-3'}>
    <Typography className={`text-[${COLORS.primaryBlue}] text-[12px]`}>{text}</Typography>

    <Box className={'flex items-center'}>
      <SelectDropDown
        placeholder={'Select Client'}
        values={['a', 'b', 'c']}
      />
      <AccessTime className={`text-[${COLORS.primaryBlue}] w-[22px] ml-2`} />
    </Box>
  </Box>
)

export default TestingCenter
