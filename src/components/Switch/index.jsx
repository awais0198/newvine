import { styled } from '@mui/material/styles'
import { Box, Switch, Typography } from '@mui/material'

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 36,
  height: 21,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 16,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#041D59',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 16,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 32 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}))

const CustomSwitch = ({ text }) => (
  <Box className='flex items-center'>
    <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
    <Typography className='text-[#041D59] text-xs ml-1'>{text}</Typography>
  </Box>
)

export default CustomSwitch
