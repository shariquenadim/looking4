import React,{useState} from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import InputUnstyled, { inputUnstyledClasses } from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from '@mui/material/FormLabel';

import PersonIcon from '@mui/icons-material/Person';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';



const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#fff',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledInputRoot = styled('div')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  display: flex;
  font-weight: 500;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 8px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  align-items: center;
  justify-content: center;

  &.${inputUnstyledClasses.focused} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
  }

  &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }
`,
);

const StyledInputElement = styled('input')(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  flex-grow: 1;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 12px 12px;
  outline: 0;
`,
);


const InputAdornment = styled('div')`
  margin: 8px;
  color: #000;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  const { components, ...other } = props;
  return (
    <InputUnstyled
      components={{
        Root: StyledInputRoot,
        Input: StyledInputElement,
        ...components,
      }}
      {...other}
      ref={ref}
    />
  );
});

CustomInput.propTypes = {
  components: PropTypes.shape({
    Input: PropTypes.elementType,
    Root: PropTypes.elementType,
    Textarea: PropTypes.elementType,
  }),
};
 

const NewPatient = () => {
  const [name,setName] = useState('');
  const [dob,setDob] = useState('Date of Birth');
  const [gender,setGender] = useState('');
  const [number,setNumber] = useState('');
  const [add,setAdd] = useState('');
  const [prehistory,setPrehistory] = useState('');
  const [guardian,setGuardian] = useState('');
  const [gurNum,setGurNum] = useState('');
  const [fees,setFees] = useState('');

  //Name state
  const nameHandler = (e) => {
    const name = e.target.value;
    setName(name);
  }

  //DOB state
  const dobHandler = (e) => {
    const dob = e.target.value;
    setDob(dob);
  }

  //gender state
  const FemaleChnage = (e) => {
    const gen = e.target.value;
    setGender(gen);
  }
  const MaleChnage = (e) => {
    const gen = e.target.value;
    setGender(gen);
  }
  const numberHandler = (e) => {
    const num = e.target.value;
    setNumber(num);
  }

  //Contact Number state
  const addHandler = (e) => {
    const add = e.target.value;
    setAdd(add);
  }

  //Previous History State
  const Hyperhandler = (e) => {
    const hyper = e.target.value;
    setPrehistory(hyper);
  }
  const Diahandler = (e) => {
    const dia = e.target.value;
    setPrehistory(dia);
  }
  const Allerhandler = (e) => {
    const aller = e.target.value;
    setPrehistory(aller);
  }
  const Accidenthandler = (e) => {
    const accident = e.target.value;
    setPrehistory(accident);
  }
  const Previoushandler = (e) => {
    const previ = e.target.value;
    setPrehistory(previ);
  }
  const AnyOtherhandler = (e) => {
    const anyOther = e.target.value;
    setPrehistory(anyOther);
  }

  //Guardian Name State
  const GuardianNameHandler = (e) => {
    const name = e.target.value;
    setGuardian(name);
  }
  const GuardianNumHandler = (e) => {
    const number = e.target.value;
    setGurNum(number);
  }

  return (
    <>

    <Box className='inputField' sx={{  '& > * + *': { ml: 1 } }}>
      <div style={{display:'flex',gap:'10px'}}>
      <CustomInput
        placeholder='Full Name'
        id="outlined-start-adornment"
        value={name}
        onChange={nameHandler}
        startAdornment={<InputAdornment>
        <PersonIcon/>
        </InputAdornment>}
      />
      <CustomInput
        type='date'
        placeholder='Date of Birth'
        value={dob}
        onChange={dobHandler}
        id="outlined-start-adornment"
        startAdornment={<InputAdornment>
        <DateRangeIcon/>
        </InputAdornment>}
      />
      </div>

      <FormControl>
      <FormLabel style={{color:'#fff',fontSize:'20px',textTransform:'uppercase'}} id="demo-row-radio-buttons-group-label">
        Gender
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value='Female' onChange={FemaleChnage}  control={<Radio />} label="Female" />
        <FormControlLabel value='Male'onChange={MaleChnage} control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>

    <div style={{display:'flex',gap:'10px'}}>
    <CustomInput
        type='number'
        placeholder='Contact number'
        value={number}
        onChange={numberHandler}
        id="outlined-start-adornment"
        startAdornment={<InputAdornment>
        <CallIcon/>
        </InputAdornment>}
      />
    <CustomInput
        type='text'
        placeholder='Full Address'
        value={add}
        onChange={addHandler}
        id="outlined-start-adornment"
        startAdornment={<InputAdornment>
        <LocationOnIcon/>
        </InputAdornment>}
      />
    </div>

    <FormGroup>
    <FormLabel style={{color:'#fff',fontSize:'20px',textTransform:'uppercase'}} id="demo-row-radio-buttons-group-label">
        Previous History
    </FormLabel>
      <FormControlLabel value='Hypertension' onChange={Hyperhandler} control={<Checkbox />} label="Hypertension" />
      <FormControlLabel value='Diabetes' onChange={Diahandler} control={<Checkbox />} label="Diabetes" />
      <FormControlLabel value='Allergies' onChange={Allerhandler} control={<Checkbox />} label="Allergies" />
      <FormControlLabel value='Accidents/Trauma' onChange={Accidenthandler} control={<Checkbox />} label="Accidents/Trauma" />
      <FormControlLabel value='Previous Surgeries' onChange={Previoushandler} control={<Checkbox />} label="Previous Surgeries" />
      <FormControlLabel value='HyperAny other diseases' onChange={AnyOtherhandler} control={<Checkbox />} label="Any other diseases" />
    </FormGroup>

    <div style={{display:'flex',gap:'10px'}}>
    <CustomInput
        type='text'
        placeholder='Guardian Name'
        value={guardian}
        onChange={GuardianNameHandler}
        id="outlined-start-adornment"
        startAdornment={<InputAdornment >
        <PersonIcon/>
        </InputAdornment>}
    />
    <CustomInput
        type='number'
        value={gurNum}
        onChange={GuardianNumHandler}
        placeholder='Guardian Number'
        id="outlined-start-adornment"
        startAdornment={<InputAdornment >
        <CallIcon/>
        </InputAdornment>}
    />
    </div>

<FormGroup>
    <FormLabel style={{color:'#fff',fontSize:'20px',textTransform:'uppercase'}} id="demo-row-radio-buttons-group-label">
        Doctor Fees
    </FormLabel>
      <FormControlLabel value={paid-cash} control={<Checkbox />} label="paid in Cash" />
      <FormControlLabel value={paid-upi } control={<Checkbox />} label="paid Via UPI" />
      <FormControlLabel value={not-paid } control={<Checkbox />} label="Not paid" />
    </FormGroup>

    <Stack spacing={2} direction="row">
    <Button variant="contained">Submit</Button>
    </Stack>
     
    </Box>

    </>
    

  );
}


export default NewPatient