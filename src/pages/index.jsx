import { useState } from 'react'
import { AccessTime, Close, InsertDriveFile } from '@mui/icons-material'
import { Box, Divider, FormControlLabel, Radio,RadioGroup,  Typography } from '@mui/material'

import { bytesToMBs } from '@/utils/heplers'
import { COLORS, TEMP_NAMES } from '@/utils/constants'
import CustomButton from '@/components/Button'
import CustomSwitch from '@/components/Switch'
import DragDrop from '@/components/DragDrop'
import SelectDropDown from '@/components/SelectDropDown'
import TestingCenter from '@/components/TestingCenter'

export default function Home() {
  const [files, setFiles] = useState([])

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between px-24 py-16`}>
      <Box className={`bg-white rounded-xl p-6 max-w-5xl w-full justify-between font-mono text-sm`}>
        <Box className={`bg-[${COLORS.primaryBlue}] rounded-lg p-1 cursor-pointer w-min`}><Close /></Box>

        <Box className={`flex w-full items-end justify-center`}>
          <Typography className={`text-[${COLORS.primaryBlue}] text-2xl font-bold decoration-[${COLORS.lightGray}] underline underline-offset-[18px]`}>
            Document Upload
          </Typography>
        </Box>

        <Box className={'flex w-full p-[2rem]'}>
          <Box className={'flex-[2] w-full p-[1.5rem]'}>
            <SelectDropDown
              placeholder={'Select Import Name:'}
              values={TEMP_NAMES}
            />

            <Divider className={'mb-3 mt-4 w-[260px]'} sx={{ borderBottomWidth: '1.5px' }} />

            <Typography className={`text-[${COLORS.primaryBlue}] text-[12px] font-bold mb-2`}>
              Select a manifest that you'd like to import
            </Typography>

            <DragDrop files={files} setFiles={setFiles} />

            {files.length && 
              <>
                <Divider className={'mb-2 mt-4'} />
                <Box className={`flex flex-col px-2 py-1 max-h-[200px]`}>
                  {files.map(file => (
                    <Box className={`flex justify-between items-center`}>
                      <Box className={`flex items-center my-2`}>
                        <InsertDriveFile className={`text-[text-[#FF9A1E]]`} />
                        <Typography className={`text-[${COLORS.textGray}] text-[12px] ml-2`}>{file?.path}</Typography>
                      </Box>

                      <Typography className={`text-[${COLORS.textGray}] text-[12px] font-bold ml-2`}>{`${bytesToMBs(file?.size)}MB`}</Typography>
                    </Box>
                  ))}
                </Box>
                <Divider className={'mt-2 mb-4'} />
              </>
            }

            <Divider className={'mb-2 w-[260px]'} sx={{ borderBottomWidth: '1.5px' }} />
            
            <Typography className={`text-[${COLORS.primaryBlue}] text-[12px] font-bold mb-2`}>
              Elapse Data Checking:
            </Typography>

            <Typography className={`text-[${COLORS.successGreen}] text-[12px] font-bold`}>
              No Elapsed Dates!
            </Typography>

            <Divider className={'my-2 w-[260px]'} sx={{ borderBottomWidth: '1.5px' }} />

            <Typography className={`text-[${COLORS.primaryBlue}] text-[12px] font-bold mb-2`}>
              Tolerance Window:
            </Typography>

            <Box className={'flex w-full items-center'}>
              <CustomSwitch text='Toggle ON' /> 
              <Divider orientation='vertical' className={'h-[24px] mx-3 border-[${COLORS.primaryBlue}]'} />
              <AccessTime className={`text-[${COLORS.primaryBlue}] w-[22px]`} />
              <Typography className={`text-[${COLORS.primaryBlue}] text-xs ml-2`}>Select Tolerance Level</Typography>
            </Box>
          </Box>
            
          <Box className={'flex-[1.5] w-full p-[1.5rem]'}>
            <Typography className={`text-[${COLORS.primaryBlue}] text-[12px] font-bold`}>
              Split schedule using social distancing?
            </Typography>

            <RadioGroup row value={'yes'}>
              <FormControlLabel
                className={`text-[${COLORS.primaryBlue}] text-xs`}
                value='yes'
                control={<Radio sx={{ '&.Mui-checked': { color: COLORS.primaryBlue }}}/>}
                label='Yes'
              />

              <FormControlLabel
                className={`text-[${COLORS.primaryBlue}] text-xs`}
                value='no'
                control={<Radio sx={{ '&.Mui-checked': { color: COLORS.primaryBlue }}}/>}
                label='No'
              />
            </RadioGroup>

            <Divider className={'mb-3'} sx={{ borderBottomWidth: '1.5px' }} />

            <Typography className={`text-[${COLORS.primaryBlue}] text-[12px] font-bold mb-2`}>
              Location Checking
            </Typography>

            <Typography className={`text-[${COLORS.successGreen}] text-[12px] font-bold mb-1`}>
              All Available!
            </Typography>

            <Divider className={'my-2'} sx={{ borderBottomWidth: '1.5px' }} />

            <Typography className={`text-[${COLORS.primaryBlue}] text-[12px] font-bold`}>
              Client:
            </Typography>

            <RadioGroup row value={'Multiple'}>
              <FormControlLabel
                className={`text-[${COLORS.primaryBlue}] text-xs`}
                value='Single'
                control={<Radio sx={{ '&.Mui-checked': { color: COLORS.primaryBlue }}}/>}
                label='Single'
              />
              <FormControlLabel
                className={`text-[${COLORS.primaryBlue}] text-xs`}
                value='Multiple'
                control={<Radio sx={{'&.Mui-checked': { color: COLORS.primaryBlue }}}/>}
                label='Multiple'
              />
            </RadioGroup>

            {[1, 2, 3, 4].map((item) => <TestingCenter key={item} text={`Testing Center ${item}`} />)}
          </Box>
        </Box>

        <Box className={'flex flex-col items-center'}>
          <Typography className={`text-[${COLORS.primaryBlue}] text-base font-bold`}>
            Data in the import file is correct. Please press Continue to import.
          </Typography>
          <Box className={'flex justify-between mb-8 mt-2'}>
            <CustomButton
              variant='contained'
              text='Continue Import'
              customStyles={'py-2 w-[220px] rounded-lg mr-6'}
            />

            <CustomButton
              variant='outlined'
              text='Cancel'
              customStyles={'py-2 rounded-lg w-[220px]'}
            />
          </Box>
        </Box>
      </Box>
    </main>
  )
}
