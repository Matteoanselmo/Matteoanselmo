<template>
    <nav>
		<div id="menuToggle">
			<input id="isAgeSelected" type="checkbox" />
			<span></span>
			<span></span>
			<span></span>
			<ul id="menu">
				<li @click="$emit('setStep', 0)">
					<a href="#">Chi sono</a>
				</li>
				<li @click="$emit('setStep', 1)">
					<a href="#">Repo</a>
				</li>
				<li @click="$emit('setStep', 2)">
					<a href="#">Giochi</a>  
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
    name: 'HeaderNav',
}
</script>

<style scoped>
/**********************/
/*     Navigation     */
/**********************/
#menuToggle {
	display: block;
	position: fixed;
	top: 3rem;
	right: 1.5rem;
	left: auto;
	z-index: 4;
	-webkit-user-select: none;
	user-select: none;
}

#menuToggle input {
	display: block;
	width: 2.5rem;
	height: 2rem;
	position: absolute;
	top: -0.5rem;
	left: -0.25rem;
	cursor: pointer;
	opacity: 0; /* hide this */
	z-index: 4; /* and place it over the hamburger */
	-webkit-touch-callout: none;
}

#menuToggle span {
	display: block;
	position: relative;
	z-index: 3;
	width: 2.0625rem;
	height: 0.25rem;
	margin-bottom: 0.3125rem;
	background: #ffffff;
	border-radius: 0.125rem;
	transform-origin: 4px 0px;
	transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
				opacity 0.55s ease;
}

#menuToggle span:first-child {
	transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
}

/* Transform burger lines in crossmark */
#menuToggle input:checked ~ span {
	opacity: 1;
	transform: rotate(45deg) translate(-2px, -1px);
	background: #ffffff;
}

/* Hide the middle burger line */
#menuToggle input:checked ~ span:nth-last-child(3) {
	opacity: 0;
	transform: rotate(0deg) scale(0.2, 0.2);
}

/* Change direction of burger line */
#menuToggle input:checked ~ span:nth-last-child(2) {
	transform: rotate(-45deg) translate(0, -1px);
}

#menu {
	position: absolute;
	width: 13.75rem;
	margin: -6.25rem 0 0 -9.625rem;
	padding: 7rem 2.75rem 2.1875rem 2.1875rem;
	border-bottom-right-radius: 1rem;
	border-bottom-left-radius: 1rem;
	background: #25373bc2;
	list-style-type: none;
	-webkit-font-smoothing: antialiased; /* to stop flickering of text in safari */
	transform-origin: 0% 0%;
	transform: translate(115%, 0);
	transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li {
	margin-bottom: 0.5rem;
	padding: 0.125rem 0;
	color: #ffffff;
	font-size: 1.125rem;
}

#menu li a {
    color: white;
	opacity: 0.7;
	text-decoration: none;
}

#menu li:active,
#menu li:hover a {
    transition: .35s;
	color: #385158;
	opacity: 1;
}

#menu li.sub-menu {
	margin-left: 0.5rem;
	margin-bottom: 0.125rem;
	font-size: 1rem;
}

#menuToggle input:checked ~ ul {
	transform: none;
}
</style>