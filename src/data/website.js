const site = {
	title: 'Bruno BriSe.',
	navigation: [
		{
			name: 'Accueil',
			slug: '',
			location: [
				'footer',
				'sidebar'
			]
		},
		{
			name: 'Parcours',
			slug: 'career',
			location: [
				'header',
				'footer',
				'sidebar'
			]
		}
	],
	social: {
		networks : [
			{
				name: 'Twitter',
				url: 'https://twitter.com/brunobrise',
				svg: '<svg class="svg-icon" viewBox="0 0 20 20"><path d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"></path></svg>'
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/brunobritosemedo',
				svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>'
			},
			{
				name: 'Instagram',
				url: 'https://instagram.com/brisebruno',
				svg: '<svg class="svg-icon" viewBox="0 0 20 20"><path d="M14.52,2.469H5.482c-1.664,0-3.013,1.349-3.013,3.013v9.038c0,1.662,1.349,3.012,3.013,3.012h9.038c1.662,0,3.012-1.35,3.012-3.012V5.482C17.531,3.818,16.182,2.469,14.52,2.469 M13.012,4.729h2.26v2.259h-2.26V4.729z M10,6.988c1.664,0,3.012,1.349,3.012,3.012c0,1.664-1.348,3.013-3.012,3.013c-1.664,0-3.012-1.349-3.012-3.013C6.988,8.336,8.336,6.988,10,6.988 M16.025,14.52c0,0.831-0.676,1.506-1.506,1.506H5.482c-0.831,0-1.507-0.675-1.507-1.506V9.247h1.583C5.516,9.494,5.482,9.743,5.482,10c0,2.497,2.023,4.52,4.518,4.52c2.494,0,4.52-2.022,4.52-4.52c0-0.257-0.035-0.506-0.076-0.753h1.582V14.52z"></path></svg>'
			},
			{
				name: 'Pinterest',
				url: 'https://www.pinterest.fr/brunobrise',
				svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Pinterest icon</title><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"></path></svg>'
			},
			{
				name: 'Soutenir mes projets',
				url: 'https://ko-fi.com/brunobrise',
				svg: '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="181.9882mm" height="115.95629mm" viewBox="0 0 644.8401 410.86875" id="svg4238" version="1.1" inkscape:version="0.91 r13725" sodipodi:docname="cuplogo.svg"><defs id="defs4240"/><sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:zoom="0.35" inkscape:cx="780.27718" inkscape:cy="-214.56561" inkscape:document-units="px" inkscape:current-layer="layer1" showgrid="false" fit-margin-top="0" fit-margin-left="0" fit-margin-right="0" fit-margin-bottom="0" inkscape:window-width="1280" inkscape:window-height="699" inkscape:window-x="0" inkscape:window-y="1" inkscape:window-maximized="1"/><metadata id="metadata4243"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title/></cc:Work></rdf:RDF></metadata><g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(-37.579964,-135.49927)"><g id="g40" transform="matrix(1.1421528,0,0,-1.1421528,265.93398,460.73095)"><g id="g4184"><path inkscape:connector-curvature="0" id="path38" style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 0,0 c -19.946,-2.492 -36.151,-0.622 -36.151,-0.622 l 0,122.132 38.02,0 c 0,0 42.385,-11.839 42.385,-56.704 C 44.254,23.68 23.063,7.478 0,0 M 105.063,85.739 C 88.435,173.56 0.624,184.473 0.624,184.473 l -393.333,0 c -12.99,0 -14.588,-17.148 -14.588,-17.148 0,0 -1.752,-157.43 -0.481,-254.112 3.524,-52.093 55.597,-57.435 55.597,-57.435 0,0 177.701,0.52 257.2,1.039 52.41,9.181 57.674,55.155 57.155,80.3 93.527,-5.196 159.515,60.8 142.889,148.622" transform="matrix(1.0944245,0,0,1.0944245,246.85536,82.861446)"/><path inkscape:connector-curvature="0" id="path42" style="fill:#ff5f5f;fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 0,0 c 4.445,-2.238 7.285,0.543 7.285,0.543 0,0 65.045,59.367 94.348,93.557 26.063,30.586 27.762,82.129 -16.997,101.388 -44.758,19.258 -81.584,-22.657 -81.584,-22.657 -31.935,35.123 -80.268,33.345 -102.623,9.575 -22.354,-23.77 -14.548,-64.568 2.129,-87.274 15.655,-21.314 84.465,-82.644 94.894,-93.016 0,0 0.76,-0.795 2.548,-2.116"/></g></g></g></svg>'
			}
		]
	}
}

export default site;
