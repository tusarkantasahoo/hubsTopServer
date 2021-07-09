const http = require("http");
const https = require("https");
const express = require("express");
const cors = require('cors');
const fetch = require('node-fetch');
// import Config from "./config.json";
//load the config files which contains our hub_ids and their urls
const configUrl = 'https://colinfizgig.github.io/Custom-Hubs-Components/top-level-main-server/config.json';

let settings = { method: "Get" };
let hubsarray = 
	[
		{
			"hub_id": "2MCVA2f", 
			"urls":"https://colinfizgig.github.io/Custom-Hubs-Components/components/camera-cube-env.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/slideconfig.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/slideshow-template.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/hubs-slide-show.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/interactable-ball.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/presence-customcmd-setup.js"
		},
		{
			"hub_id": "8T88rLN",
			"urls":"https://colinfizgig.github.io/Custom-Hubs-Components/components/camera-cube-env.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/pdfshow-template.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/hubs-pdf-show.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/interactable-ball.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/presence-customcmd-setup.js"},
		// {
		// 	"hub_id": "5HsuTZ2",
		// 	"urls":"https://colinfizgig.github.io/Custom-Hubs-Components/components/slideconfig.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/hubs-slide-show.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/slideshow-template.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/presence-customcmd-setup.js"
		// },
		{
			"hub_id": "yzu8x4S",
			"urls":"https://colinfizgig.github.io/Custom-Hubs-Components/components/slideconfig.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/hubs-slide-show.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/slideshow-template.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/presence-customcmd-setup.js"
		},
		{
			"hub_id": "kBquF8A",
			"urls":"https://colinfizgig.github.io/Custom-Hubs-Components/components/camera-cube-env.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/interactable-ball.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/presence-customcmd-setup.js"
		},
		{
			"hub_id": "DVeQzPW",
			"urls":"https://colinfizgig.github.io/Custom-Hubs-Components/components/camera-cube-env.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/interactable-ball.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/presence-customcmd-setup.js"
		},
		{
			"hub_id": "xr6jnY2",
			"urls":"https://colinfizgig.github.io/Custom-Hubs-Components/components/camera-cube-env.js,https://cdn.rawgit.com/donmccurdy/aframe-extras/v4.2.0/dist/aframe-extras.min.js,https://colinfizgig.github.io/aframe_Components/components/aframe-thumb-controls-component.min.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/asteroids.js"
		}
	];

// const configPromise = fetch(configUrl, settings)
//     .then(res => res.json())
//     .then((json) => {
// 		config = json;
// 		return(json);
//     });

const app = express();
app.use(cors());

app.get(
	"/injectScripts",
	async (req, res) => {
			let result = {}
			
			try{ result.success = true;}
			catch(e){ result.success = false;}
			finally{
				console.log("get methos2",req.query.hubid)
				var myHub = req.query.hubid;
				var myUrls = "";
				for (var hubObj of hubsarray){
					if(hubObj.hub_id == myHub){
						myUrls = hubObj.urls;
						res.send(myUrls);
						break;
					}
				}
				if(myUrls == ""){
					res.send("noUrls");
				}
			}
	});

var httpServer = http.createServer(app);

httpServer.listen(3000, () => 
   console.log("HTTP Server running on port 3000")
);