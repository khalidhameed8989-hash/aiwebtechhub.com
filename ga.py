tag = """
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YFWX3GRL5F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag("js", new Date());
  gtag("config", "G-YFWX3GRL5F");
</script>"""

files = ['index.html','services.html','contact.html','blog.html']
for f in files:
    c = open(f,'r',encoding='utf-8').read()
    c = c.replace('</head>', tag + '\n</head>')
    open(f,'w',encoding='utf-8').write(c)
    print('Updated: ' + f)