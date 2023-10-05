var tl = gsap.timeline()
tl.from('.upper h1',{
    y:-400,
    scale:1,
    duration:1,
    stagger:1
})

tl.from('.upper h2, .upper p',{
    x:-500,
    scale:1,
    duration:0.6,
    stagger:0.3
})
// tl.from('#about img',{
//   y:-700,
//   duration:1,
// })
// tl.from('#about p',{
//   opacity:0,
//   duration:1.5,
// })
tl.from('nav ul li',{
    opacity:0,
    scale:1,
    duration:0.2,
    stagger:0.5
})
tl.from('.contact a',{
    opacity:0,
    scale:1,
    duration:0.2,
    stagger:0.5
})

gsap.from('#skills .tech-skills .box',{
  scale:0,
  opacity:0,
  duration:1,
  stagger:0.3,
  scrollTrigger:{
      trigger:'#skills .tech-skills .box',
      scroller:'body',
      start:'top 70%'
  }
})
gsap.from('#skills .programming-languages .box',{
  scale:0,
  opacity:0,
  duration:1,
  stagger:0.3,
  scrollTrigger:{
      trigger:'#skills .programming-languages .box',
      scroller:'body',
      start:'top 75%'
  }
})
gsap.from('#skills .tools .box',{
  scale:0,
  opacity:0,
  duration:1,
  stagger:0.3,
  scrollTrigger:{
      trigger:'#skills .tools .box',
      scroller:'body',
      start:'top 80%'
  }
})
gsap.from('#skills .databases .box',{
  scale:0,
  opacity:0,
  duration:1,
  stagger:0.3,
  scrollTrigger:{
      trigger:'#skills .databases .box',
      scroller:'body',
      start:'top 85%'
  }
})
gsap.from('#projects img,#resume',{
  scale:0,
  opacity:0,
  dration:1.5,
  stagger:0.5,
  delay:0.5,
  scrollTrigger:{
    trigger:'#projects img',
    scroller:'body',
    start:'top 100%'
} 
})
gsap.from('.footer p',{
  scale:0,
  opacity:0,
  dration:1.5,
  stagger:0.5,
  delay:0.5,
  scrollTrigger:{
    trigger:'.footer p',
    scroller:'body',
    start:'top 130%'
} 
})

