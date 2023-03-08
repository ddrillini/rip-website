"use strict";
/*
 * This obfuscation only prevents stupid bots from scraping GitHub or the page.
 * If an attacker can run JS, we already lost the war for the client side.
 * CAPTCHA exists, but I consider it immoral.
 *
 * my JS is probably atrocious
 */

function scatter_ascii(id) {
	let codes = [];
	for (const codePoint of id) {
		let inverted = 0x80 - codePoint.codePointAt(0);
		// swap the upper and lower halves of the range
		if (inverted >= 0x40) {
			inverted -= 0x40;
		} else {
			inverted += 0x40;
		}
		codes.push(inverted);
	}
	return window.btoa(String.fromCharCode(...codes))
}

function gather_ascii(s) {
	let coded = unescape(window.atob(s));
	let codes = [];
	for (const codePoint of coded) {
		let inverted = codePoint.codePointAt(0);
		// swap the upper and lower halves of the range [back]
		let righted = (inverted >= 0x40) ? (inverted - 0x40) : (inverted + 0x40);
		codes.push(0x80 - righted);
	}
	return String.fromCharCode(...codes);
}

const url2actual = new Map();
url2actual.set("gp", "https://photos.app.goo.gl/");
url2actual.set("discord", "https://discord.com/"); // inefficient because we could do fun things with the numbers instead, but oh well, probably no one cares
url2actual.set("yt", "https://youtu.be/"); // watch?v=
url2actual.set("gd", "https://drive.google.com/drive/folders/");

document.addEventListener("DOMContentLoaded", function(event) {
	let count = 0;
	for (let link of document.getElementsByTagName('a')) {
		let location = link.href;
		const sep = '://';
		const sepIdx = location.indexOf(sep);
		if (sepIdx < 0) {
			continue;
		}
		const protocol = location.substring(0, sepIdx);
		const prefix = url2actual.get(protocol);
		if (prefix === undefined) {
			continue;
		}

		link.href = prefix + gather_ascii(location.substring(sepIdx + sep.length));
		count += 1;
	}
	console.debug('deobfuscated ' + count + ' links')
	document.getElementById('noscript-warning').remove();
});
