"🌲"
function drawTree (height) {
   let elka = "🌲"
   let space = " "
   for(let i = height; i > 0; i--) {
      console.log(space.repeat(i) + elka )
      elka += "🌲"
   }
}

drawTree(8)
