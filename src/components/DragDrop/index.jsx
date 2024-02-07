import { Box, Typography } from '@mui/material'
import { useDropzone } from 'react-dropzone'
import { Description } from '@mui/icons-material'

import { COLORS } from '@/utils/constants'
import CustomButton from '../Button'

const DragDrop = ({ files, setFiles }) => {
  const onDrop = acceptedFiles => {
    const allFiles = [...files, ...acceptedFiles]
    setFiles(allFiles)
  }

  const { getRootProps, open, getInputProps } = useDropzone({ onDrop, maxFiles: 4, maxSize: 10000000 })
  
  return (
    <Box className='container cursor-pointer items-center flex flex-col rounded-lg border border-solid p-3 border-gray-300'>
      <Box {...getRootProps({className: 'border-dashed border-gray-300 rounded border-2 flex flex-col w-full justify-center items-center px-4 py-6'})}>
        <input {...getInputProps()} />
        <Description className={`text-[${COLORS.secondaryAmber}] mb-4`} />

        <Typography className='text-[#697177]'>
          Drag & Drop Here Or <b className={`text-[${COLORS.primaryBlue}] font-bold`}>Browse</b>
        </Typography>
      </Box>

      <CustomButton
        variant='contained'
        text='Upload Manifest'
        onClickHandler={open}
      />
    </Box>
  )
}

export default DragDrop
