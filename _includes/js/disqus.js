var disqus_config = function () {
		var disqus_shortname = 'perfectlyrandom';
		this.page.url = "{{ site.url }}"; 
		this.page.identifier = "{{ page.url }}";
	};

(function() { // DON'T EDIT BELOW THIS LINE
	var d = document, s = d.createElement('script');
	s.src = '//kateposener.disqus.com/embed.js';
	s.setAttribute('data-timestamp', +new Date());
	(d.head || d.body).appendChild(s);
})();