import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Dropdown from '../dropdown/dropdown';
import Results from '../Results';

const MainContainer = () => {
	const [buildUrl, setBuildUrl] = useState('https://bustling-bay-313108.el.r.appspot.com');
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

			fetch(buildUrl, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': "*"
				}
			}).then(res => res.json()).then(res => setResources(res));
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