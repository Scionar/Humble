(function() {
  if (USE_DISQUS) {
    var d = document, s = d.createElement('script');
    s.src = DISQUS_URL + '/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  } else {
    // Remove Disqus HTML block.
    var disqusBlock =  document.getElementById('disqus-block');
    if (disqusBlock !== null) disqusBlock.parentNode.removeChild(disqusBlock);
  }
})();
