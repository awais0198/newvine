import { Button } from '@mui/material'

import { COLORS } from '@/utils/constants'

const CustomButton = ({ variant, text, onClickHandler, isDisabled, btnSize, customStyles }) => (
  <Button
    onClick={onClickHandler}
    variant={variant ?? 'contained'}
    disabled={isDisabled ?? false}
    size={btnSize ?? 'small'}
    className={variant === 'contained' ? `bg-[${COLORS.primaryBlue}] text-[#E1F6FF] px-10 mt-3 ${customStyles}` : `text-[${COLORS.secondaryAmber}] border-solid hover:border-2 hover:border-amber-500 border-2 border-amber-500 px-10 mt-3  ${customStyles}`}
    disableElevation
  >
    {text}
  </Button>
)

export default CustomButton
