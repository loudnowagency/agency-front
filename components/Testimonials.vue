<template>
  <div class="testimonials c-bg2">
    <div class="container">
      <div class="testimonials__header grid">
        <h3 class="testimonials__title">Business Partners</h3>
        <span class="testimonials__meta">What They Say About us</span>
        <div class="grid__break"></div>
        <p class="testimonials__copy c-t2">
          Our favorite agencies are our friends. <br>
          We help them to achieve their goals; they help us to stay sharp.
        </p>
      </div>
      <div class="testimonials__slider">
        <div
          class="testimonial c-bg3"
          v-for="(testimonial, i) in testimonials"
          :key="`testimonial-${i}`">
          <Picture
            class="testimonial__picture"
            :src="`/images/${testimonial.picture}`" />
          <div class="testimonial__body">
            <div class="testimonial__headline">
              {{ testimonial.author }},
              <span class="c-t2">{{ testimonial.role }}</span>
            </div>
            <Logo
              class="testimonial__logo"
              :src="`/logos/${testimonial.logo}`" />
            <div class="testimonial__copy">
              <header class="t2">{{ testimonial.headline }}</header>
              <p
                v-for="(text, j) in testimonial.copy"
                :key="`text-${j}`"
                class="c-t2">
                {{ text }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="testimonials__nav">
        <a
          class="testimonials__prev"
          @click="slider.prev()">
          <InlineSvg src="/icons/arrow.svg" />
        </a>
        <a
          class="testimonials__next"
          @click="slider.next()">
          <InlineSvg src="/icons/arrow.svg" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Siema from 'siema'
import InlineSvg from 'vue-inline-svg'
import Picture from '@/components/ui/Picture'
import Logo from '@/components/ui/Logo'

export default {
  name: 'Testimonials',
  components: {
    InlineSvg,
    Picture,
    Logo,
  },
  props: {
    active: Number,
  },
  data () {
    return {
      slider: null,
      scrollanim: {
        name: 'trans-el-from-bottom-fade',
        delay: 200,
        stagger: true,
      },
      testimonials: [
        {
          logo: 'xwp.svg',
          picture: 'testimonial-mike.jpg',
          author: 'Mike Crantea',
          role: 'Principal Engineer',
          headline: 'Working with Loud Now has been an absolute pleasure.',
          copy: [
            'They did a great job at creating stellar front-end based on custom designs, while also taking it the extra mile to provide feedback to the designer and bringing their own improvement to the table with polish, animations and over-all what you’d expect from someone with great UX skills and experience.',
            'One important differentiator is the ownership from the beginning until the end, and the care for detail which comes with them by default.',
            'I’m sure there will only be success stories coming out of the projects they’ll be handling.',
          ],
        },
        {
          logo: 'ds.svg',
          picture: 'testimonial-adam.jpg',
          author: 'Adam Chambers',
          role: 'Creative Tech Director',
          headline: 'We would highly recommend them as an experienced and professional development shop.',
          copy: [
            'We began working with Loud Now three years ago and they quickly became an integral part of our vendor network due to their lightning fast efficiency, excellent communication, and best in class development. We have collaborated on a number of projects, ranging from end to end Wordpress and CraftCMS websites, to collaborating as part of a larger team on custom built software.',
            'We have continued working with Loud Now team to this day and foresee this long term relationship continuing into the future. We would highly recommend them as an experienced and professional development shop as well as an excellent outsourced extension of an agency\'s in-house teams.',
          ],
        },
        {
          logo: 'artbees.svg',
          picture: 'testimonial-bob.jpg',
          author: 'Babak Azimzadeh',
          role: 'Chief Technology Officer',
          headline: 'Artbees recommends Loud Now as an expert in its field, and we are looking forward to working with them in the near future.',
          copy: [
            'My experience with Loud Now dates back to 2016 when we had some major challenges with our flagship WordPress theme called Jupiter. Making changes for a WP theme that powered hundreds of thousands of sites was a daunting task. But they have made several fundamental changes to our product.',
            'The outcome was extremely rewarding: many of our clients reported a more than 50% improvement in speed and performance.',
            'Loud Now developers were highly integrated into our team as if they were part of it. They delivered everything as planned, and we were so pleased with the collaboration that we even extended it for a long time.',
          ],
        },
      ],
    }
  },
  mounted () {
    this.setActive(this.active)
    this.slider = new Siema({
      selector: this.$el.querySelector('.testimonials__slider'),
      duration: 500,
    })
  },
  methods: {
    setActive (id) {
      this.testimonials = [
        ...this.testimonials.slice(id),
        ...this.testimonials.slice(0, id),
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.grid__break { width: 100%; }

.testimonials__meta {
  font-family: $font-tech;
  margin-left: auto;
}

.testimonials__copy {
  margin-top: 20px;
}

.testimonials__slider {
  margin-top: 70px;
}

.testimonial {
  display: flex;
  align-items: center;
}

.testimonial__picture {
  width: 340px;
  height: 500px;
  object-fit: cover;
}

.testimonial__body {
  padding: 45px;
  padding-left: 70px;
}

.testimonial__logo {
  margin-top: 10px;
}

.testimonial__copy {
  margin-top: 45px;

  header { margin-bottom: 20px; }
  p { margin-top: 10px; }
}

.testimonial {
  margin-left: 1px;
}

.testimonials__nav {
  clear: both;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 20px;
}

.testimonials__prev,
.testimonials__next {
  padding: 20px;
}

.testimonials__prev {
  transform: scaleX(-1);
}
</style>
