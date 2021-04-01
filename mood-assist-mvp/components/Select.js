import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect({setTime, setActivity, activity, time}) {
  const classes = useStyles();
//   const [activityLocal, setActivityLocal] = React.useState('');
//   const [timeLocal, setTimeLocal] = React.useState(-1);

  const handleChangeActivity = (event) => {
    setActivity(event.target.value);
  };

  const handleChangeDuration = (event) => {
    setTime(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Activity</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={activity}
          onChange={handleChangeActivity}
        >
          <MenuItem value={'action'}>Action</MenuItem>
          <MenuItem value={'thought'}>Thought</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Duration</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={time}
          onChange={handleChangeDuration}
        >
          <MenuItem value={0}>Couple minutes</MenuItem>
          <MenuItem value={1}>Couple hours</MenuItem>
          <MenuItem value={2}>Schedule it</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}