

import { tsvParse, csvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";

function parseData(parse) {
	return function(d) {
		d.date = parse(d.date);
		d.open = +d.open;
		d.high = +d.high;
		d.low = +d.low;
		d.close = +d.close;
		d.volume = +d.volume;

		return d;
	};
}

const parseDate = timeParse("%Y-%m-%d");

export function getData() {
/*  //rrag.github.io/react-stockcharts/data/MSFT.tsv */
/* //35.185.75.47:3000/ */
	const promiseMSFT = fetch("http:////35.185.75.47:3001/")
		.then(response => response.text())
		.then(data => tsvParse(data, parseData(parseDate)))
	return promiseMSFT;
}
