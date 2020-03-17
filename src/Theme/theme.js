import { theme } from '@chakra-ui/core';
import React from 'react';

const customIcons = {
	icon1: {
		path: (<g fill="currentColor"><path d="m77.78125 170.320312c5.246094 1.734376 10.902344-1.109374 12.632812-6.355468 15.699219-47.480469 59.867188-79.378906 109.910157-79.378906 63.816406 0 115.738281 51.917968 115.738281 115.738281 0 49.324219-22.09375 78.792969-39.84375 102.472656-12.914062 17.222656-24.066406 32.101563-24.066406 50.144531 0 1.1875-.015625 2.363282-.042969 3.53125h-41.785156v-22.972656c0-5.523438-4.476563-10-10-10-5.523438 0-10 4.476562-10 10v22.972656h-41.789063c-.027344-1.167968-.042968-2.34375-.042968-3.53125 0-18.046875-11.152344-32.921875-24.066407-50.148437-13.074219-17.441407-27.890625-37.210938-35.238281-65.300781-1.398438-5.34375-6.867188-8.542969-12.207031-7.144532-5.339844 1.394532-8.539063 6.863282-7.140625 12.203125 8.339844 31.886719 25.109375 54.261719 38.585937 72.238281 11.210938 14.957032 20.066407 26.769532 20.066407 38.152344 0 4.789063.203124 9.460938.597656 13.917969v84.585937c0 .269532.019531.53125.039062.792969.007813.0625.003906.128907.011719.191407.035156.371093.09375.730468.167969 1.089843v.007813c3.472656 16.289062 12.363281 31.101562 25.042968 41.707031 12.921876 10.8125 29.25 16.765625 45.972657 16.765625 16.722656 0 33.046875-5.953125 45.972656-16.765625 12.675781-10.605469 21.570313-25.417969 25.039063-41.707031 0-.003906.003906-.007813.003906-.011719.074218-.355469.128906-.714844.167968-1.085937.003907-.0625.003907-.128907.007813-.191407.019531-.265625.039063-.527343.039063-.796875v-84.582031c.394531-4.457031.601562-9.128906.601562-13.917969 0-11.382812 8.855469-23.195312 20.066406-38.152344 18.5-24.679687 43.839844-58.476562 43.839844-114.464843 0-74.847657-60.894531-135.738281-135.738281-135.738281-58.6875 0-110.484375 37.414062-128.898438 93.101562-1.734375 5.242188 1.113281 10.898438 6.355469 12.632812zm122.542969 321.679688c-20.332031 0-38.667969-12.296875-47.355469-30.558594h94.710938c-8.691407 18.261719-27.027344 30.558594-47.355469 30.558594zm51.234375-50.558594h-102.46875v-22.484375h102.46875zm0-42.484375h-102.46875v-22.484375h102.46875zm0 0"/><path d="m200.324219 46.644531c5.523437 0 10-4.476562 10-10v-26.644531c0-5.523438-4.476563-10-10-10-5.523438 0-10 4.476562-10 10v26.644531c0 5.523438 4.476562 10 10 10zm0 0"/><path d="m10 210.324219h26.644531c5.523438 0 10-4.476563 10-10 0-5.523438-4.476562-10-10-10h-26.644531c-5.523438 0-10 4.476562-10 10 0 5.523437 4.476562 10 10 10zm0 0"/><path d="m246.109375 220.527344c0-5.523438-4.476563-10-10-10h-71.570313c-5.523437 0-10 4.476562-10 10 0 5.523437 4.476563 10 10 10h25.785157v22.972656c0 5.523438 4.476562 10 10 10 5.523437 0 10-4.476562 10-10v-22.972656h25.785156c5.523437 0 10-4.476563 10-10zm0 0"/><path d="m77.515625 91.65625c1.953125 1.953125 4.511719 2.929688 7.070313 2.929688 2.558593 0 5.117187-.976563 7.070312-2.929688 3.90625-3.90625 3.90625-10.238281 0-14.140625l-18.839844-18.839844c-3.90625-3.90625-10.238281-3.90625-14.144531 0-3.902344 3.902344-3.902344 10.234375 0 14.140625zm0 0"/><path d="m58.847656 351.800781c2.558594 0 5.117188-.976562 7.070313-2.929687l18.839843-18.839844c3.90625-3.90625 3.90625-10.234375 0-14.140625s-10.238281-3.90625-14.140624 0l-18.84375 18.839844c-3.902344 3.90625-3.902344 10.238281 0 14.140625 1.953124 1.953125 4.511718 2.929687 7.074218 2.929687zm0 0"/><path d="m316.0625 94.585938c2.558594 0 5.117188-.976563 7.070312-2.929688l18.839844-18.839844c3.90625-3.90625 3.90625-10.238281 0-14.144531-3.902344-3.90625-10.234375-3.902344-14.140625 0l-18.839843 18.839844c-3.90625 3.90625-3.90625 10.238281-.003907 14.144531 1.953125 1.953125 4.515625 2.929688 7.074219 2.929688zm0 0"/><path d="m315.890625 315.890625c-3.90625 3.902344-3.90625 10.234375 0 14.140625l18.839844 18.839844c1.953125 1.953125 4.511719 2.929687 7.070312 2.929687 2.558594 0 5.117188-.976562 7.070313-2.929687 3.90625-3.902344 3.90625-10.234375 0-14.140625l-18.839844-18.839844c-3.90625-3.90625-10.238281-3.90625-14.140625 0zm0 0"/><path d="m364.003906 210.324219h26.644532c5.523437 0 10-4.476563 10-10 0-5.523438-4.476563-10-10-10h-26.644532c-5.523437 0-10 4.476562-10 10 0 5.523437 4.476563 10 10 10zm0 0"/><path d="m200.324219 283.5c-5.507813 0-10 4.492188-10 10s4.492187 10 10 10c5.507812 0 10-4.492188 10-10s-4.492188-10-10-10zm0 0"/><path d="m84.585938 200.324219c0-5.507813-4.492188-10-10-10-5.511719 0-10 4.492187-10 10 0 5.507812 4.488281 10 10 10 5.507812 0 10-4.492188 10-10zm0 0"/></g>),
		viewBox: "-56 0 512 512"
	},
	icon2: {
		path: <path d="m497.139 291.079a7.955 7.955 0 0 0 -9.837 2.9 206.2 206.2 0 0 1 -173.135 90.951c-55.12-.455-106.666-22.053-145.144-60.814a203.685 203.685 0 0 1 5.723-292.736 8.012 8.012 0 0 0 -8.44-13.3 248.158 248.158 0 0 0 -113.071 90.186 246.145 246.145 0 0 0 30.28 314.794c46.813 46.069 109.046 71.44 175.232 71.44a250.283 250.283 0 0 0 157.1-55.5 247.629 247.629 0 0 0 85.963-138.863 7.909 7.909 0 0 0 -4.671-9.058zm-88.847 138.6a238.246 238.246 0 0 1 -149.545 52.821c-63.018 0-122.261-24.147-166.815-67.994a234.141 234.141 0 0 1 -28.811-299.437 236.089 236.089 0 0 1 88.738-77.364 215.841 215.841 0 0 0 8.648 294.862c40.721 41.021 95.257 63.878 153.56 64.36.617 0 1.226.008 1.842.008a218.123 218.123 0 0 0 168.911-79.57 236.207 236.207 0 0 1 -76.528 112.31z" fill="currentColor"/>,
		viewBox: "0 0 512 512"
	}
}

export const customTheme = {
	...theme,
	colors: {
		...theme.colors,
		brand: {
			900: '#1a365d',
			800: '#153e75',
			700: '#2a69ac'
		}
	},
	icons: {
		...theme.icons,
		...customIcons
	}
};
