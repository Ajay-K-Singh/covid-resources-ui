import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Dropdown from '../dropdown/dropdown';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Results from '../Results';

const useStyles = makeStyles((theme) => ({
	btn: {
		width: 300,
		height: 55
	}
}));

const MainContainer = () => {
	const classes = useStyles();
	const [buildUrl, setBuildUrl] = useState('http://www.covidreliefresources.space/twitter?');
	const [resources, setResources] = useState([]);

	const handleChange = (param) => {
		console.log(param);
		const { type, value } = param;
		const url = buildUrl.split('?')[0];
		const queryString = buildUrl.split('?')[1];
		const lastBuildUrl = new URLSearchParams(queryString);
		const doesParamExist = lastBuildUrl.has(type);
		if (doesParamExist) {
			lastBuildUrl.set(type, value.toLowerCase());
		} else {
			lastBuildUrl.append(type, value.toLowerCase());
		}

		setBuildUrl(url + '?' + lastBuildUrl.toString());
	}

	useEffect(() => {
		if (buildUrl.split('?').length > 1) {
			fetch(buildUrl).then(res => res.json()).then(res => setResources(res));
		}
	}, [buildUrl])

	return (
		<Grid  
		container
		direction="row"
		justify="center"
		alignItems="center">
			<Dropdown label={"Location"} resourceUrl="" type="city" onDropDownValueChange={handleChange} />
			<Dropdown label={"Resources"} resourceUrl="" type="resources" onDropDownValueChange={handleChange} />
			<Results resources={resources}/>
		</Grid>
	)
}

export default MainContainer;