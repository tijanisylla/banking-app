 var url = new URL(window.location.href)
 var s = url.searchParams.get("subtotal")
 var t = url.searchParams.get("tax")
 var t2 = url.searchParams.get("tip")
 var cur = url.searchParams.get("currency")


 var grandtotal= Number(s) + Number(t) + Number(t2)

 alert("subtotal: " + s + "\ntax: " + t +"\ntip: " + t2 +
 " \ncurrency:" + cur + " \n-------\ngrand Total :: " + grandtotal)   