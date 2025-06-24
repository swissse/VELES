const right_btn = document.querySelector('.scroll_right__1')
const left_btn = document.querySelector('.scroll_left__1')

const scroll = document.querySelector('.scroll_bar__1')

const num_page = 4;

let offset = 0;
let def_point = 0

left_btn.addEventListener('click', () => {
   if(offset - 1425 < 0){
      return
   }
   offset -= 1425
   scroll.scrollTo(offset, 0)
   def_point--
   clear_active_point(def_point)
})

right_btn.addEventListener('click', () => {
   if(offset + 1425 >= 1425 * num_page){
      console.log('offset');
      return
   }
   offset += 1425
   scroll.scrollTo(offset, 0)
   def_point++
   clear_active_point(def_point)
})


const points = document.querySelectorAll('.scroll_point')

const point_1 = document.querySelector('.point_1')
const point_2 = document.querySelector('.point_2')
const point_3 = document.querySelector('.point_3')
const point_4 = document.querySelector('.point_4')

const clear_active_point = (point_num) => {
   points.forEach((point) => {
      point.classList.remove('point_active')
   })
   points[point_num].classList.add('point_active')
}

point_1.addEventListener('click', () => {
   def_point = 0
   scroll.scrollTo(0, 0)
   clear_active_point(def_point)
})

point_2.addEventListener('click', () => {
   def_point = 1
   scroll.scrollTo(1425, 0)
   clear_active_point(def_point)
})

point_3.addEventListener('click', () => {
   def_point = 2
   scroll.scrollTo(1425 * 2 , 0)
   clear_active_point(def_point)
})

point_4.addEventListener('click', () => {
   def_point = 3
   scroll.scrollTo(1425 * 3, 0)
   clear_active_point(def_point)
})
