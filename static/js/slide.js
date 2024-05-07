const slide = document.getElementById('slide-up');

slide.onclick = _ => slide.style.opacity != '1' ? null : window.scroll(0, 0)

window.onscroll = e => {
	const maxWindowHeight = document.body.offsetHeight - window.innerHeight;

	if (scrollY >= maxWindowHeight - 100) {
		slide.style.opacity = '1.0';
		slide.style.cursor = 'pointer';
		return
	}

	slide.style.opacity = '0.0';
	slide.style.cursor = 'default';
}