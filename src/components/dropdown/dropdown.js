import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Dropdown = (props) => {
	const { label = '', resourceUrl, type, onDropDownValueChange } = props;
	const classes = useStyles();

	const [dropdownValue, setDropdownValue] = useState('');
	const [menuItems, setMenuItems] = useState([]);

	const handleChange = (event) => {
    setDropdownValue(event.target.value);
		onDropDownValueChange({type: type, value: event.target.value})
  };

	useEffect(() => {
		if (resourceUrl) {
			fetch(resourceUrl).then((res) => setMenuItems(res))
		}
		if (type) {
			switch(type) {
				case "city":
				const val = [
					"Delhi",
					"Mumbai",
					"Pune",
					"Bengaluru",
					"Thane",
					"Nagpur",
					"Chennai",
					"Gurugram",
					"Gurgaon",
					"Noida",
					"Lucknow",
					"Agra",
					"Kerala",
					"Haryana",
					"Madhya pradesh",
					"Tamilnadu",
					"Uttar pradesh",
					"Assam",
					"Faridabad"
				];

				setMenuItems(val);
				break;

				case "resources": 
				const values = ["Oxygen",
					"Beds",
					"Icu Beds",
					"Hospitals",
					"Ambulance",
					"Plasma",
					"Food",
					"Oxygen Concentrator",
					"Home Icu",
					"Ventilator",
					"Favivir",
					"Favipiravir",
					"Remdesivir",
					"Tocilizumab",
					"Fabiflu",
					"Medicine",
					"Bevacizumab"];
					setMenuItems(values);
				break;

				default: console.log("done");
			}
		}
	}, [resourceUrl, type])

	return (
		<FormControl variant="outlined" className={classes.formControl}>
			<InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
			<Select
				labelId="demo-simple-select-outlined-label"
				id="demo-simple-select-outlined"
				value={dropdownValue}
				onChange={handleChange}
				label={label}
				xs={12}
			>
				{menuItems && menuItems.length > 0 && menuItems.map &&
					menuItems.map((val, index)=> {
						return <MenuItem key={index} value={val}>{val}</MenuItem>
					})
				}
			</Select>
	</FormControl>
	)
}

export default Dropdown;
