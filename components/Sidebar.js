import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import WebTwoToneIcon from '@mui/icons-material/WebTwoTone';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import Button from '@mui/material/Button';
import styles from '../styles/Sidebar.module.css'

import { useState } from 'react';
export default function SideBar(){
	const [selected, setSelected] = useState("Home");
	function Icon(props){
		return <Button variant="text" className={styles.sidebar__Button} onClick={() => (selected!=props.Name)&&setSelected(props.Name)}>
		{(selected===props.Name)?props.Icon:props.clickedIcon}
		{props.Name}
		</Button>
	}
	return <div className={styles.sidebarblack}>
		<div className={styles.sidebar__Section}>
			<Icon Name={"Home"} Icon={<HomeIcon/>} clickedIcon={<HomeOutlinedIcon/>}/>
			<Icon Name={"Browse"} Icon={<WebTwoToneIcon/>} clickedIcon={<WebOutlinedIcon/>}/>
			<Icon Name={"Radio"} Icon={<LibraryMusicIcon/>} clickedIcon={<LibraryMusicOutlinedIcon/>}/>
		</div>

		<div className={styles.sidebar__Section}>
		<h2>YOUR LIBRARY</h2>
		<Icon Name={"Made for You"}/>
		<Icon Name={"Recently Played"}/>
		<Icon Name={"Liked Songs"}/>
		<Icon Name={"Albums"}/>
		<Icon Name={"Artists"}/>
		<Icon Name={"Local Files"}/>
		<Icon Name={"Podcast"}/>
		<Icon Name={"Made for You"}/>
		</div>
		</div>
}
